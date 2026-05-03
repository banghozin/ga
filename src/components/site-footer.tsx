import Link from "next/link";

const POLICY_LINKS = [
  { href: "/about", label: "소개" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
  { href: "/disclaimer", label: "면책조항" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-(--color-ink) bg-(--color-paper)">
      <div className="px-5 md:px-10 py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-6">
          <div className="font-display font-bold text-base tracking-tight">
            국세청 <span className="text-(--color-stamp)">회피하기</span>
          </div>
          <p className="mt-1.5 text-[11px] text-(--color-ink-faint) leading-relaxed max-w-md">
            한국 자영업자·프리랜서를 위한 합법적 절세 시뮬레이터. 본 사이트의 모든 결과는 참고용 추정값이며, 정확한 신고는 세무 전문가와 상의하세요.
          </p>
        </div>
        <nav className="md:col-span-6 md:text-right">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end text-xs">
            {POLICY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-(--color-ink-soft) hover:text-(--color-stamp) underline-offset-4 hover:underline transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[10px] tnum text-(--color-ink-faint) tracking-wider">
            © 2026 국세청 회피하기 ㆍ All rights reserved
          </p>
        </nav>
      </div>
    </footer>
  );
}
