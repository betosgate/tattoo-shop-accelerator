import { google } from "googleapis";

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || "primary";
const SCOPES = [
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar.events",
];

function getAuth() {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!credentials) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set");
  }

  const key = JSON.parse(credentials);
  // Vercel env vars may double-escape newlines in the private key
  const privateKey = key.private_key.replace(/\\n/g, "\n");
  return new google.auth.JWT({
    email: key.client_email,
    key: privateKey,
    scopes: SCOPES,
    subject: "beto@betoparedes.com", // impersonate calendar owner
  });
}

export async function getAvailableSlots(dateStr: string): Promise<string[]> {
  const auth = getAuth();
  const calendar = google.calendar({ version: "v3", auth });

  const dayStart = new Date(`${dateStr}T00:00:00`);
  const dayEnd = new Date(`${dateStr}T23:59:59`);

  // Get busy times from free/busy API
  const freeBusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      timeZone: "America/Boise",
      items: [{ id: CALENDAR_ID }],
    },
  });

  const busySlots =
    freeBusy.data.calendars?.[CALENDAR_ID]?.busy || [];

  // Generate 30-min slots from 9am to 5pm (last slot at 4:30pm)
  const slots: string[] = [];
  for (let hour = 9; hour < 17; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 16 && minute === 30) continue; // 4:30pm is last start
      const slotStart = new Date(`${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`);
      const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

      // Check if slot overlaps with any busy period
      const isAvailable = !busySlots.some((busy) => {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);
        return slotStart < busyEnd && slotEnd > busyStart;
      });

      if (isAvailable) {
        slots.push(
          `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`
        );
      }
    }
  }

  return slots;
}

export async function createBooking(params: {
  date: string;
  time: string;
  name: string;
  email: string;
  studio: string;
  phone?: string;
}) {
  const auth = getAuth();
  const calendar = google.calendar({ version: "v3", auth });

  const startDateTime = new Date(`${params.date}T${params.time}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

  const event = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: {
      summary:
        "Booking for demo and discussion on Tattoo Shop Accelerator over Zoom",
      description: `${params.name} from ${params.studio} has booked a demo.
Contact: ${params.email}${params.phone ? ` | ${params.phone}` : ""}

---

Beto Paredes is inviting you to a scheduled Zoom meeting to discuss our Tattoo Shop platform solutions.

Join Zoom Meeting
https://us06web.zoom.us/j/6182044124?pwd=b8RCyw5bHTpXWqyax3P0CAWCoJS3mJ.1

Meeting ID: 618 204 4124
Passcode: 790655

---

One tap mobile
+16699006833,,6182044124#,,,,*790655# US (San Jose)
+17193594580,,6182044124#,,,,*790655# US

Join instructions
https://us06web.zoom.us/meetings/6182044124/invitations?signature=jCaT7BADDtgYlMusrZhQrl2RxDzNz9Dgo5g7suSsGxI`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: "America/Boise",
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: "America/Boise",
      },
      attendees: [
        { email: "beto@betoparedes.com" },
        { email: params.email },
      ],
      conferenceData: undefined,
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 60 },
          { method: "popup", minutes: 15 },
        ],
      },
    },
    sendUpdates: "all",
  });

  return event.data;
}
