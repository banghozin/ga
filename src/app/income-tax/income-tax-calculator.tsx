"use client";

import { useId, useMemo, useState } from "react";
import { computeComprehensive } from "@/lib/tax-calc";
import { AdSlot } from "@/components/ad-slot";
import { formatKRW, formatKRWCompact } from "@/lib/utils";

export function IncomeTaxCalculator() {
  const [salary, setSalary] = useState(50_000_000);
  const [businessRevenue, setBusinessRevenue] = useState(20_000_000);
  const [expenseRate, setExpenseRate] = useState(0.5);
  const [dependents, setDependents] = useState(0);

  const result = useMemo(
    () =>
      computeComprehensive({
        salaryIncome: salary,
        businessRevenue,
        businessExpenseRate: expenseRate,
        dependents,
      }),
    [salary, businessRevenue, expenseRate, dependents]
  );

  return (
    <main className="flex-1 px-5 md:px-10 py-8 md:py-12 max-w-6xl w-full mx-auto">
      {/* Hero */}
      <section className="mb-8 md:mb-12">
        <p className="font-display text-[10px] md:text-xs tracking-[0.3em] text-(--color-stamp) uppercase">
          ㆍ 직장인 부업ㆍN잡러 ㆍ
        </p>
        <h1 className="mt-2 font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight">
          종합소득세
          <br />
          <span className="ribbon">합산 시뮬</span>
        </h1>
        <p className="mt-4 max-w-2xl text-(--color-ink-soft) leading-relaxed text-sm md:text-base">
          연봉(근로소득)과 사업소득을 합쳐 5월에 신고하는 종합소득세. 두 소득의 합이 어느 누진세율 구간으로 올라가는지 즉시 확인하세요.
        </p>
      </section>

      <div className="mb-8 md:mb-10">
        <AdSlot variant="banner" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {/* Inputs */}
        <section className="md:col-span-5 space-y-8">
          <NumberField
            label="제 1 항 ㆍ 연봉 (근로소득 총급여)"
            value={salary}
            onChange={setSalary}
            max={500_000_000}
            step={1_000_000}
            presets={[30_000_000, 50_000_000, 80_000_000, 120_000_000]}
            presetLabels={["3천만", "5천만", "8천만", "1.2억"]}
          />

          <NumberField
            label="제 2 항 ㆍ 사업·기타소득 (연 매출)"
            value={businessRevenue}
            onChange={setBusinessRevenue}
            max={500_000_000}
            step={1_000_000}
            presets={[5_000_000, 20_000_000, 50_000_000, 100_000_000]}
            presetLabels={["500만", "2천만", "5천만", "1억"]}
          />

          <RateField
            label="제 3 항 ㆍ 사업소득 경비율"
            value={expenseRate}
            onChange={setExpenseRate}
          />

          <DependentsField value={dependents} onChange={setDependents} />
        </section>

        {/* Result */}
        <section className="md:col-span-7 space-y-6">
          <div className="border-2 border-(--color-ink) bg-(--color-paper-deep) p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-(--color-stamp)">
                ━━ 종합소득세 (지방세 포함) ━━
              </span>
              <span className="text-[10px] text-(--color-ink-faint)">연 단위</span>
            </div>
            <div
              key={result.totalTax}
              className="num-flip mt-3 font-display font-bold tnum text-5xl md:text-7xl tracking-tighter text-(--color-stamp-dim)"
            >
              {formatKRW(result.totalTax)}
              <span className="text-2xl ml-2 text-(--color-ink-soft) align-baseline">원</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <Stat label="한계세율" value={`${(result.marginalRate * 100).toFixed(0)}%`} />
              <Stat label="실효세율" value={`${(result.effectiveRate * 100).toFixed(2)}%`} />
            </div>
          </div>

          <div className="border-2 border-(--color-rule-strong) p-5 md:p-6">
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-(--color-ink-soft) mb-3">
              계산 내역
            </h3>
            <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <Row label="근로소득금액" value={result.workIncome} />
              <Row label="사업소득금액" value={result.businessIncome} />
              <Row label="종합소득금액" value={result.totalIncome} bold />
              <Row label="과세표준" value={result.taxableIncome} />
              <Row label="소득세" value={-result.incomeTax} />
              <Row label="지방소득세 (10%)" value={-result.localTax} />
              <Row label="총 세부담" value={-result.totalTax} bold />
              <Row label="세후 실수령(추정)" value={result.netAfterTax} highlight />
            </dl>
            <p className="mt-4 text-[11px] text-(--color-ink-faint) leading-relaxed">
              * 인적공제만 반영한 단순 추정값입니다. 실제 신고 시에는 의료비·교육비·기부금·신용카드사용액·연금저축 등 각종 공제·세액공제가 추가로 적용됩니다.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12">
        <AdSlot variant="banner" />
      </div>

      <footer className="mt-8 pt-6 border-t-2 border-(--color-ink) text-[11px] text-(--color-ink-faint) leading-relaxed">
        본 시뮬레이터는 <strong>참고용 추정 계산</strong>입니다. 정확한 신고는 세무 전문가와 상의하세요. 2026 종합소득세율·근로소득공제표 적용.
      </footer>
    </main>
  );
}

// ─── Form Pieces ───
interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  max: number;
  step: number;
  presets: number[];
  presetLabels: string[];
}

function NumberField({ label, value, onChange, max, step, presets, presetLabels }: NumberFieldProps) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase"
      >
        {label}
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
            if (!Number.isNaN(n)) onChange(Math.min(max, Math.max(0, n)));
          }}
          className="tnum w-full bg-transparent border-b-2 border-(--color-ink) text-2xl md:text-4xl font-display font-bold tracking-tight focus:outline-none focus:border-(--color-stamp) pb-1"
        />
        <span className="font-display text-lg text-(--color-ink-soft)">원</span>
      </div>
      <div className="mt-1 text-xs tnum text-(--color-stamp) font-medium">
        ≈ {formatKRWCompact(value)}
      </div>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-(--color-stamp)"
      />
      <div className="mt-2 flex flex-wrap gap-1.5">
        {presets.map((v, i) => (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={`px-2.5 py-1 text-[11px] tracking-wider border transition ${
              value === v
                ? "bg-(--color-ink) text-(--color-paper) border-(--color-ink)"
                : "border-(--color-rule-strong) text-(--color-ink-soft) hover:bg-(--color-paper-deep)"
            }`}
          >
            {presetLabels[i]}
          </button>
        ))}
      </div>
    </div>
  );
}

function RateField({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase">{label}</div>
      <div className="mt-3 flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-(--color-stamp)"
        />
        <span className="tnum w-14 text-right text-base font-medium">
          {(value * 100).toFixed(0)}%
        </span>
      </div>
      <p className="text-[11px] text-(--color-ink-faint) mt-1">
        매출 대비 비용 비율. 정확히 모르시면 IT/서비스 50~60%, 도소매 80~90%, 음식점 85~92% 정도로 가정.
      </p>
    </div>
  );
}

function DependentsField({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase">제 4 항 ㆍ 부양가족</div>
      <div className="mt-3 flex gap-1.5">
        {[0, 1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`flex-1 py-2 text-sm border transition ${
              value === n
                ? "bg-(--color-ink) text-(--color-paper) border-(--color-ink)"
                : "border-(--color-rule) hover:border-(--color-rule-strong)"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-(--color-rule-strong) bg-(--color-paper) px-3 py-2">
      <div className="text-[10px] tracking-wider text-(--color-ink-faint)">{label}</div>
      <div className="font-display font-bold tnum text-lg mt-0.5">{value}</div>
    </div>
  );
}

function Row({ label, value, bold, highlight }: { label: string; value: number; bold?: boolean; highlight?: boolean }) {
  const negative = value < 0;
  return (
    <>
      <dt className={`text-(--color-ink-soft) ${bold ? "font-semibold text-(--color-ink)" : ""}`}>
        {label}
      </dt>
      <dd
        className={`tnum text-right ${
          highlight ? "text-(--color-leaf) font-bold" : negative ? "text-(--color-stamp-dim)" : ""
        } ${bold ? "font-bold" : ""}`}
      >
        {negative ? "−" : ""}
        {formatKRW(Math.abs(value))}원
      </dd>
    </>
  );
}
