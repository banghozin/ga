import { cn } from "@/lib/utils";

interface Props {
  /** "banner" = 와이드 가로형, "rect" = 사각형(인라인 콘텐츠 사이) */
  variant?: "banner" | "rect";
  /** AdSense 슬롯 ID — 환경변수에서 주입. 없으면 placeholder만 노출 */
  slotId?: string;
  className?: string;
}

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

/**
 * 광고 영역 슬롯.
 *
 * 현재 동작:
 *   - AdSense 승인 전: "광고 영역 ㆍ 준비 중" placeholder가 노출됨 (레이아웃 자리는 확보)
 *   - 승인 후 NEXT_PUBLIC_ADSENSE_CLIENT 환경변수 설정 + slotId prop 추가하면 실제 광고 자동 노출
 *
 * AdSense 정책상 "광고" 라벨은 명시적으로 표기 (transparency 요구).
 */
export function AdSlot({ variant = "banner", slotId, className }: Props) {
  const isLive = !!ADSENSE_CLIENT && !!slotId;

  return (
    <aside
      className={cn(
        "ad-slot border border-dashed border-(--color-rule-strong) bg-(--color-paper-deep)/40",
        className
      )}
      role="complementary"
      aria-label="광고 영역"
    >
      <div className="px-3 py-1.5 border-b border-dashed border-(--color-rule) text-[10px] tracking-[0.4em] uppercase text-(--color-ink-faint) text-center font-display">
        ━━ 광 고 ㆍ Advertisement ━━
      </div>
      <div
        className={cn(
          "px-3 flex items-center justify-center",
          variant === "banner"
            ? "min-h-[90px] md:min-h-[110px] py-6"
            : "min-h-[240px] py-8"
        )}
      >
        {isLive ? (
          <ins
            className="adsbygoogle block w-full"
            style={{ display: "block" }}
            data-ad-client={ADSENSE_CLIENT}
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <span className="text-[11px] text-(--color-ink-faint) tracking-wider text-center leading-relaxed">
            광 고 영 역
            <br />
            <span className="text-[10px] opacity-70">AdSense 승인 후 자동 노출</span>
          </span>
        )}
      </div>
    </aside>
  );
}
