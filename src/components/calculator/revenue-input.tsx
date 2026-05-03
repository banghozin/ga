"use client";

import { useId } from "react";
import { formatKRWCompact } from "@/lib/utils";

interface Props {
  value: number;
  onChange: (v: number) => void;
  className?: string;
}

const MIN = 0;
const MAX = 500_000_000; // 5억
const STEP = 1_000_000;  // 100만원 단위

const PRESETS = [
  { v: 30_000_000, label: "3천만" },
  { v: 60_000_000, label: "6천만" },
  { v: 100_000_000, label: "1억" },
  { v: 200_000_000, label: "2억" },
];

export function RevenueInput({ value, onChange, className }: Props) {
  const id = useId();
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase"
      >
        제 1 항 ㆍ 연간 매출
      </label>

      <div className="mt-3 flex items-baseline gap-2">
        <input
          id={id}
          type="text"
          inputMode="numeric"
          value={value.toLocaleString("ko-KR")}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^\d]/g, "");
            const n = Number(raw || 0);
            if (!Number.isNaN(n)) onChange(Math.min(MAX, Math.max(MIN, n)));
          }}
          className="tnum w-full bg-transparent border-b-2 border-(--color-ink) text-3xl md:text-5xl font-display font-bold tracking-tight focus:outline-none focus:border-(--color-stamp) pb-1"
          aria-label="연간 매출 (원)"
        />
        <span className="font-display text-xl text-(--color-ink-soft)">원</span>
      </div>

      <div className="mt-1 text-sm tnum text-(--color-stamp) font-medium">
        ≈ {formatKRWCompact(value)}
      </div>

      <input
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full accent-(--color-stamp)"
        aria-label="매출 슬라이더"
      />

      <div className="mt-3 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.v}
            type="button"
            onClick={() => onChange(p.v)}
            className={`px-3 py-1.5 text-xs tracking-wider border transition ${
              value === p.v
                ? "bg-(--color-ink) text-(--color-paper) border-(--color-ink)"
                : "border-(--color-rule-strong) text-(--color-ink-soft) hover:bg-(--color-paper-deep)"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
