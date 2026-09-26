"use client";

import { useSyncExternalStore } from "react";
import { getStudioHoursStatus, StudioHoursStatus } from "@/utils/studioHours";

interface LiveStudioStatusProps {
  className?: string;
  variant?: "pill" | "text";
}

let cachedStatusString = "";
let lastCheckedMinute = 0;

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 60000);
  return () => clearInterval(interval);
}

function getSnapshot(): string {
  const currentMinute = Math.floor(Date.now() / 60000);
  if (currentMinute !== lastCheckedMinute || !cachedStatusString) {
    lastCheckedMinute = currentMinute;
    cachedStatusString = JSON.stringify(getStudioHoursStatus());
  }
  return cachedStatusString;
}

function getServerSnapshot(): string {
  return "";
}

export function LiveStudioStatus({ className = "", variant = "pill" }: LiveStudioStatusProps) {
  const rawStatus = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const status: StudioHoursStatus | null = rawStatus
    ? (JSON.parse(rawStatus) as StudioHoursStatus)
    : null;

  if (!status) {
    return (
      <span className={`inline-flex items-center gap-2 text-xs text-[#6C6760] ${className}`}>
        <span className="w-2 h-2 rounded-full bg-[#9E988E]" aria-hidden="true" />
        <span>Buka Hari Ini (08:30 - 20:00 WIB)</span>
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium ${className}`}>
        <span
          className={`w-2 h-2 rounded-full ${
            status.isOpen ? "bg-[#58694B]" : "bg-[#9E988E]"
          }`}
          aria-hidden="true"
        />
        <span className={status.isOpen ? "text-[#1E1C1A]" : "text-[#6C6760]"}>
          {status.statusText}
        </span>
      </span>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${
        status.isOpen
          ? "bg-[#EEF2EC] text-[#58694B] border-[#58694B]/20"
          : "bg-[#F3EFEA] text-[#6C6760] border-[#E7E2D9]"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          status.isOpen ? "bg-[#58694B]" : "bg-[#9E988E]"
        }`}
        aria-hidden="true"
      />
      <span className="font-semibold">{status.badgeLabel}</span>
      <span className="text-[#9E988E]">·</span>
      <span className="font-normal text-[#6C6760]">{status.scheduleText}</span>
    </div>
  );
}
