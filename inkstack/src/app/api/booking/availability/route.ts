import { NextRequest, NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/google-calendar";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Date parameter required" }, { status: 400 });
  }

  // Don't allow booking in the past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const requestedDate = new Date(date + "T00:00:00");
  if (requestedDate < today) {
    return NextResponse.json({ slots: [] });
  }

  // Don't allow booking more than 30 days out
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  if (requestedDate > maxDate) {
    return NextResponse.json({ error: "Cannot book more than 30 days in advance" }, { status: 400 });
  }

  try {
    const slots = await getAvailableSlots(date);
    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Failed to fetch availability:", error);
    return NextResponse.json(
      { error: "Failed to fetch availability. Please try again." },
      { status: 500 }
    );
  }
}
