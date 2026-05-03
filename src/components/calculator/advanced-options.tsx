"use client";

import { useState } from "react";
import { getIndustry, type IndustryKey } from "@/lib/tax-calc";

interface Props {
  industry: IndustryKey;
  customExpenseRate: number | null;
  setExpenseRate: (v: number | null) => void;
  dependents: number;
  setDependents: (v: number) => void;
}

export function AdvancedOptions({
  industry,
  customExpenseRate,
  setExpenseRate,
  dependents,
  setDependents,
}: Props) {
  const [open, setOpen] = useState(false);
  const ind = getIndustry(industry);
  const usingDefault = customExpenseRate === null;
  const ratePct = customExpenseRate ?? ind.expenseRate;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="text-xs tracking-[0.18em] uppercase text-(--color-ink-soft) hover:text-(--color-stamp) flex items-center gap-2"
      >
        <span className="inline-block w-4 h-px bg-current" />
        세부 조건 {open ? "닫기" : "열기"}
      </button>

      {open && (
        <div className="mt-4 space-y-5 pl-3 border-l-2 border-(--color-rule)">
          {/* 경비율 */}
          <div>
            <div className="flex items-baseline justify-between">
              <label className="text-xs tracking-wider text-(--color-ink-soft)">
                경비율 (매출 대비 비용 비율)
              </label>
              <button
                type="button"
                onClick={() => setExpenseRate(usingDefault ? ind.expenseRate : null)}
                className="text-[10px] underline text-(--color-stamp)"
              >
                {usingDefault ? "직접 입력" : "기본값 사용"}
              </button>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={ratePct}
                disabled={usingDefault}
                onChange={(e) => setExpenseRate(Number(e.target.value))}
                className="flex-1 accent-(--color-stamp) disabled:opacity-40"
              />
              <span className="tnum w-14 text-right text-sm">
                {(ratePct * 100).toFixed(0)}%
              </span>
            </div>
            <p className="text-[11px] text-(--color-ink-faint) mt-1">
              {usingDefault
                ? `현재 단순경비율 ${(ind.expenseRate * 100).toFixed(1)}% 적용 중`
                : "직접 입력 모드 (장부 신고 가정)"}
            </p>
          </div>

          {/* 부양가족 */}
          <div>
            <label className="text-xs tracking-wider text-(--color-ink-soft)">
              부양가족 수 (본인 제외)
            </label>
            <div className="mt-2 flex gap-1.5">
              {[0, 1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setDependents(n)}
                  className={`flex-1 py-1.5 text-sm border transition ${
                    dependents === n
                      ? "bg-(--color-ink) text-(--color-paper) border-(--color-ink)"
                      : "border-(--color-rule) hover:border-(--color-rule-strong)"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
