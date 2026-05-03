import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("simple-expense-vs-bookkeeping")!;

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
        프리랜서·자영업자가 5월 종소세 신고할 때 두 갈래 길이 있음. <strong>단순경비율로 추계신고하기</strong> 또는 <strong>장부 신고하기</strong>. 둘이 뭔 차이? 어느 게 이득? 정리해줄게.
      </p>

      <h2>단순경비율 = "영수증 안 모아도 되는 모드"</h2>

      <p>
        쉽게 말해 국세청이 <strong>"이 업종이면 매출의 X%는 그냥 경비로 인정해줄게"</strong> 해주는 거. 영수증·증빙 다 필요 없음.
      </p>

      <h3>업종별 단순경비율 (2026 기준 근사)</h3>
      <ul>
        <li>인적용역(강사·디자이너·번역 등) — <strong>약 64.2%</strong></li>
        <li>IT 개발·컨설팅 — <strong>약 59.1%</strong></li>
        <li>도소매업 — <strong>약 86%</strong></li>
        <li>음식점 — <strong>약 89.2%</strong></li>
        <li>제조업 — <strong>약 84.4%</strong></li>
        <li>기타 서비스업 — <strong>약 71.5%</strong></li>
      </ul>

      <p>
        예: 프리랜서 디자이너가 매출 5천만 → 단순경비율 64.2% 적용 → 경비 3,210만원 자동 인정 → 사업소득금액 1,790만원으로 계산. 영수증 1장 없어도 됨.
      </p>

      <h2>장부신고 = "실제로 쓴 돈 다 적기 모드"</h2>

      <p>
        진짜로 쓴 사업 경비를 영수증·세금계산서 기반으로 다 입력. 더 많이 인정받을 수도, 더 적게 인정받을 수도 있음.
      </p>

      <h3>경비로 인정되는 항목</h3>
      <ul>
        <li>사무실 임차료, 관리비</li>
        <li>장비·소프트웨어 구입</li>
        <li>업무 관련 교육비, 도서비</li>
        <li>출장비, 교통비</li>
        <li>업무용 통신비 (휴대폰·인터넷)</li>
        <li>거래처 회의·식대 (접대비는 한도 있음)</li>
        <li>인건비 (직원 있으면)</li>
        <li>차량 유지비 (업무용일 때)</li>
      </ul>

      <h2>둘 중 어느 게 이득?</h2>

      <p>이게 핵심.</p>

      <h3>단순경비율이 유리한 경우</h3>
      <ul>
        <li>실제 경비가 단순경비율보다 적음 (예: 디자이너인데 별로 쓴 돈 없음)</li>
        <li>영수증·증빙 정리하기 귀찮음</li>
        <li>매출 7,500만 미만 (이게 단순경비율 한도)</li>
      </ul>

      <h3>장부신고가 유리한 경우</h3>
      <ul>
        <li>실제 경비가 단순경비율 % 보다 큼 (예: 인테리어·장비 많이 쓰는 업종)</li>
        <li>임대료·인건비 등 큰 비용이 정기적으로 나감</li>
        <li>매출이 크고 한계세율 높음 → 경비 1만원 더 빼면 절세효과 큼</li>
      </ul>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 카페 사장님 매출 8천만</div>
        <ul>
          <li>단순경비율: 8천만 × 89.2% = 7,136만원 경비 → 사업소득 864만원</li>
          <li>실제 경비: 임대료 1,800만 + 재료비 3,000만 + 인건비 2,500만 + 기타 500만 = 7,800만원</li>
          <li>장부신고하면: 8천만 - 7,800만 = 사업소득 200만원</li>
          <li>→ <strong>장부신고가 압도적으로 유리</strong></li>
        </ul>
      </div>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 프리랜서 번역가 매출 5천만</div>
        <ul>
          <li>단순경비율: 5천만 × 64.2% = 3,210만원 경비 → 사업소득 1,790만원</li>
          <li>실제 경비: 컴퓨터·인터넷·교육비 다 합쳐도 500만원 정도</li>
          <li>장부신고하면: 5천만 - 500만 = 사업소득 4,500만원 (더 많이 잡힘)</li>
          <li>→ <strong>단순경비율이 압도적으로 유리</strong></li>
        </ul>
      </div>

      <h2>한도와 의무 사항</h2>

      <h3>매출 7,500만 미만 (인적용역 기준)</h3>
      <p>
        단순경비율 vs 장부신고 본인이 선택. 대부분 단순경비율이 편하고 결과도 비슷.
      </p>

      <h3>매출 7,500만 ~ 1억 5천만 (인적용역 기준)</h3>
      <p>
        단순경비율 못 씀. <strong>기준경비율</strong> 또는 장부신고. 기준경비율은 단순경비율보다 까다롭고 보통 불리함.
      </p>

      <h3>매출 1억 5천만 이상</h3>
      <p>
        <strong>장부신고 의무.</strong> 안 하면 무기장가산세까지 붙음.
      </p>

      <p>
        업종별 한도 다름. 음식점·도소매는 매출 3,600만 또는 6,000만이 단순경비율 한도. 본인 업종 정확한 기준은 국세청 안내 확인.
      </p>

      <h2>장부 신고 어떻게 함?</h2>

      <ul>
        <li><strong>간편장부</strong> — 작은 사업자용. 입출금 내역만 정리. 본인이 엑셀로도 가능</li>
        <li><strong>복식부기</strong> — 큰 사업자 의무. 회계 SW 또는 세무대리인 필요</li>
      </ul>

      <p>
        간편장부는 의외로 어렵지 않음. 매월 거래내역 정리해두면 5월 신고 때 편함. 손쉽게 하고 싶으면 무료 회계 SW (예: 삼쩜삼, 자비스앤빌런즈, 케이뱅크 사업용 등) 활용.
      </p>

      <h2>판단 가이드</h2>

      <ol>
        <li>본인 매출에 단순경비율 적용해서 사업소득 계산</li>
        <li>실제 경비를 다 더해서 장부신고 사업소득 계산</li>
        <li>둘 중 사업소득 적은 쪽이 절세 유리</li>
        <li>차이가 작으면 → 단순경비율 (편하니까)</li>
        <li>차이가 크면 → 장부신고 (영수증 모으는 보람 있음)</li>
      </ol>

      <p>
        <a href="/income-tax">종소세 계산기</a>에 매출이랑 경비율 직접 입력해서 비교해볼 수 있음. 단순경비율 기본값과 본인 실제 경비율 둘 다 돌려서 비교.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          단순경비율은 영수증 없이 자동 계산, 장부신고는 실제 경비로 계산. 큰 비용 들어가는 업종(음식점·도소매)은 장부 유리, 비용 적은 프리랜서(번역·디자인)는 단순경비율 유리. 매출 7500만 넘으면 단순경비율 끝, 1.5억 넘으면 장부 의무.
        </p>
      </div>
    </GuidePage>
  );
}
