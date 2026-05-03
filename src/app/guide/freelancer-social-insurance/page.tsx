import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("freelancer-social-insurance")!;

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
        회사 다닐 땐 4대보험 그냥 알아서 빠졌음. 근데 프리랜서 되니까 갑자기 헷갈림. "건강보험은 어디서 내지? 국민연금은? 고용보험은 가입할 수 있나?" 한 번 정리해줄게.
      </p>

      <p>
        결론: <strong>건강보험·국민연금은 의무 가입 (지역가입자), 고용보험·산재는 임의 가입.</strong>
      </p>

      <h2>4대보험 정리</h2>

      <ul>
        <li><strong>국민연금</strong> — 노후 연금. 의무</li>
        <li><strong>건강보험</strong> — 병원·약국 갈 때. 의무</li>
        <li><strong>고용보험</strong> — 실업급여. 일반 프리랜서는 임의 (예술인·특고는 의무)</li>
        <li><strong>산재보험</strong> — 일하다 다쳤을 때. 임의</li>
      </ul>

      <h2>국민연금 — 지역가입자로 자동 가입</h2>

      <h3>보험료율</h3>
      <ul>
        <li>소득의 <strong>9%</strong></li>
        <li>직장가입자는 회사가 절반 부담. 프리랜서는 <strong>본인이 9% 다 부담</strong></li>
        <li>최저 월 보험료 약 4만원, 최고 약 56만원 (2026 기준)</li>
      </ul>

      <h3>가입 방식</h3>
      <p>
        프리랜서로 처음 일 시작하면 <strong>국민연금공단이 자동으로 지역가입자</strong>로 등록. 본인이 신청 안 해도 됨.
      </p>

      <p>
        보험료는 <strong>본인 신고 소득 기반</strong>. 종소세 신고하면 그 정보로 다음 해 7월부터 보험료 재산정. 처음엔 신고 소득이 없어서 최저액으로 시작.
      </p>

      <h3>중간에 일 못 할 때</h3>
      <ul>
        <li><strong>납부 예외</strong> — 소득 없을 때 일시 정지. 매년 갱신</li>
        <li>예외 기간은 가입 기간에 안 들어감 → 노후 연금 줄어듦</li>
        <li>여유 있으면 <strong>임의계속가입</strong>으로 채우는 것도 방법</li>
      </ul>

      <h2>건강보험 — 지역가입자, 보험료 폭탄 주의</h2>

      <p>이게 프리랜서들이 진짜 욕하는 부분.</p>

      <h3>지역가입자 보험료 계산</h3>
      <ul>
        <li><strong>소득 점수</strong> — 종소세 신고 소득 기반</li>
        <li><strong>재산 점수</strong> — 부동산·전세금·자동차 가액 기반</li>
        <li><strong>자동차 점수</strong> — 4천만원 이상 차량은 추가 점수</li>
      </ul>

      <p>
        직장가입자는 소득의 <strong>약 7% 본인부담</strong>이지만, 지역가입자는 <strong>재산까지 포함</strong>해서 산정. 집 있으면 보험료 확 늘어남.
      </p>

      <h3>예시</h3>
      <p>
        프리랜서 연봉 5천만 + 전셋집 2억 + 차량 없음 → 월 건강보험료 약 25~35만원 정도.
      </p>

      <h3>건보료 줄이는 법</h3>
      <ul>
        <li><strong>피부양자 등록</strong> — 부모님이 직장 다니면 그 밑에 등록 가능 (소득 + 재산 기준 충족 시). 면제됨</li>
        <li><strong>실제 경비 신고로 소득금액 줄이기</strong> — 종소세 신고할 때 장부 신고로 경비 적극 반영</li>
        <li><strong>임의계속가입</strong> — 직장 그만둔 후 36개월간 직장가입자 보험료로 유지 가능</li>
      </ul>

      <h2>고용보험 — 일반 프리랜서는 임의 가입</h2>

      <p>
        일반 프리랜서는 <strong>고용보험 의무 가입 대상 아님</strong>. 따라서 실업급여 못 받음.
      </p>

      <h3>예외 — 예술인·특고 의무 가입</h3>
      <ul>
        <li><strong>예술인</strong> — 작가·작곡가·연예인 등 (2020.12부터 의무)</li>
        <li><strong>특수형태근로자(특고)</strong> — 보험설계사·학습지교사·택배기사 등 14개 직종</li>
        <li>월 80시간 이상 일하는 단기근로자</li>
      </ul>

      <p>
        본인이 위 카테고리에 해당하면 의무 가입. 일감 주는 회사가 신고해줌. 본인 부담은 보수의 <strong>0.8%</strong>.
      </p>

      <h3>일반 프리랜서가 임의 가입하려면?</h3>
      <p>
        2025년부터 자영업자도 고용보험 임의가입 가능. 단 보험료 본인 부담 큼 + 실업급여 받기 까다로움. 추천 안 함.
      </p>

      <h2>산재보험 — 거의 다 임의</h2>

      <p>
        일하다 다치면 산재보험으로 치료비·휴업급여 받을 수 있음. 근데 일반 프리랜서는 가입 안 해도 됨.
      </p>

      <p>
        특고 직종은 의무. 일반 프리랜서가 위험한 일 (현장직 등) 한다면 임의 가입 고려할 만함. 보험료는 업종별 다름, 일반 사무직은 거의 안 듦.
      </p>

      <h2>국민연금·건강보험 합치면 얼마?</h2>

      <p>
        프리랜서 본인부담 4대보험은 보통 <strong>소득의 약 12~15%</strong> 수준. 직장인이 회사랑 절반씩 내는 것보다 부담 큼.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 프리랜서 연 사업소득 5천만 + 전셋집 2억</div>
        <ul>
          <li>국민연금: 5,000만 × 9% = <strong>450만/년</strong> (월 37.5만)</li>
          <li>건강보험: 약 <strong>360만/년</strong> (월 30만)</li>
          <li>합계: 약 <strong>810만/년</strong></li>
          <li>여기에 종소세까지 더하면 진짜 부담 큼</li>
        </ul>
      </div>

      <h2>전략 — 부담 줄이는 방법</h2>

      <ol>
        <li><strong>피부양자 등록 가능한지 확인</strong> — 부모·형제 직장가입자 있으면</li>
        <li><strong>경비 적극 반영</strong> — 종소세 신고할 때 장부신고로 사업소득 낮추기</li>
        <li><strong>사업자등록 + 가족 동거</strong> — 가족과 같이 살면 동일세대로 묶여서 보험료 합산 가능</li>
        <li><strong>국민연금은 무조건 내기</strong> — 줄이지 말기. 노후 보장이라 큰 의미</li>
      </ol>

      <h2>본인 부담 추정</h2>

      <p>
        대략적인 수치: <strong>사업소득금액 × 11~13%</strong>가 4대보험 본인부담 추정. <a href="/">메인 손익분기점 계산기</a>의 시나리오 카드에서도 4대보험 추정값 자동 계산됨.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          국민연금 9% + 건강보험 7~10% 본인부담 (지역가입자라 회사 분담 없음). 합쳐서 보통 소득의 12~15%. 고용·산재는 임의(특고 직종은 의무). 부모님 직장가입자 있으면 피부양자 등록으로 면제 노려보기.
        </p>
      </div>
    </GuidePage>
  );
}
