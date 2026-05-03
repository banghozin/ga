"use client";

import { INDUSTRIES, type IndustryKey } from "@/lib/tax-calc";

interface Props {
  value: IndustryKey;
  onChange: (v: IndustryKey) => void;
}

export function IndustrySelector({ value, onChange }: Props) {
  return (
    <div>
      <div className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase">
        제 2 항 ㆍ 업종
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {INDUSTRIES.map((ind) => {
          const selected = ind.key === value;
          return (
            <button
              key={ind.key}
              type="button"
              onClick={() => onChange(ind.key)}
              className={`text-left px-3 py-2.5 border-2 transition ${
                selected
                  ? "border-(--color-stamp) bg-(--color-stamp)/5"
                  : "border-(--color-rule) hover:border-(--color-rule-strong) bg-(--color-paper-deep)/30"
              }`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-medium text-sm">{ind.label}</span>
                {ind.freelanceEligible && (
                  <span
                    className="text-[10px] tracking-wider text-(--color-stamp) font-semibold"
                    title="3.3% 원천징수 대상"
                  >
                    3.3%
                  </span>
                )}
              </div>
              <div className="text-xs text-(--color-ink-faint) mt-0.5 leading-tight">
                {ind.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
