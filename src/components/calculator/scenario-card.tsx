"use client";

import { formatKRW, formatKRWCompact } from "@/lib/utils";
import type { ScenarioResult } from "@/lib/tax-calc";

interface Props {
  result: ScenarioResult;
  isRecommended: boolean;
  layout?: "compact" | "full";
}

export function ScenarioCard({ result, isRecommended, layout = "full" }: Props) {
  const eligible = result.eligible;

  return (
    <article
      className={`relative border-2 p-5 md:p-6 transition ${
        eligible
          ? isRecommended
            ? "border-(--color-stamp) bg-(--color-paper-deep)"
            : "border-(--color-rule-strong) bg-(--color-paper-deep)/40"
          : "border-(--color-rule) bg-(--color-paper)/50 opacity-70"
      }`}
    >
      {isRecommended && eligible && (
        <div className="absolute -top-3 left-4 bg-(--color-stamp) text-(--color-paper) px-2.5 py-0.5 text-[10px] tracking-[0.2em] font-semibold">
          추 천
        </div>
      )}

      <header className="flex items-baseline justify-between">
        <h3 className="font-display text-xl md:text-2xl font-bold">{result.label}</h3>
        {eligible && (
          <span className="text-[10px] tnum text-(--color-ink-faint) tracking-wider">
            한계세율 {(result.marginalRate * 100).toFixed(0)}%
          </span>
        )}
      </header>

      {!eligible ? (
        <p className="mt-4 text-sm text-(--color-ink-soft) leading-relaxed">
          {result.ineligibleReason}
        </p>
      ) : (
        <>
          <div className="mt-4">
            <div className="text-[10px] tracking-[0.2em] uppercase text-(--color-ink-faint)">
              연 실수령 추정
            </div>
            <div
              key={result.netIncome}
              className="num-flip mt-1 font-display font-bold tnum text-3xl md:text-4xl text-(--color-ink) tracking-tight"
            >
              {formatKRW(result.netIncome)}
              <span className="text-lg ml-1 text-(--color-ink-soft)">원</span>
            </div>
            <div className="tnum text-xs text-(--color-ink-faint) mt-1">
              월 환산 {formatKRWCompact(result.netIncome / 12)}
            </div>
          </div>

          {layout === "full" && (
            <dl className="mt-5 pt-4 tax-rule grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
              <Row label="사업소득" value={result.businessIncome} />
              <Row label="종합소득세" value={-result.incomeTaxTotal} />
              {result.vatPayable > 0 && (
                <Row label="부가세" value={-result.vatPayable} />
              )}
              <Row label="4대보험(추정)" value={-result.socialInsurance} />
            </dl>
          )}
        </>
      )}
    </article>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  const negative = value < 0;
  return (
    <>
      <dt className="text-(--color-ink-soft)">{label}</dt>
      <dd
        className={`tnum text-right font-medium ${
          negative ? "text-(--color-stamp-dim)" : "text-(--color-ink)"
        }`}
      >
        {negative ? "−" : ""}
        {formatKRW(Math.abs(value))}
      </dd>
    </>
  );
}
