import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("dependent-deduction")!;

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
        세금 진짜 쉽게 깎는 방법 1순위. <strong>부양가족 등록</strong>. 1명당 150만원씩 자동으로 깎아줌. 4인 가족이면 600만원이 그냥 사라짐(좋은 의미로).
      </p>

      <p>
        근데 의외로 부양가족 등록 안 하는 사람 많음. 자격이 헷갈리거나 귀찮아서. 한 번 정리해볼게.
      </p>

      <h2>인적공제 = 본인 + 가족마다 150만원</h2>

      <p>
        종합소득세 신고할 때 <strong>본인 1명 = 150만원, 부양가족 1명 추가 = 150만원</strong> 자동 공제. 누가 봐도 무조건 챙기는 거임.
      </p>

      <h3>예시</h3>
      <ul>
        <li>혼자 사는 직장인 → 본인 150만원만</li>
        <li>배우자 + 자녀 1명 → 본인 + 2명 = <strong>450만원</strong></li>
        <li>배우자 + 자녀 2명 + 60세 이상 부모 1명 → <strong>750만원</strong></li>
      </ul>

      <p>
        과세표준이 750만원 줄어들면, 한계세율 24%일 때 → <strong>180만원 세금 덜 냄</strong>. 무시할 수 없는 금액.
      </p>

      <h2>누가 부양가족 자격 됨?</h2>

      <h3>배우자</h3>
      <ul>
        <li>법적으로 결혼한 배우자</li>
        <li>연 소득 100만원 이하 (근로소득만 있으면 총급여 500만원 이하)</li>
        <li>같이 살지 않아도 OK</li>
      </ul>

      <h3>자녀·손자녀</h3>
      <ul>
        <li>20세 이하 (만 20세 이하)</li>
        <li>연 소득 100만원 이하</li>
        <li>장애인이면 나이 무관</li>
      </ul>

      <h3>부모·조부모</h3>
      <ul>
        <li>60세 이상</li>
        <li>연 소득 100만원 이하</li>
        <li>같이 살지 않아도 OK (생계 같이 한다는 증명만 되면)</li>
      </ul>

      <h3>형제자매</h3>
      <ul>
        <li>20세 이하 또는 60세 이상</li>
        <li>연 소득 100만원 이하</li>
        <li>같이 살아야 함 (주민등록상 동일 세대)</li>
      </ul>

      <h2>"연 소득 100만원" 의 함정</h2>

      <p>
        부양가족 자격에서 가장 많이 헷갈리는 부분. 100만원의 정의는 <strong>"종합소득금액"</strong>임. 그 사람이 받은 총 수입이 아니라, 각종 공제 뺀 후 금액.
      </p>

      <h3>경우별 환산</h3>
      <ul>
        <li><strong>근로소득만</strong> → 총급여 <strong>500만원 이하</strong>면 OK (근로소득공제 차감)</li>
        <li><strong>사업소득만</strong> → 사업소득금액 100만원 이하 (매출 - 경비 = 100만원 이하)</li>
        <li><strong>이자·배당</strong> → 합쳐서 100만원 이하</li>
        <li><strong>국민연금 받는 부모</strong> → 보통 OK (연금소득공제 후 100만원 이하면)</li>
      </ul>

      <p>
        예: 60대 어머니가 국민연금으로 월 70만원 받음 → 연 840만원. 연금소득공제 받으면 종합소득금액 100만원 이하 가능 → 부양가족 등록 OK.
      </p>

      <h2>추가 공제도 있음</h2>

      <p>인적공제 150만원 외에도 추가로 더 깎이는 항목들이 있음.</p>

      <h3>경로우대공제 (70세 이상)</h3>
      <ul>
        <li>부양가족 중 70세 이상 → <strong>1인당 100만원 추가</strong></li>
      </ul>

      <h3>장애인공제</h3>
      <ul>
        <li>부양가족 중 장애인 → <strong>1인당 200만원 추가</strong></li>
      </ul>

      <h3>한부모공제</h3>
      <ul>
        <li>혼자 자녀 키우는 한부모 → <strong>100만원 추가</strong></li>
      </ul>

      <h3>부녀자공제</h3>
      <ul>
        <li>여성 + 부양가족 있거나 + 종합소득 3,000만 이하 → <strong>50만원 추가</strong></li>
      </ul>

      <h2>중복 등록 안 됨 — 가족간 조율 필수</h2>

      <p>
        부모님 한 분을 형이랑 동생이 둘 다 부양가족으로 등록? <strong>안 됨.</strong> 한 사람만 등록 가능.
      </p>

      <p>
        보통 <strong>소득이 가장 높은 자녀</strong>(한계세율이 가장 높은)가 등록하는 게 절세 효과 큼. 형제끼리 미리 얘기해서 정하기.
      </p>

      <h2>홈택스에서 등록 방법</h2>

      <ol>
        <li>홈택스 로그인 → "종합소득세 신고" 메뉴</li>
        <li>모두채움 신고서 또는 일반신고 선택</li>
        <li>"인적공제" 항목에서 부양가족 추가</li>
        <li>주민등록번호, 관계, 동거 여부 입력</li>
        <li>증빙은 따로 안 내도 됨 (국세청이 자동 검증)</li>
      </ol>

      <h2>주의할 점</h2>

      <ul>
        <li>잘못 등록하면 → 다음 해 가산세 + 환수</li>
        <li>이혼·사별·자녀 결혼 → 그 해 12월 31일 기준으로 판단</li>
        <li>해외 거주 부모 → 어려움. 송금 증빙 등 필요</li>
        <li>맞벌이 부부 → 자녀를 누가 등록할지 한계세율 보고 결정</li>
      </ul>

      <h2>본인 절세 효과 추정해보기</h2>

      <p>
        <a href="/income-tax">종합소득세 계산기</a>에서 부양가족 수 바꿔보면 즉시 세금 차이 나옴. 1명 추가하면 한 50만원, 2명 추가하면 100만원 식으로 깎이는 게 보임.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          본인 + 부양가족 1명당 150만원씩 자동 공제. 60세 이상 부모, 20세 이하 자녀, 소득 적은 배우자는 무조건 등록. "연 소득 100만원 이하"는 종합소득금액 기준이라 국민연금 받는 부모도 보통 OK. 가족끼리 중복 등록은 안 되니 한계세율 높은 사람이 등록하기.
        </p>
      </div>
    </GuidePage>
  );
}
