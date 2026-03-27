import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/google-calendar";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, time, name, email, studio, phone } = body;

    if (!date || !time || !name || !email || !studio) {
      return NextResponse.json(
        { error: "Missing required fields: date, time, name, email, studio" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Don't allow booking in the past
    const now = new Date();
    const bookingTime = new Date(`${date}T${time}:00`);
    if (bookingTime < now) {
      return NextResponse.json({ error: "Cannot book a time in the past" }, { status: 400 });
    }

    const event = await createBooking({ date, time, name, email, studio, phone });

    return NextResponse.json({
      success: true,
      eventId: event.id,
      start: event.start?.dateTime,
      end: event.end?.dateTime,
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Failed to create booking:", errMsg, error);
    return NextResponse.json(
      { error: "Failed to create booking. Please try again or call (208) 440-7609.", debug: errMsg },
      { status: 500 }
    );
  }
}
