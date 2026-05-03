"use client";

import { useCalc } from "@/components/calculator/use-calc";
import { RevenueInput } from "@/components/calculator/revenue-input";
import { IndustrySelector } from "@/components/calculator/industry-selector";
import { AdvancedOptions } from "@/components/calculator/advanced-options";
import { ScenarioCard } from "@/components/calculator/scenario-card";
import { BreakevenChart } from "@/components/calculator/breakeven-chart";
import { AdSlot } from "@/components/ad-slot";
import { formatKRW, formatKRWCompact } from "@/lib/utils";

export function DesktopView() {
  const calc = useCalc();
  const { recommended, freelance, simpleVat, generalVat, advantage } = calc.result;

  const recommendedResult =
    recommended === "freelance"
      ? freelance
      : recommended === "simple_vat"
        ? simpleVat
        : generalVat;

  return (
    <div className="hidden md:flex min-h-screen flex-col">
      {/* ───── Header / Masthead ───── */}
      <header className="border-b-2 border-(--color-ink) px-10 py-5 flex items-end justify-between">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-xs tracking-[0.4em] text-(--color-ink-soft)">
            제 2 0 2 6 호 ㆍ 발 행 일 매 일
          </span>
        </div>
        <div className="flex items-baseline gap-6">
          <span className="font-display text-xs tracking-[0.3em] text-(--color-ink-soft)">
            세 무 서 비 상 시 모 의 신 고
          </span>
          <span className="text-[10px] tnum text-(--color-ink-faint)">
            ver 0.1 · MVP
          </span>
        </div>
      </header>

      {/* ───── Hero ───── */}
      <section className="px-10 pt-12 pb-8 grid grid-cols-12 gap-8 border-b border-(--color-rule-strong)">
        <div className="col-span-7">
          <p className="font-display text-sm tracking-[0.3em] text-(--color-stamp) uppercase">
            ㆍ 자영업자 ㆍ 프리랜서 ㆍ 사업자 등록 검토 ㆍ
          </p>
          <h1 className="mt-4 font-display font-bold text-7xl leading-[0.95] tracking-tight">
            국세청
            <br />
            <span className="ribbon">회피하기</span>
          </h1>
          <p className="mt-6 max-w-xl text-(--color-ink-soft) leading-relaxed">
            연 매출 한 줄과 업종만 고르면, <strong className="text-(--color-ink)">프리랜서 3.3% · 간이과세 · 일반과세</strong>
            세 가지 선택지의 실수령을 한눈에 비교합니다. 손익분기점과 한계세율도 함께.
          </p>
        </div>

        {/* 도장 */}
        <div className="col-span-5 relative">
          <div className="absolute right-4 top-2 vert-kr font-display text-[11px] tracking-[0.5em] text-(--color-ink-faint)">
            세금ㆍ시뮬레이터
          </div>
          <div className="ml-auto w-44 h-44 rounded-full stamp text-3xl font-bold flex flex-col items-center justify-center leading-tight">
            <span>회피</span>
            <span>실패</span>
            <span className="text-xs mt-1">참고용</span>
          </div>
        </div>
      </section>

      {/* ───── Ad: between hero and calculator ───── */}
      <div className="px-10 pt-8">
        <AdSlot variant="banner" />
      </div>

      {/* ───── Calculator Body ───── */}
      <section className="flex-1 grid grid-cols-12 gap-10 px-10 py-12">
        {/* Left: Inputs */}
        <div className="col-span-5 space-y-10">
          <RevenueInput value={calc.state.annualRevenue} onChange={calc.setRevenue} />
          <IndustrySelector value={calc.state.industry} onChange={calc.setIndustry} />
          <AdvancedOptions
            industry={calc.state.industry}
            customExpenseRate={calc.state.customExpenseRate}
            setExpenseRate={calc.setExpenseRate}
            dependents={calc.state.dependents}
            setDependents={calc.setDependents}
          />
        </div>

        {/* Right: Big Result */}
        <div className="col-span-7 flex flex-col">
          <div className="border-2 border-(--color-ink) bg-(--color-paper-deep) p-8">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-xs tracking-[0.3em] uppercase text-(--color-stamp)">
                ━━ 추천 시나리오 ━━
              </span>
              <span className="text-[10px] tracking-wider text-(--color-ink-faint)">
                연 단위 실수령 추정
              </span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold">{recommendedResult.label}</h2>
            <div
              key={recommendedResult.netIncome}
              className="num-flip mt-2 font-display font-bold tnum text-7xl xl:text-8xl tracking-tighter"
            >
              {formatKRW(recommendedResult.netIncome)}
              <span className="text-3xl ml-2 text-(--color-ink-soft) align-baseline">원</span>
            </div>
            <div className="mt-2 tnum text-sm text-(--color-ink-soft)">
              월 환산 약 {formatKRWCompact(recommendedResult.netIncome / 12)}
              {advantage > 0 && (
                <>
                  {" "}ㆍ 차선책 대비{" "}
                  <span className="text-(--color-stamp) font-semibold">
                    +{formatKRWCompact(advantage)}
                  </span>{" "}
                  유리
                </>
              )}
            </div>
          </div>

          {/* 3 Scenario Cards */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <ScenarioCard
              result={freelance}
              isRecommended={recommended === "freelance"}
            />
            <ScenarioCard
              result={simpleVat}
              isRecommended={recommended === "simple_vat"}
            />
            <ScenarioCard
              result={generalVat}
              isRecommended={recommended === "general_vat"}
            />
          </div>
        </div>
      </section>

      {/* ───── Ad: between cards and chart ───── */}
      <div className="px-10 pb-4">
        <AdSlot variant="banner" />
      </div>

      {/* ───── Breakeven Chart ───── */}
      <section className="px-10 pb-12">
        <div className="border-t-2 border-(--color-ink) pt-8">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="font-display text-2xl font-bold">
              손익분기점 <span className="ribbon">곡선</span>
            </h2>
            <span className="text-[11px] tracking-wider text-(--color-ink-faint)">
              매출 0원 ~ 3억원 구간 ㆍ Y축: 연 실수령 추정
            </span>
          </div>
          <p className="text-sm text-(--color-ink-soft) mb-5 max-w-2xl leading-relaxed">
            매출 규모에 따라 어느 신고 방식이 가장 유리한지 한 눈에 보여줍니다.
            세로 빨간 선이 현재 입력한 매출 위치, 아래 표시는 시나리오 1·2위가 뒤바뀌는 손익분기 지점입니다.
          </p>
          <BreakevenChart
            industry={calc.state.industry}
            customExpenseRate={calc.state.customExpenseRate}
            dependents={calc.state.dependents}
            currentRevenue={calc.state.annualRevenue}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-(--color-ink) px-10 py-6 grid grid-cols-12 gap-6 text-xs">
      <div className="col-span-6 text-(--color-ink-faint) leading-relaxed">
        본 시뮬레이터는 의사결정 비교를 돕기 위한 <strong>참고용 추정 계산</strong>이며, 정확한 신고·납부는 세무 전문가와 상의하셔야 합니다.
        2026년 기준 종합소득세율·간이과세 기준·표준 단순경비율을 바탕으로 한 근사값입니다.
      </div>
      <div className="col-span-3 text-(--color-ink-soft)">
        <div className="font-display tracking-widest">DATA</div>
        <ul className="mt-1 space-y-0.5">
          <li>· 종소세율: 소득세법 §55</li>
          <li>· 간이과세 기준: 1억 400만</li>
          <li>· 4대보험: 지역가입자 추정</li>
        </ul>
      </div>
      <div className="col-span-3 text-(--color-ink-soft)">
        <div className="font-display tracking-widest">ROADMAP</div>
        <ul className="mt-1 space-y-0.5">
          <li>· 부가세 신고액 계산기</li>
          <li>· 4대보험 정밀 시뮬</li>
          <li>· 종소세 절세 시나리오</li>
        </ul>
      </div>
    </footer>
  );
}
