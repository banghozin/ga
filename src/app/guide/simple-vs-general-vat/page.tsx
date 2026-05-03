import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("simple-vs-general-vat")!;

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
        사업자등록 하러 갔는데 직원이 묻는다. "간이과세자로 하실래요, 일반과세자로 하실래요?" 멘붕. 둘이 뭔 차이?
      </p>

      <p>
        결론부터 말하면 <strong>매출이 작으면 무조건 간이, 매출이 크거나 매입이 많으면 일반</strong>이 유리함. 근데 함정도 있음. 자세히 봐줄게.
      </p>

      <h2>간이과세자란?</h2>

      <p>
        쉽게 말해 <strong>"세금 적게 떼는 대신 환급도 못 받는" 사장님 모드.</strong>
      </p>

      <ul>
        <li>연 매출 <strong>1억 400만원 미만</strong>일 때만 가능 (2024년부터 이 기준)</li>
        <li>부가세를 매출의 1.5~4% 정도만 냄 (업종별 부가가치율 다름)</li>
        <li>매출 4800만원 미만이면 <strong>부가세 자체 면제</strong></li>
        <li>매입 부가세 환급 못 받음 (받아도 굉장히 적음)</li>
        <li>세금계산서 발행 못 함 (영수증·간이영수증만 가능)</li>
      </ul>

      <h2>일반과세자란?</h2>

      <p>
        진짜배기 사업자. 부가세 풀로 떼지만 다 환급도 받음.
      </p>

      <ul>
        <li>매출 규모 무관, 누구나 등록 가능</li>
        <li>부가세는 매출의 10% (그대로)</li>
        <li>매입 부가세 100% 공제 가능 → 매입 많으면 오히려 환급받음</li>
        <li>세금계산서 발행 가능 (B2B 거래 필수)</li>
      </ul>

      <h2>매출 규모별 진짜 어느 쪽이 이득?</h2>

      <h3>매출 4800만원 미만</h3>
      <p>
        간이과세 압승. <strong>부가세 자체가 면제</strong>됨. 부가세 신고도 그냥 영(0)으로 끝. 일반과세였으면 매출의 10%를 내야 했을 텐데.
      </p>

      <h3>매출 4800만~1억 400만원</h3>
      <p>
        보통 <strong>간이과세가 유리</strong>. 부가세 부담이 매출의 1.5~4% 수준. 일반과세는 매입세액 빼고도 보통 6~8% 부담.
      </p>
      <p>
        근데 <strong>매입이 매출의 70% 이상이면 일반과세가 유리할 수도</strong> 있음. 매입세액공제로 환급받는 게 더 큼.
      </p>

      <h3>매출 1억 400만원 이상</h3>
      <p>
        선택권 없음. <strong>일반과세 의무.</strong> 간이과세자였어도 다음 해부터 자동으로 일반과세로 전환됨.
      </p>

      <h2>간이과세 함정 3가지</h2>

      <h3>1. 환급 거의 못 받음</h3>
      <p>
        가게 차리느라 인테리어 5천만원 쓰면 매입세액 500만원 발생. 일반과세였으면 다 환급받지만 간이는 그 일부만 받음 (업종별 부가가치율 비례).
      </p>

      <h3>2. 거래처가 싫어할 수 있음</h3>
      <p>
        B2B로 일하면 거래처가 세금계산서 받아야 자기들도 매입세액공제를 받음. 근데 간이과세자는 세금계산서 발행 못함. 거래처 입장에선 "그러면 우리 세금 더 내게 되니까 안 거래" 할 수 있음.
      </p>

      <h3>3. 1억 400만 넘으면 강제 전환</h3>
      <p>
        한 해에 매출 1억 400만 넘기면 다음 해부터 일반과세. 그동안 못 받았던 환급은 영원히 안 옴.
      </p>

      <h2>전환 시점 — 능동적으로 바꿔도 됨</h2>

      <p>
        간이 → 일반은 본인이 신청하면 언제든 가능. 일반 → 간이는 매출 1억 400만 미만이 된 후에만 가능 (까다로움).
      </p>

      <p>
        장사가 잘 돼서 곧 1억 넘을 거 같다 → <strong>지금 일반과세로 전환</strong>해서 인테리어·장비 매입세액 환급받는 게 합리적.
      </p>

      <h2>판단 가이드</h2>

      <ul>
        <li>매출 5천 미만 + 매입 거의 없음 → <strong>간이</strong></li>
        <li>매출 1억 미만 + 매입 적음 → <strong>간이</strong></li>
        <li>매출 1억 미만 + 매입 매출의 70% 이상 → <strong>일반 검토</strong></li>
        <li>B2B 거래 위주 → <strong>일반</strong> (세금계산서 필수)</li>
        <li>매출 1억 400만 넘음 → 선택권 없음, <strong>일반</strong></li>
        <li>창업 초기 인테리어·장비 많이 쓸 거 → <strong>일반</strong> (환급 노림)</li>
      </ul>

      <p>
        본인 매출·업종 입력해서 둘 다 비교하고 싶으면 <a href="/">메인 손익분기점 계산기</a>에서 한 번에 볼 수 있음. 같은 매출에서 간이·일반 실수령 차이가 얼마나 나는지 그래프로 나옴.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          매출 4800만 미만이면 간이 압승, 1억 넘으면 일반 강제. 그 사이는 매입 비율로 결정. 매입 70% 이상이면 일반이 유리, 그 이하면 간이. B2B면 세금계산서 때문에 무조건 일반.
        </p>
      </div>
    </GuidePage>
  );
}
