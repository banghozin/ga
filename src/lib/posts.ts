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
];

export function getPost(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}
