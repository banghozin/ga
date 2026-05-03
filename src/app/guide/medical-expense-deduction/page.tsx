import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("medical-expense-deduction")!;

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
        한 해 동안 병원 갔다가 100만원 정도 쓴 적 있음? 그러면 <strong>최대 12만원 환급</strong> 받을 수 있음. 근데 이거 안 챙기는 사람 진짜 많음. 영수증 어디 있는지도 모르고.
      </p>

      <p>
        다행히 요즘은 거의 다 자동 조회되니까 신경만 쓰면 됨. 한 번 정리해보자.
      </p>

      <h2>의료비 세액공제 = 진짜 자주 묻히는 절세 항목</h2>

      <p>
        일정 금액 이상 의료비 쓰면 그 일부를 <strong>세금에서 직접 차감</strong>. 세액공제니까 한계세율 무관 누구나 같은 % 환급.
      </p>

      <h3>공식</h3>
      <p>
        <code>(의료비 - 총급여 3%) × 15%</code> = 환급액
      </p>

      <p>
        총급여의 3%가 마지노선. 그 초과 부분만 공제 대상. 거기서 15% 만큼 세금 깎아줌.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 총급여 4,000만, 의료비 200만 사용</div>
        <ul>
          <li>마지노선: 4,000만 × 3% = 120만</li>
          <li>초과분: 200만 - 120만 = 80만</li>
          <li>세액공제: 80만 × 15% = <strong>12만원 환급</strong></li>
        </ul>
      </div>

      <h2>공제되는 의료비 — 의외로 폭 넓음</h2>

      <h3>당연히 되는 것</h3>
      <ul>
        <li>병원·의원 진료비, 입원비</li>
        <li>처방전 받은 약값</li>
        <li>치과 치료비 (스케일링부터 임플란트까지)</li>
        <li>한의원 진료비, 한약 (치료 목적)</li>
        <li>물리치료, 도수치료</li>
      </ul>

      <h3>의외로 되는 것</h3>
      <ul>
        <li><strong>안경·콘택트렌즈</strong> — 시력교정용. 1인 연 50만원 한도</li>
        <li><strong>임플란트·라식</strong> — 미용 아니라 치료 목적이면 OK</li>
        <li><strong>산후조리원</strong> — 출산일로부터 60일까지, 200만원 한도</li>
        <li><strong>난임 시술비</strong> — 별도 한도 없음 (전액 공제)</li>
        <li><strong>장애인 보조기구</strong> (휠체어, 보청기 등)</li>
        <li><strong>건강검진</strong> (회사 지원분 제외)</li>
      </ul>

      <h3>공제 안 되는 것</h3>
      <ul>
        <li>건강기능식품 (영양제, 비타민 등)</li>
        <li>미용 목적 시술 (성형, 보톡스 등)</li>
        <li>보약 (치료 아닌 보양 목적)</li>
        <li>해외 의료비</li>
        <li>실손보험으로 보전받은 부분</li>
      </ul>

      <h2>일부 의료비는 공제율 더 높음</h2>

      <p>
        다음 항목들은 <strong>총급여 3% 마지노선 적용 안 받고 무조건 공제</strong>:
      </p>

      <ul>
        <li><strong>난임 시술비</strong> — 30% 공제 (15% 아님)</li>
        <li><strong>미숙아·선천성 이상아 의료비</strong> — 20% 공제</li>
        <li><strong>본인·65세 이상 가족·장애인 의료비</strong> — 한도 없이 다 공제</li>
      </ul>

      <p>
        65세 이상 부모님 의료비는 한도 없음. 큰 수술 받으셨으면 거기서 큰 환급 가능.
      </p>

      <h2>가족 의료비도 합산 가능</h2>

      <p>
        부양가족으로 등록된 가족의 의료비도 본인이 다 공제 받을 수 있음. <strong>가족 합산</strong>.
      </p>

      <ul>
        <li>배우자, 자녀, 부모님 의료비 다 합산 가능</li>
        <li>맞벌이면 한 명만 받을 수 있음 (둘이 나누기 X)</li>
        <li>총 의료비 클수록 절세 효과 큼</li>
      </ul>

      <h2>영수증 안 모아도 됨</h2>

      <p>
        요즘은 거의 다 자동. 매년 1월 15일경부터 <strong>홈택스 연말정산 간소화 서비스</strong>에서 본인 명의로 결제한 의료비 자동 조회.
      </p>

      <p>
        병원·약국이 국세청에 자료 제출하기 때문. 단 일부 누락 가능성 있어서 본인이 한 번 확인하는 게 좋음.
      </p>

      <h2>자동 조회 안 되는 케이스</h2>

      <ul>
        <li>현금 결제하고 영수증 안 받은 거</li>
        <li>일부 한의원·소형 의원에서 자료 미제출</li>
        <li>안경원 (안경원이 자료 제출 안 하는 곳 많음 → 영수증 직접 챙기기)</li>
        <li>해외 의료비 (어차피 공제 안 됨)</li>
      </ul>

      <p>
        <strong>안경·콘택트렌즈는 영수증 직접 챙기기.</strong> 매장에서 "의료비 공제용 영수증 주세요" 하면 됨.
      </p>

      <h2>실손보험 받은 거 빼야 함</h2>

      <p>
        의료비 100만원 썼는데 실손보험으로 80만원 돌려받았다? <strong>공제 대상은 20만원만</strong>. 보험 보전분은 빼야 함.
      </p>

      <p>
        이거 모르고 100만원 다 신고하면 → 다음 해 소명 + 가산세. 주의.
      </p>

      <h2>5월에 신고할 때 체크</h2>

      <ol>
        <li>홈택스 연말정산 간소화 서비스에서 의료비 내역 다운로드</li>
        <li>안경·콘택트렌즈 영수증 별도 추가</li>
        <li>실손보험 보전받은 금액 빼기</li>
        <li>가족 의료비 합산 (부양가족 등록한 사람만)</li>
        <li>종소세 신고 화면에서 "의료비 세액공제" 입력</li>
      </ol>

      <h2>본인 환급액 추정</h2>

      <p>
        간단 공식: <strong>(본인 의료비 + 가족 의료비) - 총급여 3%</strong> 가 양수면 그 × 15%가 환급액. 미리 계산해서 의료비 영수증 다 챙겼는지 확인하는 게 5월 신고 때 마음 편함.
      </p>

      <p>
        다른 절세 항목까지 합쳐서 종합 환급액 보고 싶으면 <a href="/income-tax">종소세 계산기</a> 활용.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          (의료비 - 총급여 3%) × 15% 환급. 가족 의료비 합산 가능. 안경·임플란트·산후조리원·난임 다 OK. 영양제·미용은 X. 안경 영수증은 직접 챙기기. 실손보험 받은 건 빼야 함.
        </p>
      </div>
    </GuidePage>
  );
}
