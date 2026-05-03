/** 가이드 글 메타 정보 인덱스. 새 글 추가 시 여기에 항목 추가. */
export interface PostMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;       // 메타 설명 (SEO)
  readMinutes: number;
  publishedAt: string;       // YYYY-MM-DD
  updatedAt?: string;
  category: "프리랜서" | "사업자" | "절세" | "신고";
  keywords: string[];
}

export const POSTS: PostMeta[] = [
  {
    slug: "freelancer-3-3-refund",
    title: "프리랜서 3.3%, 5월에 환급 받는 법",
    subtitle: "통장에 96만 7천원 들어와서 당황한 프리랜서를 위한 가이드",
    description:
      "프리랜서로 3.3% 떼고 받았다면 5월에 종합소득세 신고로 대부분 환급 가능. 환급 원리부터 홈택스 4단계 신고 방법까지 정리.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "프리랜서",
    keywords: ["프리랜서 3.3", "원천징수 환급", "5월 종소세 신고", "프리랜서 세금 환급", "홈택스 모두채움"],
  },
  {
    slug: "side-job-tax-threshold",
    title: "직장인 부업, 얼마부터 종소세 신고해야 함?",
    subtitle: "부업 시작했는데 신고해야 하나 무시해도 되나 헷갈리는 사람을 위해",
    description:
      "직장인이 부업·N잡으로 번 돈, 어디까지가 신고 면제이고 어디부터 종합소득세 신고 의무인지 정리. 회사에 알려질 가능성, 분리과세 vs 종합과세 차이까지.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "프리랜서",
    keywords: ["직장인 부업 신고", "N잡러 세금", "부업 종소세", "기타소득 분리과세", "300만원 기준"],
  },
  {
    slug: "simple-vs-general-vat",
    title: "간이과세 vs 일반과세, 진짜 어느 쪽이 이득?",
    subtitle: "사장님 시작하기 전에 한 번은 봐야 할 비교 가이드",
    description:
      "간이과세자와 일반과세자의 부가세 부담, 매입세액공제 가능 여부, 환급 가능성을 매출 규모별로 비교. 1억 400만원 기준의 의미와 전환 시점.",
    readMinutes: 6,
    publishedAt: "2026-05-03",
    category: "사업자",
    keywords: ["간이과세 일반과세 비교", "간이과세 기준", "1억 400만원", "부가세 환급", "사업자 등록 종류"],
  },
  {
    slug: "income-tax-brackets-2026",
    title: "2026 종합소득세율, 누진세 진짜 쉽게 정리",
    subtitle: "1억 벌면 세금 38% 떼간다? 그게 아닙니다",
    description:
      "2026년 종합소득세 8단계 누진세율표를 표와 예시로 풀어서 설명. 한계세율 vs 실효세율 차이, 매출 1억 시 실제 세부담 계산 예시.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "신고",
    keywords: ["2026 종합소득세율", "종소세율표", "누진세 계산", "한계세율 실효세율", "소득세법 55조"],
  },
  {
    slug: "when-to-register-business",
    title: "사업자등록, 매출 얼마부터 해야 함?",
    subtitle: "프리랜서로 살다가 사업자 내야 할 타이밍 잡기",
    description:
      "프리랜서 매출이 늘어날 때 사업자등록을 해야 하는 시점. 인적용역과 사업소득의 경계, 등록 시 부가세·세금계산서 의무, 세무 측면 손익분기점.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "사업자",
    keywords: ["사업자등록 시점", "프리랜서 사업자등록", "매출 7500만원", "인적용역 사업소득"],
  },
  {
    slug: "vat-filing-4-steps",
    title: "부가세 신고, 첫 신고자를 위한 4단계 가이드",
    subtitle: "매년 1월·7월에 멘붕하지 않으려면",
    description:
      "사업자가 처음 부가세 신고할 때 막히는 부분을 4단계로 정리. 매출세액 집계, 매입세액 공제, 신용카드 매출세액공제, 홈택스 신고 방법까지.",
    readMinutes: 7,
    publishedAt: "2026-05-03",
    category: "신고",
    keywords: ["부가세 신고", "부가세 신고 방법", "매입세액공제", "신용카드 매출세액공제", "홈택스 부가세"],
  },
  {
    slug: "simple-expense-vs-bookkeeping",
    title: "단순경비율 vs 장부신고, 뭐가 어떻게 다름?",
    subtitle: "영수증 모으기 귀찮은 사람과 더 깎고 싶은 사람을 위해",
    description:
      "종합소득세 신고 시 추계신고(단순경비율)와 장부신고의 차이를 케이스별로 비교. 어느 게 유리한지 판단 기준과 실제 계산 예시.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "신고",
    keywords: ["단순경비율", "장부신고", "추계신고", "기준경비율", "프리랜서 경비"],
  },
  {
    slug: "dependent-deduction",
    title: "부양가족 등록으로 1인당 150만원 깎는 법",
    subtitle: "부모님·자녀·배우자 챙기면 세금이 진짜로 줄어듦",
    description:
      "종합소득세 인적공제 — 본인 + 배우자 + 부양가족 1명당 150만원 추가 공제. 부양가족 자격 요건, 소득 기준, 헷갈리는 케이스별 정리.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "절세",
    keywords: ["인적공제", "부양가족 등록", "150만원 공제", "60세 이상 부모", "자녀 공제"],
  },
  {
    slug: "pension-irp-tax-credit",
    title: "연금저축 + IRP, 세액공제 700만원 마법",
    subtitle: "월 60만원 넣고 16% 환급 받는 절세 끝판왕",
    description:
      "연금저축과 IRP의 세액공제 한도와 활용법. 연 700~900만원까지 16.5% 세액공제, 단점인 55세까지 인출 제한, 실제 환급액 계산.",
    readMinutes: 6,
    publishedAt: "2026-05-03",
    category: "절세",
    keywords: ["연금저축 세액공제", "IRP 세액공제", "700만원 한도", "16.5% 세액공제", "노후 절세"],
  },
  {
    slug: "credit-card-deduction",
    title: "신용카드 소득공제, 25% 룰 알면 절세",
    subtitle: "카드 긁는 순서 바꾸면 환급액이 달라짐",
    description:
      "신용카드 소득공제 작동 원리 — 총급여 25% 초과분만 공제. 신용카드·체크카드·현금영수증·전통시장 공제율 차이, 한도와 효율적 사용법.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "절세",
    keywords: ["신용카드 소득공제", "25% 초과", "체크카드 공제", "전통시장 공제", "현금영수증"],
  },
  {
    slug: "medical-expense-deduction",
    title: "의료비 세액공제, 진짜 챙겨야 함",
    subtitle: "한 해 100만원만 써도 12만원 돌려받음",
    description:
      "의료비 세액공제 작동 원리와 챙겨야 할 항목. 총급여 3% 초과분의 15% 공제, 본인·부양가족 의료비, 안경·임플란트·산후조리원 포함 여부.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "절세",
    keywords: ["의료비 세액공제", "의료비 환급", "총급여 3%", "안경 공제", "임플란트 공제"],
  },
  {
    slug: "freelancer-social-insurance",
    title: "프리랜서 4대보험, 어떻게 들어가는 거임?",
    subtitle: "회사 안 다니는데 보험은 어떻게 되는지 헷갈리는 사람을 위해",
    description:
      "프리랜서·자영업자의 4대보험 — 국민연금·건강보험은 지역가입자로 가입, 고용보험은 임의가입(예술인 특례 포함), 산재는 임의. 보험료 계산 방식 정리.",
    readMinutes: 6,
    publishedAt: "2026-05-03",
    category: "프리랜서",
    keywords: ["프리랜서 4대보험", "지역가입자 건강보험", "프리랜서 국민연금", "예술인 고용보험"],
  },
  {
    slug: "income-tax-5-checklist",
    title: "5월 종소세 신고, 빠뜨리면 안 되는 5가지",
    subtitle: "매년 5월 31일 11시 59분에 후회 안 하려면",
    description:
      "5월 종합소득세 신고 시 절대 빠뜨리지 말아야 할 5가지 공제·세액공제 항목 — 인적공제, 의료비, 신용카드, 연금저축, 기납부세액.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "신고",
    keywords: ["5월 종소세 신고", "종소세 체크리스트", "종합소득세 공제 항목", "기납부세액"],
  },
  {
    slug: "penalty-tax-types",
    title: "가산세 종류 + 피하는 법",
    subtitle: "신고 안 하면 진짜 무서운 거 — 종류별 정리",
    description:
      "무신고가산세 20%, 과소신고가산세, 납부불성실가산세 일 0.022% 등 가산세 종류와 계산 방식. 기한 내 신고와 납부로 가산세 피하는 실전 팁.",
    readMinutes: 5,
    publishedAt: "2026-05-03",
    category: "신고",
    keywords: ["가산세 종류", "무신고가산세", "납부불성실가산세", "과소신고가산세", "기한후 신고"],
  },
  {
    slug: "hometax-first-time-guide",
    title: "홈택스 처음 쓰는 사람을 위한 길잡이",
    subtitle: "공동인증서 멘붕에서 시작해서 신고 완료까지",
    description:
      "홈택스 처음 사용자가 자주 막히는 단계 — 회원가입·간편인증 설정, 종소세·부가세 신고 메뉴 찾는 법, 자주 만나는 에러와 해결책.",
    readMinutes: 6,
    publishedAt: "2026-05-03",
    category: "신고",
    keywords: ["홈택스 사용법", "홈택스 회원가입", "간편인증", "종소세 신고 방법", "홈택스 에러"],
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
