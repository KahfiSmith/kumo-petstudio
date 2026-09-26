export interface StudioHoursStatus {
  isOpen: boolean;
  badgeLabel: string;
  statusText: string;
  scheduleText: string;
}

export function getStudioHoursStatus(date: Date = new Date()): StudioHoursStatus {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    hour12: false,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  });

  const parts = formatter.formatToParts(date);
  const weekday = parts.find((p) => p.type === "weekday")?.value || "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
  const currentMinutes = hour * 60 + minute;

  const isSunday = weekday === "Sun";
  const openMinutes = isSunday ? 9 * 60 : 8 * 60 + 30;
  const closeMinutes = isSunday ? 18 * 60 : 20 * 60;
  const closeTimeLabel = isSunday ? "18:00 WIB" : "20:00 WIB";

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    return {
      isOpen: true,
      badgeLabel: "Studio Buka",
      statusText: `Buka Hari Ini (Tutup pukul ${closeTimeLabel})`,
      scheduleText: `Sedang Melayani Perawatan (Tutup ${closeTimeLabel})`,
    };
  }

  const opensToday = currentMinutes < openMinutes;
  const nextOpenTime = isSunday ? "09:00 WIB" : "08:30 WIB";
  const nextOpenText = opensToday
    ? `Mulai melayani hari ini pukul ${nextOpenTime}`
    : "Buka kembali besok pukul 08:30 WIB";

  return {
    isOpen: false,
    badgeLabel: "Tutup Sementara",
    statusText: `Studio Selesai Beroperasi (${nextOpenText})`,
    scheduleText: nextOpenText,
  };
}
