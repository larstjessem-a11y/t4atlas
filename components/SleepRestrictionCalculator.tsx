"use client";

import { useMemo, useState } from "react";

function formatTime(totalMinutes: number) {
  const minutesInDay = 24 * 60;
  const normalized = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay;
  const hours = Math.floor(normalized / 60);
  const minutes = normalized % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export default function SleepRestrictionCalculator() {
  const [averageSleepHours, setAverageSleepHours] = useState("6");
  const [wakeTime, setWakeTime] = useState("07:00");

  const result = useMemo(() => {
    const sleepHours = Number(averageSleepHours);

    if (!wakeTime || Number.isNaN(sleepHours) || sleepHours <= 0) {
      return null;
    }

    const [wakeHour, wakeMinute] = wakeTime.split(":").map(Number);
    const wakeTotalMinutes = wakeHour * 60 + wakeMinute;

    const conservativeSleepHours = Math.max(5, Math.min(sleepHours, 8.5));
    const sleepWindowMinutes = Math.round(conservativeSleepHours * 60);
    const bedtimeMinutes = wakeTotalMinutes - sleepWindowMinutes;

    return {
      bedtime: formatTime(bedtimeMinutes),
      wakeTime,
      sleepWindow: conservativeSleepHours.toFixed(1),
    };
  }, [averageSleepHours, wakeTime]);

  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Calculate a sleep window</h2>
      <p className="mt-3 text-gray-700">
        Enter your estimated average sleep time and fixed wake time. The tool
        creates a conservative educational sleep window.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Average actual sleep per night
          </label>
          <input
            type="number"
            min="1"
            max="12"
            step="0.5"
            value={averageSleepHours}
            onChange={(event) => setAverageSleepHours(event.target.value)}
            className="w-full rounded-2xl border p-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Fixed wake time
          </label>
          <input
            type="time"
            value={wakeTime}
            onChange={(event) => setWakeTime(event.target.value)}
            className="w-full rounded-2xl border p-4"
          />
        </div>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl border bg-gray-50 p-5">
          <h3 className="text-lg font-semibold">Suggested sleep window</h3>
          <p className="mt-3 text-2xl font-bold">
            {result.bedtime} – {result.wakeTime}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Approximate time in bed: {result.sleepWindow} hours
          </p>
        </div>
      )}
    </section>
  );
}