"use client";

import { useCalc } from "@/components/calculator/use-calc";
import { RevenueInput } from "@/components/calculator/revenue-input";
import { IndustrySelector } from "@/components/calculator/industry-selector";
import { AdvancedOptions } from "@/components/calculator/advanced-options";
import { ScenarioCard } from "@/components/calculator/scenario-card";
import { BreakevenChart } from "@/components/calculator/breakeven-chart";
import { formatKRW, formatKRWCompact } from "@/lib/utils";

export function MobileView() {
  const calc = useCalc();
  const { recommended, freelance, simpleVat, generalVat, advantage } = calc.result;

  const recommendedResult =
    recommended === "freelance"
      ? freelance
      : recommended === "simple_vat"
        ? simpleVat
        : generalVat;

  return (
    <div className="md:hidden flex flex-col min-h-screen">
      {/* ───── Mobile Header ───── */}
      <header className="px-5 pt-5 pb-3 border-b-2 border-(--color-ink) flex items-center justify-between">
        <span className="font-display text-[10px] tracking-[0.3em] text-(--color-ink-soft)">
          제 2 0 2 6 호
        </span>
        <span className="text-[10px] tnum text-(--color-ink-faint)">v0.1 · MVP</span>
      </header>

      {/* ───── Hero (compact) ───── */}
      <section className="px-5 pt-6 pb-5">
        <p className="font-display text-[10px] tracking-[0.3em] text-(--color-stamp) uppercase">
          ㆍ 자영업ㆍ프리랜서 ㆍ
        </p>
        <h1 className="mt-2 font-display font-bold text-5xl leading-[0.95] tracking-tight">
          국세청
          <br />
          <span className="ribbon">회피하기</span>
        </h1>
        <p className="mt-3 text-sm text-(--color-ink-soft) leading-relaxed">
          연 매출 + 업종만 입력 → 프리랜서 / 간이 / 일반 실수령 비교.
        </p>
      </section>

      {/* ───── Sticky Result Hero ───── */}
      <section className="mx-5 border-2 border-(--color-ink) bg-(--color-paper-deep) p-5 sticky top-2 z-10 shadow-[6px_6px_0_0_var(--color-stamp)]">
        <div className="flex items-center justify-between">
          <span className="font-display text-[10px] tracking-[0.25em] uppercase text-(--color-stamp)">
            추 천
          </span>
          <span className="text-[10px] text-(--color-ink-faint)">연 실수령</span>
        </div>
        <h2 className="mt-1 font-display text-lg font-bold">{recommendedResult.label}</h2>
        <div
          key={recommendedResult.netIncome}
          className="num-flip mt-1 font-display font-bold tnum text-4xl tracking-tighter"
        >
          {formatKRW(recommendedResult.netIncome)}
          <span className="text-base ml-1 text-(--color-ink-soft)">원</span>
        </div>
        <div className="mt-1 tnum text-[11px] text-(--color-ink-soft)">
          월 {formatKRWCompact(recommendedResult.netIncome / 12)}
          {advantage > 0 && (
            <>
              {" "}ㆍ 차선책 대비{" "}
              <span className="text-(--color-stamp) font-semibold">
                +{formatKRWCompact(advantage)}
              </span>
            </>
          )}
        </div>
      </section>

      {/* ───── Form ───── */}
      <section className="px-5 mt-8 space-y-8">
        <RevenueInput value={calc.state.annualRevenue} onChange={calc.setRevenue} />
        <IndustrySelector value={calc.state.industry} onChange={calc.setIndustry} />
        <AdvancedOptions
          industry={calc.state.industry}
          customExpenseRate={calc.state.customExpenseRate}
          setExpenseRate={calc.setExpenseRate}
          dependents={calc.state.dependents}
          setDependents={calc.setDependents}
        />
      </section>

      {/* ───── Scenario Cards (stacked) ───── */}
      <section className="px-5 mt-10 space-y-4">
        <div className="font-display text-xs tracking-[0.3em] uppercase text-(--color-ink-soft) flex items-center gap-2">
          <span className="flex-1 h-px bg-(--color-rule-strong)" />
          전체 비교
          <span className="flex-1 h-px bg-(--color-rule-strong)" />
        </div>
        <ScenarioCard result={freelance} isRecommended={recommended === "freelance"} layout="full" />
        <ScenarioCard result={simpleVat} isRecommended={recommended === "simple_vat"} layout="full" />
        <ScenarioCard result={generalVat} isRecommended={recommended === "general_vat"} layout="full" />
      </section>

      {/* ───── Breakeven Chart ───── */}
      <section className="px-5 mt-12">
        <div className="border-t-2 border-(--color-ink) pt-6">
          <h2 className="font-display text-xl font-bold">
            손익분기 <span className="ribbon">곡선</span>
          </h2>
          <p className="text-xs text-(--color-ink-soft) mt-1.5 leading-relaxed">
            매출 0~3억 구간에서 시나리오별 실수령 변화. 빨간 점선이 현재 매출.
          </p>
          <div className="mt-4 -mx-1">
            <BreakevenChart
              industry={calc.state.industry}
              customExpenseRate={calc.state.customExpenseRate}
              dependents={calc.state.dependents}
              currentRevenue={calc.state.annualRevenue}
            />
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="mt-12 px-5 py-6 border-t-2 border-(--color-ink) text-[11px] text-(--color-ink-faint) leading-relaxed">
        본 시뮬레이터는 <strong>참고용 추정 계산</strong>입니다. 실제 신고·납부는 세무 전문가와 상의하세요. 2026 종합소득세율·간이과세 기준 적용.
      </footer>
    </div>
  );
}
