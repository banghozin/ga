import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("side-job-tax-threshold")!;

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
        퇴근하고 부업으로 한 달에 50만원 정도 번다 치자. 그러면 세금 신고해야 함? 안 해도 됨? 회사에 알려질까? 이런 거 한 번쯤 검색해봤을 거임.
      </p>

      <p>
        결론부터 말하면 <strong>"무엇으로 벌었냐"에 따라 달라짐.</strong> 한 번 쭉 정리해줄게.
      </p>

      <h2>일단 부업 소득은 3가지로 나뉨</h2>

      <ul>
        <li>
          <strong>사업소득</strong> — 정기적으로 일감 받고 돈 받는 경우. 프리랜서, 부업 외주, 정기 강의 등. 금액 무관 신고 의무.
        </li>
        <li>
          <strong>기타소득</strong> — 일시적·우발적 소득. 단발 강연료, 원고료, 자문료, 인세 등.
        </li>
        <li>
          <strong>금융소득</strong> — 이자·배당. 연 2000만원 넘으면 신고 의무.
        </li>
      </ul>

      <p>
        예를 들어 매달 외주 받아서 5천만원 벌면 → <strong>사업소득</strong>. 어쩌다 한 번 5천짜리 강연 한 게 다면 → <strong>기타소득</strong>.
      </p>

      <h2>기타소득은 300만원이 마지노선</h2>

      <p>
        기타소득은 <strong>연 300만원까지는 분리과세 선택 가능</strong>. 분리과세란 그 소득만 따로 계산해서 세금 떼고 끝내는 거. 회사에서 받는 월급이랑 합쳐서 신고 안 해도 됨.
      </p>

      <p>
        근데 <strong>300만원 넘으면 종합과세 의무.</strong> 회사 월급이랑 합쳐서 5월에 종소세 신고해야 함.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 강연료 200만원 받음</div>
        <ul>
          <li>분리과세 선택 → 22% 떼고 끝 (44만원)</li>
          <li>종합과세 합산 → 본인 한계세율로 계산. 연봉 높으면 22%보다 더 떼임</li>
          <li>대부분의 경우 분리과세가 유리. 자동으로 분리과세 처리됨</li>
        </ul>
      </div>

      <h2>사업소득은 1만원도 신고 의무</h2>

      <p>
        매달 외주 받는 식의 부업은 <strong>금액 상관없이 무조건 신고</strong>해야 함. 의외로 모르는 사람 많은데, 진짜임.
      </p>

      <p>
        다만 신고한다고 무조건 세금 더 내는 건 아님. 단순경비율 적용하면 매출의 60~70%는 자동 경비로 빠짐. 거기에 회사에서 미리 뗀 원천징수 3.3%까지 합하면 <strong>오히려 환급받는 경우도 많음.</strong>
      </p>

      <h2>회사에 알려질까?</h2>

      <p>이게 사람들이 제일 걱정하는 거.</p>

      <p>
        결론: <strong>본인이 신고만 잘 하면 회사에 알려질 일 거의 없음.</strong> 다만 한 가지 주의할 점이 있음.
      </p>

      <h3>건강보험료 폭탄 가능성</h3>
      <p>
        부업 소득 신고 → 다음 해 11월에 건강보험공단이 그 소득 반영해서 건강보험료 재산정 → 회사 월급에 추가 보험료 청구되면 회사 인사팀이 알 수도 있음.
      </p>
      <p>
        이걸 피하려면 <strong>"보수 외 소득" 분리 신청</strong>을 11월에 하면 됨. 그러면 부업 소득은 본인이 따로 지역 건강보험료 내고, 회사는 모름.
      </p>

      <h2>그래서 어떻게 함?</h2>

      <ol>
        <li>부업 시작할 때 <strong>사업소득인지 기타소득인지</strong> 먼저 분류</li>
        <li>매달 받는 돈이면 사업소득 → 무조건 5월 종소세 신고</li>
        <li>가끔 받는 거면 기타소득 → 300만원 넘으면 신고, 안 넘으면 분리과세 자동</li>
        <li>11월에 보수 외 소득 분리 신청 → 회사한테 안 들킴</li>
      </ol>

      <p>
        본인이 부업으로 얼마 벌면 종소세 얼마 나오는지 미리 보고 싶으면 <a href="/income-tax">종합소득세 계산기</a>에 연봉이랑 부업 매출 넣어보면 추정값 나옴.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          정기적 부업(사업소득)은 1만원도 신고 의무, 일시적 부업(기타소득)은 연 300만원까지 분리과세. 신고하면 오히려 환급 받는 경우 많음. 회사에 들킬까봐 안 하는 거 그게 더 손해. 11월에 보수 외 소득 분리 신청하면 회사 모름.
        </p>
      </div>
    </GuidePage>
  );
}
