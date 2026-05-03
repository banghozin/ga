import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("freelancer-3-3-refund")!;

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

export default function FreelancerRefundPost() {
  return (
    <GuidePage meta={post}>
      <p>
        솔직히 프리랜서로 일 처음 받으면 통장 보고 좀 어이없음. 분명 100만원 받기로 했는데 통장에 들어온 건 96만 7천원. <strong>3만 3천원 어디 갔지?</strong>
      </p>

      <p>
        이게 그 유명한 <strong>3.3% 원천징수</strong>임. 회사가 너 대신 미리 세금 떼서 국세청에 보낸 거. 근데 좋은 소식이 있는데, <strong>이 돈 5월에 거의 다 돌려받을 수 있음.</strong> 진짜로.
      </p>

      <h2>3.3%가 뭔데?</h2>

      <p>쉽게 말하면, 회사가 너 대신 미리 떼는 세금이야.</p>

      <ul>
        <li>소득세 3%</li>
        <li>지방소득세 0.3%</li>
        <li>합쳐서 <strong>3.3%</strong></li>
      </ul>

      <p>
        회사 입장에서는 &ldquo;이 사람이 5월에 종소세 신고 안 하고 잠수타면 어쩌지&rdquo; 하니까 미리 떼두는 거임. 일종의 보증금 같은 거. 근데 이건 <strong>너의 진짜 세금이 아님.</strong> 진짜 세금은 5월에 종합소득세 신고할 때 다시 계산함.
      </p>

      <h2>왜 환급 받을 수 있음?</h2>

      <p>
        진짜 세금이 보통 3.3%보다 낮거든. 예를 들어볼게.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 연 3000만원 번 프리랜서</div>
        <ul>
          <li>회사가 떼간 세금 (3.3%): <strong>99만원</strong></li>
          <li>실제 종소세 (단순경비율로 계산): 약 <strong>30~40만원</strong></li>
          <li>차액 → <strong>약 60만원 환급</strong></li>
        </ul>
      </div>

      <p>
        &ldquo;진짜요?&rdquo; 응 진짜. 프리랜서들 5월에 거의 다 환급받음. 안 받으면 그 돈 그냥 국세청한테 기부하는 거.
      </p>

      <h2>환급 받는 법 (4단계)</h2>

      <h3>1단계 ㆍ 5월에 홈택스 들어가기</h3>
      <p>
        5월 1일~31일 사이에 신고. 늦으면 가산세 붙으니까 미루지 말기.{" "}
        <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer noopener">
          홈택스 (hometax.go.kr)
        </a>{" "}
        들어가서 공동인증서나 간편인증으로 로그인.
      </p>

      <h3>2단계 ㆍ &ldquo;모두채움 신고서&rdquo; 클릭</h3>
      <p>
        홈택스 메인에서 &ldquo;종합소득세 신고&rdquo; → &ldquo;모두채움 신고서&rdquo;. 회사들이 너한테 준 돈, 떼간 세금 다 자동으로 채워져 있음. 진짜 마법 같음.
      </p>
      <p>
        만약 비어있다? 그러면 &ldquo;일반신고&rdquo;로 가서 직접 입력해야 함. 본인이 받은 사업소득 원천징수영수증 모아두면 됨.
      </p>

      <h3>3단계 ㆍ 경비 어떻게 신고할지 정하기</h3>
      <p>두 가지 옵션이 있음.</p>

      <ul>
        <li>
          <strong>단순경비율 (기본)</strong> — 인적용역 프리랜서 기준 매출의 약 64.2%를 자동으로 경비로 인정해줌. 영수증 안 모아도 됨. 매출 7500만원 미만이면 이거 쓸 수 있음.
        </li>
        <li>
          <strong>장부 신고</strong> — 실제로 쓴 돈을 다 입력. 더 유리할 수도 있는데 영수증·세금계산서 다 모아둬야 함. 매출 7500만 넘으면 의무.
        </li>
      </ul>

      <p>
        대부분 프리랜서는 단순경비율이 편하고 결과도 비슷함. 영수증 거의 없으면 무조건 단순경비율.
      </p>

      <h3>4단계 ㆍ 제출 + 환급 계좌 입력</h3>
      <p>
        다 채우면 &ldquo;제출하기&rdquo; → 환급 받을 계좌번호 입력. 보통 <strong>1~2개월 안에</strong> 통장에 입금됨. 이때 진짜 행복함.
      </p>

      <h2>얼마나 받을지 미리 보고 싶으면</h2>

      <p>
        내가 만든 <a href="/income-tax">종합소득세 계산기</a>에서 매출이랑 경비율 입력하면 종소세 추정값이 나옴. 거기서 &ldquo;원천징수로 떼간 금액(매출 × 3.3%)&rdquo; 빼면 그게 대략 환급액임.
      </p>

      <p>
        프리랜서 그대로 갈지, 아니면 사업자등록 해야 더 유리할지 고민이라면{" "}
        <a href="/">메인 손익분기점 비교</a>도 한번 돌려봐. 매출 1억 넘으면 사업자등록이 보통 더 이득.
      </p>

      <h2>이거 하나만 기억하기</h2>

      <ul>
        <li>매출 <strong>7500만원</strong> 넘으면 단순경비율 못 씀 → 장부 신고 의무</li>
        <li><strong>의료비·기부금·연금저축</strong> 챙기면 환급액 더 늘어남 (특히 연금저축은 세액공제까지)</li>
        <li>배우자·부모 부양가족 등록하면 인당 <strong>150만원씩</strong> 추가 공제</li>
        <li>3년 안에 신고 안 하면 <strong>환급권 사라짐</strong>. 아까운 줄 알기</li>
        <li>5월 31일 넘기면 가산세 붙음. 무조건 5월에 끝내기</li>
      </ul>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          3.3%는 미리 떼간 보증금 같은 거. 5월에 종소세 신고하면 보통 50~70% 돌려받음. 홈택스 모두채움 신고서로 5분이면 끝남. 귀찮다고 안 하면 그냥 국세청한테 기부하는 거니까 무조건 신고하셈.
        </p>
      </div>
    </GuidePage>
  );
}
