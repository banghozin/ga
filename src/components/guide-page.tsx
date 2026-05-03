import Link from "next/link";
import { SiteNav } from "@/components/nav";
import { AdSlot } from "@/components/ad-slot";
import type { PostMeta } from "@/lib/posts";

interface Props {
  meta: PostMeta;
  children: React.ReactNode;
}

export function GuidePage({ meta, children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav current="guide" />
      <main className="flex-1 px-5 md:px-10 py-8 md:py-14 max-w-3xl w-full mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-5 text-[11px] tracking-wider text-(--color-ink-faint)">
          <Link href="/guide" className="hover:text-(--color-stamp) underline-offset-4 hover:underline">
            가이드
          </Link>
          <span className="mx-2">›</span>
          <span>{meta.category}</span>
        </nav>

        {/* Header */}
        <header className="mb-8 md:mb-10 pb-6 border-b-2 border-(--color-ink)">
          <p className="font-display text-xs tracking-[0.3em] text-(--color-stamp) uppercase">
            {meta.category} ㆍ 가이드
          </p>
          <h1 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight leading-tight">
            {meta.title}
          </h1>
          <p className="mt-3 text-base text-(--color-ink-soft) leading-relaxed">
            {meta.subtitle}
          </p>
          <div className="mt-5 flex items-center gap-4 text-[11px] text-(--color-ink-faint) tracking-wider">
            <span>{meta.publishedAt} 발행</span>
            <span>ㆍ</span>
            <span>읽는 시간 {meta.readMinutes}분</span>
            {meta.updatedAt && (
              <>
                <span>ㆍ</span>
                <span>{meta.updatedAt} 갱신</span>
              </>
            )}
          </div>
        </header>

        {/* Top ad */}
        <div className="mb-8">
          <AdSlot variant="banner" />
        </div>

        {/* Body */}
        <article className="guide-prose space-y-5 text-(--color-ink) leading-relaxed">
          {children}
        </article>

        {/* Bottom ad */}
        <div className="mt-12">
          <AdSlot variant="banner" />
        </div>

        {/* Related calculators */}
        <aside className="mt-10 border-2 border-(--color-rule-strong) bg-(--color-paper-deep)/40 p-5 md:p-6">
          <h3 className="font-display text-sm tracking-[0.25em] uppercase text-(--color-ink-soft)">
            ━━ 관련 계산기 ━━
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link href="/" className="block border border-(--color-rule) hover:border-(--color-stamp) p-3 transition">
              <div className="text-[10px] tracking-wider text-(--color-ink-faint)">메인</div>
              <div className="font-medium mt-0.5">프리랜서 vs 사업자</div>
            </Link>
            <Link href="/income-tax" className="block border border-(--color-rule) hover:border-(--color-stamp) p-3 transition">
              <div className="text-[10px] tracking-wider text-(--color-ink-faint)">계산기</div>
              <div className="font-medium mt-0.5">종합소득세</div>
            </Link>
            <Link href="/vat" className="block border border-(--color-rule) hover:border-(--color-stamp) p-3 transition">
              <div className="text-[10px] tracking-wider text-(--color-ink-faint)">계산기</div>
              <div className="font-medium mt-0.5">부가세 신고액</div>
            </Link>
          </div>
        </aside>

        <footer className="mt-10 pt-5 border-t border-dashed border-(--color-rule-strong) text-[11px] text-(--color-ink-faint) leading-relaxed">
          본 글은 일반 정보 제공 목적이며, 개인의 구체적 상황에 따라 적용이 다를 수 있습니다. 정확한 신고는 세무 전문가와 상의하세요.
        </footer>
      </main>
    </div>
  );
}
