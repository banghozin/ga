import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("vat-filing-4-steps")!;

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
        사업자등록 하고 첫 1월. "어 부가세 신고하라네?" 홈택스 들어가니까 메뉴가 50개. 어디 눌러야 할지 모르겠음.
      </p>

      <p>
        걱정마. 부가세 신고는 사실 단순함. <strong>4단계만 따라가면 끝</strong>. 내가 한 번에 정리해줄게.
      </p>

      <h2>일단 부가세가 뭔지부터</h2>

      <p>
        모든 거래에 10% 붙는 세금. 우리가 편의점에서 1100원짜리 음료수 사면 그 중 100원이 부가세. 사업자는 이 100원을 모아뒀다가 국세청에 내는 역할.
      </p>

      <p>
        근데 사업자도 매입할 때 부가세 냈잖아? 그건 빼줌. 그게 <strong>매입세액공제</strong>.
      </p>

      <div className="callout">
        <div className="callout-title">기본 공식</div>
        <p className="!mb-0">
          <strong>납부세액 = 매출세액 − 매입세액 − 신용카드 매출세액공제</strong>
        </p>
      </div>

      <h2>1단계 ㆍ 매출세액 집계</h2>

      <p>
        지난 6개월 동안 받은 돈 다 더해서 거기서 부가세 부분만 추리는 거. 매출 단위로 입력함.
      </p>

      <h3>매출 종류별로 분리해야 함</h3>
      <ul>
        <li><strong>세금계산서 매출</strong> — B2B로 발행한 거</li>
        <li><strong>신용카드 매출</strong> — 카드결제 받은 거</li>
        <li><strong>현금영수증 매출</strong> — 손님이 현금영수증 발급한 거</li>
        <li><strong>기타 매출</strong> — 위 셋에 안 들어가는 거 (현금 받고 영수증 안 끊은 거)</li>
      </ul>

      <p>
        홈택스에 다 자동으로 떠있음. 신용카드는 카드사가, 현금영수증은 국세청이 정보 주거든. <strong>본인이 직접 입력하는 건 거의 없음.</strong>
      </p>

      <h2>2단계 ㆍ 매입세액 공제 받기</h2>

      <p>
        지난 6개월 사업 관련해서 산 거 다 모아서 그 부가세를 공제받는 단계. 이게 부가세 신고에서 제일 중요함.
      </p>

      <h3>공제 가능한 매입</h3>
      <ul>
        <li>세금계산서 받은 매입 (이게 메인)</li>
        <li>신용카드로 산 사업 관련 물건</li>
        <li>현금영수증 받은 사업 관련 지출</li>
      </ul>

      <h3>공제 불가능한 매입</h3>
      <ul>
        <li>접대비 (회식·선물 등)</li>
        <li>비영업용 차량 (개인 승용차)</li>
        <li>면세 물품</li>
        <li>가사 관련 지출</li>
      </ul>

      <p>
        <strong>"이거 사업 관련이냐"가 헷갈리는 게 많음.</strong> 보수적으로 말하면 회사 돈으로 산 게 명백한 것만 공제 받기. 애매한 거 공제 받았다가 세무조사 걸리면 가산세 폭탄.
      </p>

      <h2>3단계 ㆍ 신용카드 매출세액공제 (꼭 챙기기)</h2>

      <p>
        손님이 카드로 결제하면 그 매출의 <strong>1.3% (음식·숙박은 2.6%)</strong>를 공제 받음. 한도는 연 1천만원.
      </p>

      <p>
        이거 의외로 모르는 사람 많은데 <strong>자동으로 안 들어감.</strong> 본인이 신청해야 함. 홈택스 부가세 신고 화면에서 "신용카드 매출 세액공제" 항목 체크.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 카페 사장님 6개월 매출 5천만</div>
        <ul>
          <li>그 중 카드결제 매출: 4천만원</li>
          <li>매출세액공제 (음식점 2.6%): 4천만 × 2.6% = <strong>104만원</strong></li>
          <li>이 만큼 부가세에서 깎임. 체크 안 하면 그냥 사라지는 돈</li>
        </ul>
      </div>

      <h2>4단계 ㆍ 홈택스에서 신고 + 납부</h2>

      <h3>일반과세자 일정</h3>
      <ul>
        <li><strong>1기 확정신고</strong>: 7월 1~25일 (1~6월 매출분)</li>
        <li><strong>2기 확정신고</strong>: 1월 1~25일 (7~12월 매출분)</li>
      </ul>

      <h3>간이과세자 일정</h3>
      <ul>
        <li><strong>연 1회 확정신고</strong>: 1월 1~25일 (전년 1~12월 매출분)</li>
        <li>7월 25일까지 직전 6개월분 예정고지액 자동 납부</li>
      </ul>

      <p>
        납부 방법: 홈택스에서 신고 마치고 바로 카드결제·계좌이체 가능. 분납 신청도 가능 (3개월 분할).
      </p>

      <h2>본인 부가세 미리 추정하고 싶으면</h2>

      <p>
        <a href="/vat">부가세 계산기</a>에서 매출·매입·카드 비중 입력하면 납부세액 추정값 즉시 나옴. 일반·간이 둘 다 비교 가능.
      </p>

      <h2>이거 빠뜨리면 안 됨</h2>

      <ul>
        <li><strong>신고 기한 놓치지 않기</strong> — 1월 25일, 7월 25일. 하루만 늦어도 가산세</li>
        <li><strong>매입세금계산서 다 받았는지 체크</strong> — 거래처가 발행 안 하면 공제 못 받음</li>
        <li><strong>신용카드 매출세액공제 체크박스</strong> — 안 체크하면 자동 적용 안 됨</li>
        <li><strong>매입 영수증 5년 보관</strong> — 세무조사 대비</li>
      </ul>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          부가세 = 매출세액 − 매입세액 − 카드 매출세액공제. 홈택스 들어가면 매출·매입 다 자동으로 떠있음. 공식 4단계 따라가면 30분이면 끝. 신용카드 매출세액공제 체크박스 꼭 챙기기. 음식점은 2.6% 공제라 큼.
        </p>
      </div>
    </GuidePage>
  );
}
