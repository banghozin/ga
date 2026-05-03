import Link from "next/link";

interface Props {
  current: "home" | "income-tax" | "vat";
}

const ITEMS = [
  { key: "home", href: "/", label: "프리랜서 vs 사업자" },
  { key: "income-tax", href: "/income-tax", label: "종합소득세" },
  { key: "vat", href: "/vat", label: "부가세" },
] as const;

export function SiteNav({ current }: Props) {
  return (
    <nav className="border-b-2 border-(--color-ink) bg-(--color-paper)">
      <div className="px-5 md:px-10 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <Link
          href="/"
          className="font-display font-bold text-lg md:text-xl tracking-tight hover:text-(--color-stamp) transition"
        >
          국세청 <span className="text-(--color-stamp)">회피하기</span>
        </Link>
        <ul className="flex gap-1 md:gap-2 text-xs md:text-sm">
          {ITEMS.map((it) => {
            const active = it.key === current;
            return (
              <li key={it.key}>
                <Link
                  href={it.href}
                  className={`inline-block px-3 py-1.5 border tracking-wide transition ${
                    active
                      ? "bg-(--color-ink) text-(--color-paper) border-(--color-ink)"
                      : "border-transparent text-(--color-ink-soft) hover:border-(--color-rule-strong)"
                  }`}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
