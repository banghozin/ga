import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("penalty-tax-types")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.publishedAt,
  },
};

export default function Post() {
  return (
    <GuidePage meta={post}>
      <p>
        세금 신고 안 하거나, 늦게 하거나, 적게 신고하면 <strong>가산세</strong>가 붙음. 이게 진짜 무서운 게, 원래 낼 세금에 추가로 붙는 거라 누적되면 큼.
      </p>

      <p>
        가산세 종류랑 계산법 정리해줄게. 한 번 보고 평생 안 걸리게 하기.
      </p>

      <h2>가산세는 크게 3종류</h2>

      <ul>
        <li><strong>무신고가산세</strong> — 신고를 아예 안 했을 때</li>
        <li><strong>과소신고가산세</strong> — 신고는 했는데 적게 신고했을 때</li>
        <li><strong>납부지연가산세</strong> — 신고는 했는데 세금 안 냈을 때</li>
      </ul>

      <p>
        세 개가 동시에 붙기도 함. 신고도 안 하고 납부도 안 하면 무신고 + 납부지연 둘 다 부과.
      </p>

      <h2>1. 무신고가산세 — 20%</h2>

      <p>
        기한 내에 신고 자체를 안 했을 때. 원래 낼 세금의 <strong>20%</strong>가 가산세.
      </p>

      <h3>예시</h3>
      <ul>
        <li>5월에 종소세 100만원 내야 했는데 신고 안 함</li>
        <li>나중에 발각 → 본세 100만원 + 가산세 20만원 = <strong>120만원</strong></li>
        <li>거기에 납부지연까지 붙으면 더 늘어남</li>
      </ul>

      <h3>부정행위면 40%</h3>
      <p>
        고의로 매출 누락·허위 영수증 등 부정한 방법 → 가산세 <strong>40%</strong>로 두 배.
      </p>

      <h2>2. 과소신고가산세 — 10%</h2>

      <p>
        신고는 했는데 세금을 적게 신고했을 때. 누락된 세금의 <strong>10%</strong>.
      </p>

      <h3>예시</h3>
      <ul>
        <li>실제로는 200만원 내야 했는데 100만원만 신고</li>
        <li>차이 100만원에 대해 가산세 10만원</li>
        <li>본세 100만 + 가산세 10만 = <strong>110만원 추가 부담</strong></li>
      </ul>

      <h3>부정행위면 40%</h3>
      <p>
        고의로 매출 누락하면 과소신고도 40%로 가중.
      </p>

      <h2>3. 납부지연가산세 — 일 0.022%</h2>

      <p>
        세금 신고는 했는데 납부 안 했을 때. 미납 세액에 대해 <strong>하루당 0.022%</strong> (연 약 8%) 누적.
      </p>

      <h3>예시</h3>
      <ul>
        <li>5월 31일까지 100만원 내야 했는데 12월 31일에 냄 → 214일 지연</li>
        <li>가산세: 100만 × 0.022% × 214일 = <strong>약 4만 7천원</strong></li>
        <li>1년 미루면 약 8만원, 2년이면 16만원</li>
      </ul>

      <p>
        겉보기엔 적어 보이지만 누적되면 큼. 특히 <strong>여러 해 누적되면 본세보다 가산세가 더 클 수도</strong>.
      </p>

      <h2>4. 그 외 가산세들</h2>

      <h3>장부 관련</h3>
      <ul>
        <li><strong>무기장가산세</strong> — 장부 신고 의무자가 장부 안 쓴 경우. 산출세액의 20%</li>
        <li><strong>추계신고가산세</strong> — 무기장 + 추계신고 시. 사업소득의 0.07%</li>
      </ul>

      <h3>증빙 관련</h3>
      <ul>
        <li><strong>증빙불비가산세</strong> — 적격 증빙(세금계산서·신용카드·현금영수증) 없이 거래. 증빙 미비 금액의 2%</li>
      </ul>

      <h3>현금영수증 관련</h3>
      <ul>
        <li><strong>현금영수증 미발급가산세</strong> — 의무 발행 업종에서 현금 받고 안 끊으면. 미발급액의 20%</li>
      </ul>

      <h2>가산세 피하는 5가지 원칙</h2>

      <h3>1. 기한 내 신고 무조건</h3>
      <p>
        몰라서 못 한 거든, 귀찮아서 못 한 거든 무조건 기한 내 신고. 어설프게 신고해도 안 한 것보단 나음. 어차피 수정신고로 고칠 수 있음.
      </p>

      <h3>2. 못 내겠으면 분납 신청</h3>
      <p>
        세금이 1천만원 넘으면 <strong>2개월 분할 납부</strong> 신청 가능. 신고는 무조건 하고 분할로 내면 가산세 없음.
      </p>

      <h3>3. 신고 후 발견하면 수정신고</h3>
      <p>
        신고했는데 빠뜨린 거 발견 → <strong>수정신고</strong>로 고치기. 빨리 고칠수록 가산세 감면 큼.
      </p>
      <ul>
        <li>법정신고기한 후 1개월 이내 → 가산세 90% 감면</li>
        <li>3개월 이내 → 75% 감면</li>
        <li>6개월 이내 → 50% 감면</li>
        <li>1년 이내 → 30% 감면</li>
        <li>2년 이내 → 10% 감면</li>
      </ul>

      <h3>4. 기한후 신고 — 늦었어도 빨리</h3>
      <p>
        기한 지나서 신고하는 거. 늦었어도 안 한 것보단 훨씬 나음. <strong>1개월 내 신고하면 무신고가산세 50% 감면</strong>.
      </p>

      <h3>5. 모두채움 신고서로 자동화</h3>
      <p>
        프리랜서·일반 직장인은 홈택스 모두채움 신고서로 신고하면 자동 채워짐. 깜빡할 일 거의 없음.
      </p>

      <h2>실수로 신고 안 했을 때</h2>

      <p>
        과거에 신고 안 한 게 발견됐다? 자기 발견했으면 <strong>지금 즉시 자진 신고</strong>가 정답.
      </p>

      <ul>
        <li>국세청이 발견하기 전에 자진하면 가산세 감면 큼</li>
        <li>5년 지난 건 부과제척기간 지나서 부과 못 함 (단 부정행위는 10년)</li>
        <li>망설일 시간에 빨리 홈택스 들어가서 신고하기</li>
      </ul>

      <h2>가산세 시뮬레이션</h2>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 5월 신고 안 하고 11월에 발각</div>
        <ul>
          <li>본세: 100만원</li>
          <li>무신고가산세 (20%): 20만원</li>
          <li>납부지연가산세 (184일 × 0.022%): 약 4만원</li>
          <li><strong>총 부담: 124만원</strong> (24% 추가)</li>
        </ul>
      </div>

      <div className="callout">
        <div className="callout-title">같은 케이스, 6월에 자진 신고했으면</div>
        <ul>
          <li>본세: 100만원</li>
          <li>무신고가산세 (1개월 내 50% 감면): 10만원</li>
          <li>납부지연가산세 (30일): 약 7천원</li>
          <li><strong>총 부담: 110만 7천원</strong></li>
          <li>발각 전 자진 신고로 13만원 절약</li>
        </ul>
      </div>

      <h2>핵심 메시지</h2>

      <p>
        가산세는 무서운 거 같지만, 사실 <strong>기한 내 신고만 하면 거의 다 피할 수 있음</strong>. 신고하기 귀찮다고 미루다가 가산세 20% 맞는 거보다, 30분 들여서 모두채움 신고서로 끝내는 게 100배 이득.
      </p>

      <p>
        본인 종소세 추정해보고 미리 준비하고 싶으면 <a href="/income-tax">종소세 계산기</a>에서 시뮬레이션 가능.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          무신고 20%, 과소신고 10%, 납부지연 일 0.022%. 부정행위는 두 배. 빠뜨려도 1개월 내 자진 신고하면 가산세 절반 감면. 5년 지난 건 부과 안 됨. 신고 자체가 귀찮으면 모두채움 신고서로 5분이면 끝.
        </p>
      </div>
    </GuidePage>
  );
}
