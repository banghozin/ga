import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("when-to-register-business")!;

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
        프리랜서로 일하다 보니 매출이 점점 늘어남. "이 정도면 사업자등록 해야 하나?" 이 고민 한 번씩 함. 결론부터 말하면 <strong>"매출이 얼마부터"가 아니라 "사업의 형태가 뭐냐"</strong>가 더 중요함.
      </p>

      <h2>일단 사업자등록은 매출 무관 가능</h2>

      <p>
        세무서 가면 매출 0원이어도 사업자등록 해줌. 매출 1억이어도 등록 안 한 채로 프리랜서 사업소득 신고만 해도 (일단은) 신고는 받아줌. <strong>매출 기준이 명확하게 정해진 건 아님.</strong>
      </p>

      <p>
        근데 <strong>"인적용역"</strong>이 아닌 사업을 매출 크게 하면서 사업자등록 안 하면 → 사후에 가산세, 신용 문제 생김.
      </p>

      <h2>인적용역 vs 사업, 차이가 뭔데?</h2>

      <h3>인적용역 (사업자등록 안 해도 됨)</h3>
      <ul>
        <li>강사, 작가, 디자이너, 번역가, 통역, 컨설턴트, 운동선수, 모델 등</li>
        <li>본인의 노동·전문성으로 직접 서비스 제공</li>
        <li>고용주가 3.3% 원천징수해서 줌</li>
        <li>5월에 종소세 신고로 마무리</li>
      </ul>

      <h3>사업 (사업자등록 필수)</h3>
      <ul>
        <li>물건 사다 팔거나, 음식점, 미용실, 학원 등</li>
        <li>도소매업, 음식업, 제조업, 서비스업</li>
        <li>본인 노동 외에 직원·시설·재료를 활용해서 수익 창출</li>
        <li>부가세 신고·세금계산서 발행 의무</li>
      </ul>

      <p>
        예: 디자이너로 외주만 받으면 인적용역 → 사업자등록 안 해도 OK. 디자인 스튜디오 차려서 직원 쓰면서 사업 → 사업자등록 필수.
      </p>

      <h2>그래도 매출 기준 알려달라</h2>

      <p>
        세법상 명확한 "이 매출 넘으면 무조건 등록" 기준은 없지만, 실무적 지표는 있음.
      </p>

      <h3>매출 7,500만원 — 단순경비율 끝</h3>
      <p>
        프리랜서로 매출 7500만 넘으면 <strong>다음 해부터 단순경비율 못 씀.</strong> 장부 신고 의무. 이때부터 회계 부담이 갑자기 커짐. 사업자등록 + 간이/일반 검토할 시점.
      </p>

      <h3>매출 1억 400만원 — 간이과세 끝</h3>
      <p>
        간이과세자도 1억 400만 넘으면 다음 해부터 일반과세 강제 전환. <strong>매출이 이 근처에 도달했다 → 사업자등록 진지하게 검토</strong>.
      </p>

      <h3>매출 3억원 — 성실신고확인 의무</h3>
      <p>
        업종별로 기준 다르긴 한데, 보통 매출 3억 이상이면 세무대리인 도장 받은 성실신고확인서 제출 의무. 이때부터는 진짜 사업자.
      </p>

      <h2>사업자등록 하면 좋은 점</h2>

      <ul>
        <li><strong>경비 인정 범위 확장</strong> — 사무실 임차료, 직원 인건비, 장비 등 다 경비로</li>
        <li><strong>매입세액 환급</strong> — 일반과세자면 매입한 물건의 부가세 환급</li>
        <li><strong>세금계산서 발행 가능</strong> — B2B 거래 자유로움</li>
        <li><strong>대출 신청 시 유리</strong> — 사업자대출, 보증서 발급 등</li>
        <li><strong>법인 전환 가능성</strong> — 매출 더 커지면 법인으로</li>
      </ul>

      <h2>사업자등록 단점</h2>

      <ul>
        <li><strong>부가세 신고 의무</strong> — 일반과세자면 1월·7월 두 번. 간이는 1월만.</li>
        <li><strong>장부 작성 부담</strong> — 매입·매출 기록 남겨야 함</li>
        <li><strong>건강보험료 변동</strong> — 지역가입자라면 사업소득 반영해서 보험료 재산정</li>
        <li><strong>4대보험 본인 부담</strong> — 직장가입자였다가 지역가입자 되면 부담 커질 수도</li>
      </ul>

      <h2>그래서 언제 등록할까?</h2>

      <ol>
        <li>매출 5천 미만 + 인적용역 → 등록 굳이 X</li>
        <li>매출 5천~1억 + 인적용역 → 검토 시작. 경비 많으면 등록이 유리</li>
        <li>매출 1억 근처 → 등록 강력 권장. 간이과세 신청해두면 부담 작음</li>
        <li>매출 1억 400만 넘음 → 무조건 등록. 일반과세자 의무</li>
        <li>물건 팔거나 음식점 → 매출 무관 즉시 등록</li>
      </ol>

      <h2>등록 절차</h2>

      <p>
        세무서 직접 방문 또는 <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer noopener">홈택스</a> 온라인 신청. 둘 다 무료, 30분이면 끝남.
      </p>

      <p>
        필요한 거: 신분증, 사업장 주소(자택 가능), 업종 코드, 사업 시작일. 그게 다임.
      </p>

      <p>
        등록 전에 본인 매출에서 프리랜서 vs 간이 vs 일반 어느 쪽이 유리한지 비교하고 싶으면 <a href="/">메인 손익분기점 비교</a> 한번 돌려봐.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          매출이 아니라 사업 형태가 핵심. 인적용역(강사·디자이너 등)은 매출 1억 근처까지 등록 안 해도 됨. 도소매·음식점은 매출 무관 즉시 등록. 매출 7500만 넘으면 단순경비율 끝나니까 그때 사업자등록 + 간이과세 검토하는 게 정석.
        </p>
      </div>
    </GuidePage>
  );
}
