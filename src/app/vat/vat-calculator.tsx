"use client";

import { useId, useMemo, useState } from "react";
import { computeVat, INDUSTRIES, type IndustryKey, type VatType } from "@/lib/tax-calc";
import { AdSlot } from "@/components/ad-slot";
import { formatKRW, formatKRWCompact } from "@/lib/utils";

export function VatCalculator() {
  const [type, setType] = useState<VatType>("general");
  const [industry, setIndustry] = useState<IndustryKey>("retail");
  const [sales, setSales] = useState(60_000_000);
  const [purchases, setPurchases] = useState(30_000_000);
  const [cardRatio, setCardRatio] = useState(0.5);

  const result = useMemo(
    () => computeVat({ type, industry, sales, purchases, cardSalesRatio: cardRatio }),
    [type, industry, sales, purchases, cardRatio]
  );

  const halfYearPayable = result.payable / 2;

  return (
    <main className="flex-1 px-5 md:px-10 py-8 md:py-12 max-w-6xl w-full mx-auto">
      {/* Hero */}
      <section className="mb-8 md:mb-12">
        <p className="font-display text-[10px] md:text-xs tracking-[0.3em] text-(--color-stamp) uppercase">
          ㆍ 사업자ㆍ개인사업자 ㆍ
        </p>
        <h1 className="mt-2 font-display font-bold text-4xl md:text-6xl leading-[0.95] tracking-tight">
          부가가치세
          <br />
          <span className="ribbon">신고액</span>
        </h1>
        <p className="mt-4 max-w-2xl text-(--color-ink-soft) leading-relaxed text-sm md:text-base">
          매출 ㆍ 매입 ㆍ 카드결제 비중만 입력하면 일반·간이 두 방식 모두 즉시 계산. 매출세액공제까지 자동 반영합니다.
        </p>
      </section>

      <div className="mb-8 md:mb-10">
        <AdSlot variant="banner" />
      </div>

      {/* Type toggle */}
      <div className="mb-8 flex gap-2 border-2 border-(--color-ink) p-1 max-w-md">
        {(["general", "simple"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`flex-1 py-2.5 text-sm font-medium tracking-wider transition ${
              type === t
                ? "bg-(--color-ink) text-(--color-paper)"
                : "text-(--color-ink-soft) hover:bg-(--color-paper-deep)"
            }`}
          >
            {t === "general" ? "일반과세자" : "간이과세자"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        {/* Inputs */}
        <section className="md:col-span-5 space-y-8">
          {type === "simple" && (
            <div>
              <label className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase">
                업종
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value as IndustryKey)}
                className="mt-2 w-full bg-transparent border-2 border-(--color-rule) px-3 py-2.5 text-sm focus:border-(--color-stamp) focus:outline-none"
              >
                {INDUSTRIES.map((ind) => (
                  <option key={ind.key} value={ind.key}>
                    {ind.label} (부가가치율 {(ind.simpleVatAddedRate * 100).toFixed(0)}%)
                  </option>
                ))}
              </select>
            </div>
          )}

          <NumberField
            label={`매출 ${type === "general" ? "(공급가액 · 부가세 별도)" : "(부가세 포함 매출액)"}`}
            value={sales}
            onChange={setSales}
            max={500_000_000}
            step={1_000_000}
            presets={[20_000_000, 60_000_000, 100_000_000, 200_000_000]}
            presetLabels={["2천만", "6천만", "1억", "2억"]}
          />

          <NumberField
            label="매입 (세금계산서 수취분)"
            value={purchases}
            onChange={setPurchases}
            max={500_000_000}
            step={500_000}
            presets={[5_000_000, 20_000_000, 50_000_000, 100_000_000]}
            presetLabels={["500만", "2천만", "5천만", "1억"]}
          />

          <RateField
            label="신용카드 매출 비중"
            value={cardRatio}
            onChange={setCardRatio}
            help="카드·현금영수증 매출 비율. 음식·숙박업 외에는 1.3% 공제 (한도 1천만원/연)."
          />
        </section>

        {/* Result */}
        <section className="md:col-span-7 space-y-6">
          <div className="border-2 border-(--color-ink) bg-(--color-paper-deep) p-6 md:p-8 relative">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-(--color-stamp)">
                ━━ 연 부가세 납부세액 ━━
              </span>
              <span className="text-[10px] text-(--color-ink-faint)">
                {type === "general" ? "일반과세 ㆍ 반기 신고" : "간이과세 ㆍ 연 1회 신고"}
              </span>
            </div>
            <div
              key={result.payable}
              className="num-flip mt-3 font-display font-bold tnum text-5xl md:text-7xl tracking-tighter text-(--color-stamp-dim)"
            >
              {formatKRW(result.payable)}
              <span className="text-2xl ml-2 text-(--color-ink-soft) align-baseline">원</span>
            </div>

            {result.note ? (
              <div className="mt-3 inline-block px-3 py-1 bg-(--color-leaf) text-(--color-paper) text-xs font-medium">
                ✓ {result.note}
              </div>
            ) : type === "general" ? (
              <div className="mt-3 tnum text-sm text-(--color-ink-soft)">
                반기당 약 <strong className="text-(--color-ink)">{formatKRWCompact(halfYearPayable)}</strong>
                {" "}× 2회 (1월·7월 신고)
              </div>
            ) : (
              <div className="mt-3 tnum text-sm text-(--color-ink-soft)">
                매년 1월에 1회 신고 ㆍ 매출 대비 실 부담률{" "}
                <strong className="text-(--color-ink)">{(result.effectiveRate * 100).toFixed(2)}%</strong>
              </div>
            )}
          </div>

          <div className="border-2 border-(--color-rule-strong) p-5 md:p-6">
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-(--color-ink-soft) mb-3">
              계산 내역
            </h3>
            <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              <Row label="매출세액 (10%)" value={result.outputVat} />
              <Row label="매입세액 공제" value={-result.inputVat} />
              {result.cardCredit > 0 && (
                <Row label="신용카드 매출세액공제" value={-result.cardCredit} />
              )}
              <Row label="납부세액" value={result.payable} bold highlight />
            </dl>
            <p className="mt-4 text-[11px] text-(--color-ink-faint) leading-relaxed">
              * 일반과세는 매출/매입을 부가세 제외 공급가액 기준으로 입력. 간이과세는 부가세 포함 매출액 기준이며, 업종별 부가가치율에 따라 부담이 달라집니다. 음식·숙박업의 카드 매출세액공제는 2.6%로 우대되지만 본 계산기는 일반 1.3% 기준입니다.
            </p>
          </div>

          {/* Schedule reminder */}
          <div className="border border-(--color-rule-strong) bg-(--color-paper) p-4">
            <div className="font-display text-xs tracking-[0.25em] uppercase text-(--color-ink-faint) mb-2">
              신고 일정 (2026 기준)
            </div>
            {type === "general" ? (
              <ul className="text-xs space-y-1 text-(--color-ink-soft)">
                <li>· 1기 확정신고: 7월 1일 ~ 7월 25일 (1~6월 매출분)</li>
                <li>· 2기 확정신고: 1월 1일 ~ 1월 25일 (7~12월 매출분)</li>
                <li>· 예정신고 (법인 또는 개인 자율): 4월 / 10월 25일</li>
              </ul>
            ) : (
              <ul className="text-xs space-y-1 text-(--color-ink-soft)">
                <li>· 연 1회 확정신고: 1월 1일 ~ 1월 25일 (전년 1~12월 매출분)</li>
                <li>· 7월 25일까지 직전 6개월분 예정고지액 납부 (대부분 자동)</li>
              </ul>
            )}
          </div>
        </section>
      </div>

      <div className="mt-12">
        <AdSlot variant="banner" />
      </div>

      <footer className="mt-8 pt-6 border-t-2 border-(--color-ink) text-[11px] text-(--color-ink-faint) leading-relaxed">
        본 시뮬레이터는 <strong>참고용 추정 계산</strong>입니다. 실제 신고는 홈택스 또는 세무 전문가와 상의하세요.
      </footer>
    </main>
  );
}

// ─── Form Pieces (shared with income-tax page in spirit) ───
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

function RateField({
  label,
  value,
  onChange,
  help,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  help?: string;
}) {
  return (
    <div>
      <div className="font-display text-sm tracking-[0.2em] text-(--color-ink-soft) uppercase">{label}</div>
      <div className="mt-3 flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-(--color-stamp)"
        />
        <span className="tnum w-14 text-right text-base font-medium">
          {(value * 100).toFixed(0)}%
        </span>
      </div>
      {help && <p className="text-[11px] text-(--color-ink-faint) mt-1">{help}</p>}
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
          highlight ? "text-(--color-stamp) font-bold" : negative ? "text-(--color-stamp-dim)" : ""
        } ${bold ? "font-bold" : ""}`}
      >
        {negative ? "−" : ""}
        {formatKRW(Math.abs(value))}원
      </dd>
    </>
  );
}
