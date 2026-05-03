import type { Metadata } from "next";
import { SiteNav } from "@/components/nav";
import { VatCalculator } from "./vat-calculator";

export const metadata: Metadata = {
  title: "부가가치세 신고액 계산기 — 일반과세 / 간이과세 | 국세청 회피하기",
  description:
    "사업자 부가세 신고액을 일반과세·간이과세 둘 다 즉시 계산. 매출세액·매입세액·신용카드 매출세액공제·부가세 면제 기준까지 자동 반영.",
  keywords: [
    "부가세 계산기",
    "부가가치세 계산",
    "일반과세자 부가세",
    "간이과세자 부가세",
    "부가세 신고",
    "신용카드 매출세액공제",
  ],
};

export default function VatPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav current="vat" />
      <VatCalculator />
    </div>
  );
}
