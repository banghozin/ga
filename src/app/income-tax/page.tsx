import type { Metadata } from "next";
import { SiteNav } from "@/components/nav";
import { IncomeTaxCalculator } from "./income-tax-calculator";

export const metadata: Metadata = {
  title: "종합소득세 계산기 — 근로 + 사업소득 합산 | 국세청 회피하기",
  description:
    "직장인 부업·N잡러를 위한 종합소득세 통합 계산기. 연봉(근로소득)과 사업소득을 합산해 한계세율·실효세율·세후 실수령을 즉시 계산합니다.",
  keywords: [
    "종합소득세 계산기",
    "종소세 계산",
    "직장인 부업 세금",
    "N잡러 종소세",
    "근로소득 사업소득 합산",
  ],
};

export default function IncomeTaxPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav current="income-tax" />
      <IncomeTaxCalculator />
    </div>
  );
}
