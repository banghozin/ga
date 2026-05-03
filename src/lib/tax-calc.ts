/**
 * 국세청 회피하기 — 세금 계산 로직 (참고용)
 *
 * 본 모듈은 일반인이 의사결정을 비교하기 위한 추정 계산기이며,
 * 실제 신고·납부는 세무 전문가와 상의해야 합니다.
 *
 * 기준연도: 2026
 * 출처:
 *  - 종합소득세율: 소득세법 제55조 (2023년 개정 이후 동일)
 *  - 간이과세 기준: 부가가치세법 (2024년 1억 400만원으로 상향)
 *  - 표준 단순경비율 / 부가가치율은 업종별 일반치 근사값
 */

// ─── 종합소득세 누진세율 (2026 기준) ──────────────────────────
type Bracket = { upTo: number; rate: number; deduction: number };

const INCOME_TAX_BRACKETS: Bracket[] = [
  { upTo: 14_000_000, rate: 0.06, deduction: 0 },
  { upTo: 50_000_000, rate: 0.15, deduction: 1_260_000 },
  { upTo: 88_000_000, rate: 0.24, deduction: 5_760_000 },
  { upTo: 150_000_000, rate: 0.35, deduction: 15_440_000 },
  { upTo: 300_000_000, rate: 0.38, deduction: 19_940_000 },
  { upTo: 500_000_000, rate: 0.40, deduction: 25_940_000 },
  { upTo: 1_000_000_000, rate: 0.42, deduction: 35_940_000 },
  { upTo: Infinity, rate: 0.45, deduction: 65_940_000 },
];

/** 종합소득세 산출 (지방소득세 10% 별도) */
export function computeIncomeTax(taxableIncome: number): {
  incomeTax: number;
  localTax: number;
  total: number;
  marginalRate: number;
} {
  if (taxableIncome <= 0) {
    return { incomeTax: 0, localTax: 0, total: 0, marginalRate: 0 };
  }
  const bracket = INCOME_TAX_BRACKETS.find((b) => taxableIncome <= b.upTo)!;
  const incomeTax = Math.max(0, taxableIncome * bracket.rate - bracket.deduction);
  const localTax = incomeTax * 0.1;
  return {
    incomeTax,
    localTax,
    total: incomeTax + localTax,
    marginalRate: bracket.rate,
  };
}

// ─── 업종 정의 ────────────────────────────────────────────────
export type IndustryKey =
  | "personal_service" // 인적용역 (강사·디자이너·작가·통역 등 — 3.3% 원천징수 대상)
  | "tech_consulting"  // IT·컨설팅 서비스
  | "retail"           // 도소매
  | "food"             // 음식점
  | "manufacture"      // 제조
  | "other_service";   // 기타 서비스

export interface Industry {
  key: IndustryKey;
  label: string;
  /** 단순경비율 근사 (종소세 추계 신고 시) */
  expenseRate: number;
  /** 간이과세 시 부가가치율 (부가세법 시행령) */
  simpleVatAddedRate: number;
  /** 인적용역(3.3% 원천징수) 가능 여부 */
  freelanceEligible: boolean;
  description: string;
}

export const INDUSTRIES: Industry[] = [
  {
    key: "personal_service",
    label: "인적용역 (강사·디자이너·번역 등)",
    expenseRate: 0.642,
    simpleVatAddedRate: 0.30,
    freelanceEligible: true,
    description: "사업자 없이 3.3% 원천징수로 받을 수 있는 직군",
  },
  {
    key: "tech_consulting",
    label: "IT 개발·컨설팅",
    expenseRate: 0.591,
    simpleVatAddedRate: 0.30,
    freelanceEligible: true,
    description: "개발 외주, 컨설팅, 디지털 서비스",
  },
  {
    key: "retail",
    label: "도소매",
    expenseRate: 0.86,
    simpleVatAddedRate: 0.15,
    freelanceEligible: false,
    description: "온라인·오프라인 판매업",
  },
  {
    key: "food",
    label: "음식점",
    expenseRate: 0.892,
    simpleVatAddedRate: 0.15,
    freelanceEligible: false,
    description: "카페·식당·주점",
  },
  {
    key: "manufacture",
    label: "제조업",
    expenseRate: 0.844,
    simpleVatAddedRate: 0.20,
    freelanceEligible: false,
    description: "직접 만들어 파는 사업",
  },
  {
    key: "other_service",
    label: "기타 서비스업",
    expenseRate: 0.715,
    simpleVatAddedRate: 0.30,
    freelanceEligible: false,
    description: "미용·세탁·수리 등",
  },
];

export function getIndustry(key: IndustryKey): Industry {
  return INDUSTRIES.find((i) => i.key === key)!;
}

// ─── 시나리오 계산 ────────────────────────────────────────────
export interface CalcInput {
  /** 연 매출 (부가세 포함 청구액 = 사업자 / 받기로 한 금액 = 프리랜서) */
  annualRevenue: number;
  industry: IndustryKey;
  /**
   * 실제 경비율 (0~1). 0이면 단순경비율 사용.
   * 일반과세에서 매입세액공제 가능한 매입 비율 추정에도 사용.
   */
  customExpenseRate?: number;
  /** 부양가족 수 (소득공제 단순화) */
  dependents?: number;
}

export interface ScenarioResult {
  scenario: "freelance" | "simple_vat" | "general_vat";
  label: string;
  /** 매출에서 사업자 부담분(부가세·경비) 제외 후 사업소득 */
  businessIncome: number;
  /** 종합소득세 + 지방소득세 */
  incomeTaxTotal: number;
  /** 부가가치세 (사업자만) */
  vatPayable: number;
  /** 4대보험 본인부담 추정 */
  socialInsurance: number;
  /** 최종 실수령액 (연 단위) */
  netIncome: number;
  /** 적용 가능 여부 */
  eligible: boolean;
  /** 적용 불가 사유 */
  ineligibleReason?: string;
  /** 한계세율 */
  marginalRate: number;
}

export interface CalcOutput {
  freelance: ScenarioResult;
  simpleVat: ScenarioResult;
  generalVat: ScenarioResult;
  /** 추천 시나리오 키 */
  recommended: "freelance" | "simple_vat" | "general_vat";
  /** 가장 유리한 시나리오 vs 두 번째 유리한 시나리오 차액 */
  advantage: number;
}

const SIMPLE_VAT_THRESHOLD = 104_000_000; // 간이과세 기준 매출 (1억 400만원)
const VAT_FREE_THRESHOLD = 48_000_000;    // 간이과세 부가세 납부의무 면제 (4800만원 미만)
const FREELANCE_VAT_FREE_LIMIT = 75_000_000; // 인적용역 부가세 면세 한도 (개략)

/** 4대보험 추정 (지역가입자, 매우 단순화) */
function estimateSocialInsurance(businessIncome: number): number {
  // 국민연금 9% (본인 4.5% + 사용자분도 본인이 내야 함, 지역가입자는 9% 본인부담 상한 있음)
  // 건강보험 약 7.09% + 장기요양 약 0.91%
  // 고용·산재 (사업자 본인은 임의, 일반적으론 미가입)
  // 매우 거친 추정: 기준소득월액 기준 대략 사업소득의 11~13% 본인부담
  // 단, 국민연금 상한(2026 추정 약 월 690만, 연 8280만) 고려
  if (businessIncome <= 0) return 0;
  const pensionBase = Math.min(businessIncome, 82_800_000);
  const pension = pensionBase * 0.09;
  const health = businessIncome * 0.0709;
  const careCare = businessIncome * 0.0091;
  return pension + health + careCare;
}

/** 1) 프리랜서 (3.3% 원천징수 + 종소세 정산) */
function calcFreelance(input: CalcInput): ScenarioResult {
  const industry = getIndustry(input.industry);
  if (!industry.freelanceEligible) {
    return {
      scenario: "freelance",
      label: "프리랜서 (3.3%)",
      businessIncome: 0,
      incomeTaxTotal: 0,
      vatPayable: 0,
      socialInsurance: 0,
      netIncome: 0,
      eligible: false,
      ineligibleReason: "이 업종은 인적용역에 해당하지 않아 사업자등록이 필요합니다.",
      marginalRate: 0,
    };
  }

  const revenue = input.annualRevenue;
  // 인적용역은 부가세 면세 (학원·강의 등 일부) 또는 일반세율 적용. 여기선 면세 가정.
  // 종소세 신고 시 추계신고 (단순경비율) 또는 장부신고 가능.
  const expenseRate = input.customExpenseRate ?? industry.expenseRate;
  const businessIncome = revenue * (1 - expenseRate);

  // 인적공제 (본인 + 부양가족 1인당 150만원)
  const personalDeduction = 1_500_000 * (1 + (input.dependents ?? 0));
  const taxable = Math.max(0, businessIncome - personalDeduction);

  const tax = computeIncomeTax(taxable);
  // 3.3% 원천징수는 5월 종합소득세 신고 시 기납부세액으로 정산되므로,
  // 최종 부담 세액 = 종소세 + 지방소득세 (원천징수액은 차감/환급 처리)

  const social = estimateSocialInsurance(businessIncome);

  const net = revenue - (revenue * expenseRate) - tax.total - social;
  // 경비는 실제 지출이므로 net에서 빼야 함 (실수령 ≠ 사업소득)
  // 위 식: revenue - 경비지출 - 세금 - 사보 = 순수 사업주 수령액
  // 단, 경비 중 일부는 실제 지출이 아닌 추계인 경우도 있음 → 이건 추정치임을 명시

  return {
    scenario: "freelance",
    label: "프리랜서 (3.3%)",
    businessIncome,
    incomeTaxTotal: tax.total,
    vatPayable: 0,
    socialInsurance: social,
    netIncome: net,
    eligible: true,
    marginalRate: tax.marginalRate,
  };
}

/** 2) 간이과세자 */
function calcSimpleVat(input: CalcInput): ScenarioResult {
  const industry = getIndustry(input.industry);
  const revenue = input.annualRevenue;

  if (revenue >= SIMPLE_VAT_THRESHOLD) {
    return {
      scenario: "simple_vat",
      label: "간이과세자",
      businessIncome: 0,
      incomeTaxTotal: 0,
      vatPayable: 0,
      socialInsurance: 0,
      netIncome: 0,
      eligible: false,
      ineligibleReason: `연 매출 ${(SIMPLE_VAT_THRESHOLD / 100_000_000).toFixed(2)}억원 미만일 때만 가능 (현재 매출이 기준 초과)`,
      marginalRate: 0,
    };
  }

  // 간이과세 부가세: 매출 × 업종별 부가가치율 × 10%
  let vat = revenue * industry.simpleVatAddedRate * 0.10;
  if (revenue < VAT_FREE_THRESHOLD) {
    vat = 0; // 매출 4800만원 미만은 부가세 납부의무 면제
  }

  const expenseRate = input.customExpenseRate ?? industry.expenseRate;
  // 간이과세는 매출에서 부가세 별도 청구 안 함 → 매출 자체가 사업소득의 기반
  const businessIncome = revenue * (1 - expenseRate) - vat;

  const personalDeduction = 1_500_000 * (1 + (input.dependents ?? 0));
  const taxable = Math.max(0, businessIncome - personalDeduction);
  const tax = computeIncomeTax(taxable);
  const social = estimateSocialInsurance(businessIncome);

  const net = revenue - (revenue * expenseRate) - vat - tax.total - social;

  return {
    scenario: "simple_vat",
    label: "간이과세자",
    businessIncome,
    incomeTaxTotal: tax.total,
    vatPayable: vat,
    socialInsurance: social,
    netIncome: net,
    eligible: true,
    marginalRate: tax.marginalRate,
  };
}

/** 3) 일반과세자 */
function calcGeneralVat(input: CalcInput): ScenarioResult {
  const industry = getIndustry(input.industry);
  // 일반과세: 매출 부가세 10%를 별도로 받았다고 가정 (B2B 거래 등)
  // 즉 입력한 annualRevenue는 부가세 제외 공급가액으로 가정
  const supply = input.annualRevenue;
  const outputVat = supply * 0.10;

  const expenseRate = input.customExpenseRate ?? industry.expenseRate;
  const expenses = supply * expenseRate;
  // 매입세액공제: 경비 중 약 70%가 세금계산서 매입이라 가정
  const creditableInputVat = expenses * 0.7 * 0.10;
  const vatPayable = Math.max(0, outputVat - creditableInputVat);

  const businessIncome = supply - expenses;
  const personalDeduction = 1_500_000 * (1 + (input.dependents ?? 0));
  const taxable = Math.max(0, businessIncome - personalDeduction);
  const tax = computeIncomeTax(taxable);
  const social = estimateSocialInsurance(businessIncome);

  // 실수령 = 사업소득 - 종소세 - 사보 (부가세는 매출과 별도이므로 net에 영향 없음)
  // 단, 매출 부가세 중 매입세액 초과분만 실제 부담
  const net = businessIncome - tax.total - social;

  return {
    scenario: "general_vat",
    label: "일반과세자",
    businessIncome,
    incomeTaxTotal: tax.total,
    vatPayable,
    socialInsurance: social,
    netIncome: net,
    eligible: true,
    marginalRate: tax.marginalRate,
  };
}

export function calcAll(input: CalcInput): CalcOutput {
  const freelance = calcFreelance(input);
  const simpleVat = calcSimpleVat(input);
  const generalVat = calcGeneralVat(input);

  const eligible = [freelance, simpleVat, generalVat].filter((s) => s.eligible);
  const sorted = [...eligible].sort((a, b) => b.netIncome - a.netIncome);
  const best = sorted[0] ?? generalVat;
  const second = sorted[1];
  const advantage = second ? best.netIncome - second.netIncome : 0;

  return {
    freelance,
    simpleVat,
    generalVat,
    recommended: best.scenario,
    advantage,
  };
}

// ─── 근로소득공제 (소득세법 §47, 2026 기준) ────────────────────
/** 총급여 → 근로소득금액 (근로소득공제 차감 후) */
export function workIncomeAmount(totalSalary: number): number {
  if (totalSalary <= 0) return 0;
  let ded = 0;
  if (totalSalary <= 5_000_000) ded = totalSalary * 0.7;
  else if (totalSalary <= 15_000_000) ded = 3_500_000 + (totalSalary - 5_000_000) * 0.4;
  else if (totalSalary <= 45_000_000) ded = 7_500_000 + (totalSalary - 15_000_000) * 0.15;
  else if (totalSalary <= 100_000_000) ded = 12_000_000 + (totalSalary - 45_000_000) * 0.05;
  else ded = 14_750_000 + (totalSalary - 100_000_000) * 0.02;
  ded = Math.min(ded, 20_000_000);
  return Math.max(0, totalSalary - ded);
}

/**
 * 종합소득세 통합 계산기 — 근로 + 사업 합산
 * 단순화 모델: 인적공제만 반영. 의료비·교육비·기부금·세액공제 등 별도 항목 미반영.
 */
export interface ComprehensiveInput {
  salaryIncome: number;          // 연 총급여 (세전)
  businessRevenue: number;       // 사업 연 매출
  businessExpenseRate: number;   // 사업 경비율 (0~1)
  dependents: number;            // 부양가족 수
}

export interface ComprehensiveResult {
  totalIncome: number;       // 종합소득금액
  taxableIncome: number;     // 과세표준
  incomeTax: number;
  localTax: number;
  totalTax: number;
  effectiveRate: number;     // 실효세율 (총수입 대비)
  marginalRate: number;
  netAfterTax: number;       // 세후 실수령(사업비용 제외)
  workIncome: number;
  businessIncome: number;
}

export function computeComprehensive(input: ComprehensiveInput): ComprehensiveResult {
  const workIncome = workIncomeAmount(input.salaryIncome);
  const businessIncome = Math.max(0, input.businessRevenue * (1 - input.businessExpenseRate));
  const totalIncome = workIncome + businessIncome;

  const personalDeduction = 1_500_000 * (1 + input.dependents);
  const taxableIncome = Math.max(0, totalIncome - personalDeduction);
  const tax = computeIncomeTax(taxableIncome);

  const grossIncome = input.salaryIncome + businessIncome;
  const netAfterTax = grossIncome - tax.total;

  return {
    totalIncome,
    taxableIncome,
    incomeTax: tax.incomeTax,
    localTax: tax.localTax,
    totalTax: tax.total,
    effectiveRate: grossIncome > 0 ? tax.total / grossIncome : 0,
    marginalRate: tax.marginalRate,
    netAfterTax,
    workIncome,
    businessIncome,
  };
}

// ─── 부가세 신고액 계산 ───────────────────────────────────────
export type VatType = "general" | "simple";

export interface VatInput {
  type: VatType;
  industry?: IndustryKey;
  /** 매출 공급가액 (일반과세) 또는 매출액 (간이과세) */
  sales: number;
  /** 매입 공급가액 (세금계산서 수취분) */
  purchases: number;
  /** 신용카드 매출 비중 (0~1) */
  cardSalesRatio?: number;
}

export interface VatResult {
  outputVat: number;     // 매출세액
  inputVat: number;      // 매입세액 (공제)
  cardCredit: number;    // 신용카드 매출세액공제
  payable: number;       // 납부세액
  effectiveRate: number; // 매출 대비 실 부담률
  vatExempt: boolean;    // 부가세 면제 여부
  note?: string;
}

export function computeVat(input: VatInput): VatResult {
  if (input.type === "general") {
    const outputVat = input.sales * 0.10;
    const inputVat = input.purchases * 0.10;
    const cardCredit = (input.cardSalesRatio ?? 0) * input.sales * 0.013;
    const payable = Math.max(0, outputVat - inputVat - cardCredit);
    return {
      outputVat,
      inputVat,
      cardCredit,
      payable,
      effectiveRate: input.sales > 0 ? payable / input.sales : 0,
      vatExempt: false,
    };
  }

  const industry = input.industry ? getIndustry(input.industry) : INDUSTRIES[0];
  const addedRate = industry.simpleVatAddedRate;
  const outputVat = input.sales * addedRate * 0.10;
  const inputVat = input.purchases * 0.10 * addedRate;
  const cardCredit = (input.cardSalesRatio ?? 0) * input.sales * 0.013;
  let payable = Math.max(0, outputVat - inputVat - cardCredit);

  const vatExempt = input.sales < VAT_FREE_THRESHOLD;
  let note: string | undefined;
  if (vatExempt) {
    payable = 0;
    note = "연 매출 4800만원 미만 → 간이과세자 부가세 납부의무 면제";
  }
  return {
    outputVat,
    inputVat,
    cardCredit,
    payable,
    effectiveRate: input.sales > 0 ? payable / input.sales : 0,
    vatExempt,
    note,
  };
}
