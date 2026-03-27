"use client";

import { useState, useEffect, useCallback } from "react";
import { Section } from "@/components/section";
import { FadeUp } from "@/components/motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalendarIcon,
  User,
  Mail,
  Building2,
  Phone,
  CheckCircle,
  Video,
  Loader2,
  AlertCircle,
} from "lucide-react";

type BookingStep = "date" | "time" | "details" | "confirm" | "success";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatTime(time: string) {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BookingCalendar() {
  const [step, setStep] = useState<BookingStep>("date");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    studio: "",
    phone: "",
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  // Fetch available slots when date is selected
  const fetchSlots = useCallback(async (date: string) => {
    setLoadingSlots(true);
    setSlotsError(null);
    setAvailableSlots([]);
    try {
      const res = await fetch(`/api/booking/availability?date=${date}`);
      const data = await res.json();
      if (data.error) {
        setSlotsError(data.error);
      } else {
        setAvailableSlots(data.slots || []);
      }
    } catch {
      setSlotsError("Could not load availability. Please try again.");
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchSlots(selectedDate);
    }
  }, [selectedDate, fetchSlots]);

  // Calendar grid generation
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  function isDateSelectable(day: number) {
    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    // No weekends, no past dates, no more than 30 days out
    return date >= today && date <= maxDate && date.getDay() !== 0 && date.getDay() !== 6;
  }

  function handleDateSelect(day: number) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    setSelectedTime(null);
    setStep("time");
  }

  function handleTimeSelect(time: string) {
    setSelectedTime(time);
    setStep("details");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          ...form,
        }),
      });

      const data = await res.json();
      if (data.error) {
        setSubmitError(data.error);
      } else {
        setStep("success");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again or call (208) 440-7609.");
    } finally {
      setSubmitting(false);
    }
  }

  function goToPrevMonth() {
    setCurrentMonth(new Date(year, month - 1, 1));
  }

  function goToNextMonth() {
    setCurrentMonth(new Date(year, month + 1, 1));
  }

  const canGoPrev = new Date(year, month, 1) > today;
  const canGoNext = new Date(year, month + 1, 1) <= maxDate;

  return (
    <Section className="pt-0">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <FadeUp>
          <div className="flex items-center justify-center gap-2 mb-8">
            {(["date", "time", "details", "confirm"] as const).map((s, i) => {
              const labels = ["Date", "Time", "Details", "Done"];
              const stepIndex = ["date", "time", "details", "success"].indexOf(step);
              const isActive = i <= stepIndex;
              const isCurrent = i === stepIndex;
              return (
                <div key={s} className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all ${
                        isCurrent
                          ? "bg-electric text-ink-950 glow-electric"
                          : isActive
                          ? "bg-electric/20 text-electric border border-electric/30"
                          : "bg-ink-800 text-ink-500 border border-white/5"
                      }`}
                    >
                      {isActive && i < stepIndex ? (
                        <CheckCircle className="h-3.5 w-3.5" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium hidden sm:inline ${
                        isCurrent ? "text-white" : isActive ? "text-ink-300" : "text-ink-500"
                      }`}
                    >
                      {labels[i]}
                    </span>
                  </div>
                  {i < 3 && (
                    <div
                      className={`w-8 sm:w-12 h-px ${
                        i < stepIndex ? "bg-electric/40" : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </FadeUp>

        {/* Step: Pick a Date */}
        {step === "date" && (
          <FadeUp>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
                  <CalendarIcon className="h-5 w-5 text-electric" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Pick a Date</h2>
                  <p className="text-xs text-ink-400">Select a weekday within the next 30 days</p>
                </div>
              </div>

              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goToPrevMonth}
                  disabled={!canGoPrev}
                  className="p-2 rounded-lg hover:bg-white/5 text-ink-300 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h3 className="text-base font-semibold text-white">
                  {MONTHS[month]} {year}
                </h3>
                <button
                  onClick={goToNextMonth}
                  disabled={!canGoNext}
                  className="p-2 rounded-lg hover:bg-white/5 text-ink-300 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Day Labels */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((d) => (
                  <div
                    key={d}
                    className="text-center text-xs font-medium text-ink-500 py-2"
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => {
                  if (day === null) {
                    return <div key={`empty-${i}`} />;
                  }

                  const selectable = isDateSelectable(day);
                  const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                  const isSelected = selectedDate === dateStr;
                  const isToday =
                    day === today.getDate() &&
                    month === today.getMonth() &&
                    year === today.getFullYear();

                  return (
                    <button
                      key={day}
                      onClick={() => selectable && handleDateSelect(day)}
                      disabled={!selectable}
                      className={`relative py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-electric text-ink-950 glow-electric"
                          : selectable
                          ? "text-white hover:bg-electric/10 hover:border-electric/20 border border-transparent"
                          : "text-ink-600 cursor-not-allowed"
                      }`}
                    >
                      {day}
                      {isToday && !isSelected && (
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric" />
                      )}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-ink-500 text-center mt-4">
                All times are in Mountain Time (MT)
              </p>
            </div>
          </FadeUp>
        )}

        {/* Step: Pick a Time */}
        {step === "time" && selectedDate && (
          <FadeUp>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
                    <Clock className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Pick a Time</h2>
                    <p className="text-xs text-ink-400">{formatDate(selectedDate)}</p>
                  </div>
                </div>
                <button
                  onClick={() => { setStep("date"); setSelectedTime(null); }}
                  className="text-xs text-electric hover:text-electric-light transition-colors"
                >
                  Change date
                </button>
              </div>

              {loadingSlots ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <Loader2 className="h-8 w-8 text-electric animate-spin" />
                  <p className="text-sm text-ink-400">Checking availability...</p>
                </div>
              ) : slotsError ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <AlertCircle className="h-8 w-8 text-red-400" />
                  <p className="text-sm text-red-400">{slotsError}</p>
                  <button
                    onClick={() => fetchSlots(selectedDate)}
                    className="text-xs text-electric hover:text-electric-light"
                  >
                    Try again
                  </button>
                </div>
              ) : availableSlots.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <CalendarIcon className="h-8 w-8 text-ink-500" />
                  <p className="text-sm text-ink-400">No available slots on this day.</p>
                  <button
                    onClick={() => { setStep("date"); setSelectedDate(null); }}
                    className="text-xs text-electric hover:text-electric-light"
                  >
                    Pick a different date
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {availableSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`py-3 px-4 rounded-lg text-sm font-medium transition-all border ${
                          selectedTime === time
                            ? "bg-electric text-ink-950 border-electric glow-electric"
                            : "bg-ink-800/50 text-white border-white/5 hover:border-electric/30 hover:bg-electric/5"
                        }`}
                      >
                        {formatTime(time)}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-ink-500 text-center mt-4">
                    30-minute Zoom meeting &middot; Mountain Time
                  </p>
                </>
              )}
            </div>
          </FadeUp>
        )}

        {/* Step: Your Details */}
        {step === "details" && selectedDate && selectedTime && (
          <FadeUp>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10 border border-electric/20">
                    <User className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Your Details</h2>
                    <p className="text-xs text-ink-400">
                      {formatDate(selectedDate)} at {formatTime(selectedTime)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setStep("time")}
                  className="text-xs text-electric hover:text-electric-light transition-colors"
                >
                  Change time
                </button>
              </div>

              {/* Booking Summary Card */}
              <div className="bg-ink-800/50 rounded-xl p-4 mb-6 border border-white/5">
                <div className="flex items-center gap-3 text-sm">
                  <Video className="h-4 w-4 text-electric shrink-0" />
                  <div>
                    <p className="text-white font-medium">30-minute Zoom Demo</p>
                    <p className="text-ink-400 text-xs">
                      {formatDate(selectedDate)} &middot; {formatTime(selectedTime)} MT
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-name" className="flex items-center gap-1.5 text-sm font-medium text-ink-200 mb-1.5">
                      <User className="h-3.5 w-3.5 text-ink-400" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="book-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-studio" className="flex items-center gap-1.5 text-sm font-medium text-ink-200 mb-1.5">
                      <Building2 className="h-3.5 w-3.5 text-ink-400" />
                      Studio Name *
                    </label>
                    <input
                      type="text"
                      id="book-studio"
                      required
                      value={form.studio}
                      onChange={(e) => setForm((f) => ({ ...f, studio: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                      placeholder="Your Tattoo Studio"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-email" className="flex items-center gap-1.5 text-sm font-medium text-ink-200 mb-1.5">
                      <Mail className="h-3.5 w-3.5 text-ink-400" />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="book-email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                      placeholder="you@studio.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="book-phone" className="flex items-center gap-1.5 text-sm font-medium text-ink-200 mb-1.5">
                      <Phone className="h-3.5 w-3.5 text-ink-400" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="book-phone"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-2.5 bg-ink-800 border border-white/10 rounded-lg text-sm text-white placeholder-ink-500 focus:outline-none focus:border-electric/50 focus:ring-1 focus:ring-electric/20 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="h-4 w-4 text-red-400 shrink-0" />
                    <p className="text-sm text-red-400">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-electric text-ink-950 rounded-lg text-sm font-semibold hover:bg-electric-light transition-colors glow-electric disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Confirm & Book Demo"
                  )}
                </button>

                <p className="text-xs text-ink-500 text-center">
                  You&apos;ll receive a calendar invite and Zoom link at your email.
                </p>
              </form>
            </div>
          </FadeUp>
        )}

        {/* Step: Success */}
        {step === "success" && selectedDate && selectedTime && (
          <FadeUp>
            <div className="glass-card rounded-2xl p-8 sm:p-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neon-green/10 border border-neon-green/20 mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-neon-green" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">You&apos;re Booked!</h2>
              <p className="text-sm text-ink-300 mb-6 max-w-md mx-auto">
                Your demo is confirmed. Check your email for a calendar invite with the Zoom link.
              </p>

              <div className="bg-ink-800/50 rounded-xl p-5 max-w-sm mx-auto mb-6 border border-white/5 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-4 w-4 text-electric shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">{formatDate(selectedDate)}</p>
                    <p className="text-xs text-ink-400">{formatTime(selectedTime)} Mountain Time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="h-4 w-4 text-electric shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Zoom Meeting</p>
                    <p className="text-xs text-ink-400">Link sent to {form.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-electric shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">30 minutes</p>
                    <p className="text-xs text-ink-400">Live demo &amp; discussion</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-white">What to expect:</p>
                <div className="flex flex-col items-start max-w-sm mx-auto space-y-2 text-left">
                  <div className="flex items-start gap-2 text-sm text-ink-300">
                    <span className="text-electric mt-0.5">1.</span>
                    <span>Live walkthrough of the full platform</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-ink-300">
                    <span className="text-electric mt-0.5">2.</span>
                    <span>SEO strategy tailored to your market</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-ink-300">
                    <span className="text-electric mt-0.5">3.</span>
                    <span>Honest assessment — is this right for your shop?</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-ink-500">
                  Need to reschedule? Email{" "}
                  <a href="mailto:beto@betoparedes.com" className="text-electric hover:text-electric-light">
                    beto@betoparedes.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+12084407609" className="text-electric hover:text-electric-light">
                    (208) 440-7609
                  </a>
                </p>
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </Section>
  );
}
