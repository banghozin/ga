import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("income-tax-brackets-2026")!;

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
        "1억 벌면 세금 38% 떼간다며?" 이런 얘기 들어봤지? 반은 맞고 반은 틀림.
      </p>

      <p>
        한국 종합소득세는 <strong>누진세</strong> 방식이라서 1억 번다고 1억의 38%를 떼지 않음. 진짜 작동 방식이 어떤 건지 5분만 줘봐. 한 번만 이해하면 평생 안 잊어버림.
      </p>

      <h2>2026년 종합소득세율 8단계</h2>

      <p>이게 누진세율표. 외울 필요는 없고 이렇게 생겼다는 것만 알자.</p>

      <ul>
        <li>~ 1,400만원 → <strong>6%</strong></li>
        <li>1,400만 ~ 5,000만원 → <strong>15%</strong></li>
        <li>5,000만 ~ 8,800만원 → <strong>24%</strong></li>
        <li>8,800만 ~ 1억 5,000만원 → <strong>35%</strong></li>
        <li>1억 5,000만 ~ 3억원 → <strong>38%</strong></li>
        <li>3억 ~ 5억원 → <strong>40%</strong></li>
        <li>5억 ~ 10억원 → <strong>42%</strong></li>
        <li>10억원 초과 → <strong>45%</strong></li>
      </ul>

      <p>
        그리고 여기에 <strong>지방소득세 10%</strong>가 추가로 붙음. 즉 소득세를 100만원 냈으면 지방세 10만원 더 → 총 110만원.
      </p>

      <h2>누진세는 "구간별" 적용임</h2>

      <p>
        흔한 오해: "1억 벌면 35% 떼니까 6500만원 손에 남는다."
      </p>

      <p>
        실제로는 그렇지 않음. 누진세는 <strong>각 구간마다 다른 세율 적용</strong>.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 과세표준 1억원인 경우</div>
        <ul>
          <li>처음 1,400만원에 대해 → 6% = 84만원</li>
          <li>1,400만~5,000만원 (3,600만원)에 대해 → 15% = 540만원</li>
          <li>5,000만~8,800만원 (3,800만원)에 대해 → 24% = 912만원</li>
          <li>8,800만~1억원 (1,200만원)에 대해 → 35% = 420만원</li>
          <li><strong>합계: 1,956만원</strong> + 지방세 195.6만원 = <strong>2,151만원</strong></li>
        </ul>
      </div>

      <p>
        1억 벌고 세금 2,151만원 → <strong>실효세율 21.5%</strong>. "35% 구간"에 들어가긴 했지만 실제로는 21.5%만 떼는 거임. 이게 누진세의 핵심.
      </p>

      <h2>한계세율 vs 실효세율</h2>

      <h3>한계세율 (Marginal Rate)</h3>
      <p>
        내가 <strong>지금 1만원 더 벌면 그 1만원에 적용되는 세율</strong>. 위 예시에서 1억 번 사람은 한계세율 35% 구간에 있음. 즉 보너스 100만원 더 받으면 그 중 35만원이 세금.
      </p>

      <h3>실효세율 (Effective Rate)</h3>
      <p>
        <strong>전체 소득 대비 실제 떼간 세금 비율.</strong> 평균이라고 보면 됨. 위 예시에선 21.5%.
      </p>

      <p>
        "내 세율은 35%야"라고 말할 때 그건 한계세율. "내 세금 부담은 21.5%야"는 실효세율. 둘 다 의미 있는 숫자임.
      </p>

      <h2>그럼 왜 사람들은 "세금 너무 많아"라고 함?</h2>

      <p>몇 가지 이유가 있음.</p>

      <ul>
        <li><strong>4대보험까지 합치면</strong> 진짜 부담 큼. 건강+연금+고용+산재 본인부담만 합쳐도 월급의 9%</li>
        <li><strong>부가세</strong>는 사업자에게 별도. 매출의 10%</li>
        <li><strong>지방세 10%</strong>가 위 세율표에 안 포함된 거. 모르면 "어 더 떼네?" 함</li>
        <li>고소득자 한계세율이 45%까지 가긴 함. 10억 넘는 부분</li>
      </ul>

      <h2>과세표준이 뭔데?</h2>

      <p>
        위에서 "과세표준 1억"이라 했는데, 이건 <strong>총소득 - 각종 공제</strong> 한 다음 남은 금액임. 실제 매출이나 연봉이랑 다름.
      </p>

      <ul>
        <li>총소득: 1억 5천만원</li>
        <li>인적공제: 600만원 (4인 가족)</li>
        <li>국민연금·건강보험: 1500만원</li>
        <li>의료비·신용카드 공제: 500만원</li>
        <li>연금저축 공제: 700만원</li>
        <li><strong>과세표준: 1억 1700만원</strong></li>
      </ul>

      <p>
        같은 연봉 1.5억이라도 공제 잘 챙기면 과세표준이 확 줄어들고 세금도 줄어듦. <strong>5월에 신고 잘하는 게 진짜 중요</strong>한 이유.
      </p>

      <h2>본인 세금 추정해보고 싶으면</h2>

      <p>
        <a href="/income-tax">종합소득세 계산기</a>에 연봉이랑 부양가족 수 넣으면 한계세율·실효세율·총 세부담 다 나옴. 누진세 직접 계산하려면 머리 아프니까 그냥 돌려보는 게 빠름.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          누진세는 구간별 적용. "내 세율 35%"는 한계세율, "내 부담 21%"는 실효세율. 보통 사람은 실효세율 10~25% 수준. 공제 잘 챙기면 과세표준이 줄어들고 그만큼 세금도 줄어들음. 8단계 세율표 기억할 필요 없고 계산기 돌리는 게 빠름.
        </p>
      </div>
    </GuidePage>
  );
}
