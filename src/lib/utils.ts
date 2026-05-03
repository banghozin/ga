import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const krFmt = new Intl.NumberFormat("ko-KR");

export function formatKRW(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return krFmt.format(Math.round(n));
}

export function formatKRWCompact(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";
  if (abs >= 100_000_000) return `${sign}${(abs / 100_000_000).toFixed(2)}억원`;
  if (abs >= 10_000) return `${sign}${(abs / 10_000).toFixed(0)}만원`;
  return `${sign}${krFmt.format(abs)}원`;
}
