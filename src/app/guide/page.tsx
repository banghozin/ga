import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/nav";
import { AdSlot } from "@/components/ad-slot";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "세무 가이드 — 자영업자·프리랜서를 위한 절세 글모음",
  description:
    "프리랜서 3.3% 환급, 간이↔일반 전환, 종소세 신고 방법 등 자영업자·프리랜서가 꼭 알아야 할 세무 가이드 글을 쉽게 풀어 정리했습니다.",
  keywords: ["프리랜서 세금 가이드", "자영업자 절세", "종소세 신고 방법", "부가세 신고 가이드"],
};

export default function GuideIndexPage() {
  // 발행일 내림차순
  const sorted = [...POSTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav current="guide" />
      <main className="flex-1 px-5 md:px-10 py-8 md:py-14 max-w-4xl w-full mx-auto">
        {/* Hero */}
        <section className="mb-10 md:mb-14 pb-6 border-b-2 border-(--color-ink)">
          <p className="font-display text-xs tracking-[0.3em] text-(--color-stamp) uppercase">
            ㆍ 세 무 ㆍ 가 이 드 ㆍ
          </p>
          <h1 className="mt-3 font-display font-bold text-4xl md:text-6xl tracking-tight leading-[0.95]">
            세금, <span className="ribbon">쉽게 정리</span>
          </h1>
          <p className="mt-4 max-w-xl text-(--color-ink-soft) leading-relaxed">
            세무사 사이트 글은 어렵고, 블로그 글은 광고밖에 없을 때. 사장님이나 프리랜서가 꼭 알아야 할 세금 이야기를 사람 말로 풀어서 정리했습니다.
          </p>
        </section>

        <div className="mb-10">
          <AdSlot variant="banner" />
        </div>

        {/* Posts list */}
        <section className="space-y-6">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="border-2 border-(--color-rule-strong) hover:border-(--color-stamp) bg-(--color-paper-deep)/30 transition group"
            >
              <Link href={`/guide/${post.slug}`} className="block p-5 md:p-6">
                <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-(--color-stamp) mb-2">
                  <span>{post.category}</span>
                  <span className="text-(--color-ink-faint)">
                    {post.readMinutes}분 읽기 ㆍ {post.publishedAt}
                  </span>
                </div>
                <h2 className="font-display font-bold text-xl md:text-2xl tracking-tight leading-tight group-hover:text-(--color-stamp) transition">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-(--color-ink-soft) leading-relaxed">
                  {post.subtitle}
                </p>
              </Link>
            </article>
          ))}
        </section>

        {sorted.length < 5 && (
          <div className="mt-10 p-5 border border-dashed border-(--color-rule-strong) text-center text-xs text-(--color-ink-faint) tracking-wider">
            매주 1~2개씩 새 글이 추가될 예정 ㆍ 아래 계산기들은 지금 바로 사용 가능
          </div>
        )}

        <div className="mt-12">
          <AdSlot variant="banner" />
        </div>
      </main>
    </div>
  );
}
