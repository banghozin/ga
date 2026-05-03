import { SiteNav } from "@/components/nav";

interface Props {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, subtitle, lastUpdated, children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav current="home" />
      <main className="flex-1 px-5 md:px-10 py-8 md:py-14 max-w-3xl w-full mx-auto">
        <header className="mb-8 md:mb-12 pb-6 border-b-2 border-(--color-ink)">
          <p className="font-display text-xs tracking-[0.3em] text-(--color-stamp) uppercase">
            제 0 0 0 호 ㆍ 정 책
          </p>
          <h1 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-(--color-ink-soft) leading-relaxed">{subtitle}</p>
          )}
          <p className="mt-4 text-[11px] text-(--color-ink-faint) tracking-wider">
            최종 갱신일 ㆍ {lastUpdated}
          </p>
        </header>

        <article className="legal-prose space-y-6 text-(--color-ink-soft) leading-relaxed">
          {children}
        </article>
      </main>
    </div>
  );
}
