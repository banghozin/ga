import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("credit-card-deduction")!;

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
        "신용카드 많이 쓰면 환급 받는다며?" 반은 맞고 반은 틀림. 신용카드 소득공제는 <strong>총급여의 25%를 넘게 쓴 부분만</strong> 공제됨. 즉 어느 정도 한도 넘게 써야 효과 있음.
      </p>

      <p>
        근데 잘만 쓰면 연 100만원 가까이 환급 받을 수 있음. 룰만 알면 됨.
      </p>

      <h2>기본 공식 — 25% 룰</h2>

      <p>
        총급여의 25%까지는 그냥 의무 사용량. 그 초과분만 공제 대상.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 총급여 4,000만원</div>
        <ul>
          <li>의무 사용량: 4,000만 × 25% = 1,000만원</li>
          <li>1,000만원까지 쓴 건 → 공제 0원</li>
          <li>1,000만 초과해서 쓴 부분만 → 공제 가능</li>
          <li>예: 연 1,500만 사용 → 초과분 500만원의 일부가 공제 대상</li>
        </ul>
      </div>

      <h2>결제수단별 공제율 다름</h2>

      <p>
        이게 핵심. 같은 100만원 써도 어떻게 결제하냐에 따라 공제 효과가 다름.
      </p>

      <ul>
        <li><strong>신용카드</strong> — 15%</li>
        <li><strong>체크카드·현금영수증</strong> — 30% (신용카드 2배!)</li>
        <li><strong>전통시장 결제</strong> — 40%</li>
        <li><strong>대중교통 결제</strong> — 40%</li>
        <li><strong>도서·공연·박물관</strong> (총급여 7천 이하) — 30%</li>
      </ul>

      <p>
        절세 관점만 보면 <strong>체크카드·현금영수증이 신용카드보다 2배 유리.</strong>
      </p>

      <h2>한도도 있음</h2>

      <p>총급여별 공제 한도가 다름.</p>

      <ul>
        <li>총급여 7,000만 이하 → 한도 <strong>300만원</strong></li>
        <li>총급여 7,000만 초과 → 한도 <strong>250만원</strong></li>
      </ul>

      <p>
        여기에 전통시장·대중교통·도서·공연 가산은 별도 한도가 있어서 합치면 최대 600만원까지 갈 수 있음.
      </p>

      <h2>최적 사용 전략</h2>

      <h3>1단계 — 의무 사용량 25%까지는 신용카드</h3>
      <p>
        어차피 공제 안 되는 구간이니까 신용카드 혜택(포인트·할인)을 챙기는 게 합리적. 신용카드 혜택이 1~3% 정도면 그게 절세보다 큼.
      </p>

      <h3>2단계 — 25% 넘는 부분은 체크카드·현금영수증</h3>
      <p>
        공제 대상 구간부터는 <strong>체크카드 또는 현금영수증</strong>으로 결제. 공제율 30%로 신용카드 대비 2배.
      </p>

      <h3>3단계 — 의도적으로 전통시장·대중교통 사용</h3>
      <p>
        공제율 40%는 진짜 큼. 마트 갈 거 시장에서 사고, 택시 대신 지하철 타면 자연스럽게 절세.
      </p>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 연 4,000만 직장인 카드 1,500만 씀</div>
        <h3>전략 A: 전부 신용카드</h3>
        <ul>
          <li>의무 1,000만 — 공제 0</li>
          <li>초과 500만 × 15% = 75만</li>
          <li>한계세율 15% 적용 시 → <strong>약 11만원 환급</strong></li>
        </ul>
        <h3>전략 B: 의무는 신용, 초과는 체크</h3>
        <ul>
          <li>의무 1,000만 — 공제 0</li>
          <li>초과 500만 × 30% = 150만</li>
          <li>한계세율 15% 적용 시 → <strong>약 22만원 환급</strong></li>
          <li>2배 차이</li>
        </ul>
      </div>

      <h2>주의할 점</h2>

      <ul>
        <li><strong>의료비·교육비·기부금 결제는 별도 공제</strong> — 이건 신용카드 공제랑 별개. 둘 다 받음</li>
        <li><strong>해외 사용분은 공제 안 됨</strong> — 해외 결제는 의무 사용량에도 안 들어감</li>
        <li><strong>중고차·자동차세·아파트관리비</strong> — 일부 항목은 제외</li>
        <li><strong>자녀·배우자 카드도 합산 가능</strong> — 가족 카드 다 합쳐서 공제</li>
      </ul>

      <h2>확인 방법</h2>

      <p>
        매년 1월 15일경부터 <strong>홈택스 연말정산 간소화 서비스</strong>에서 본인이 카드로 얼마 썼는지 자동 조회. 직장인이면 회사가 알아서 적용함.
      </p>

      <p>
        프리랜서·자영업자도 5월 종소세 신고 때 똑같이 적용 가능. 단, 본인 사업용 결제(매입세액공제 받은 거)는 중복 공제 안 됨.
      </p>

      <h2>현금영수증 발급 진짜 챙기기</h2>

      <p>
        현금 결제할 때 매번 "현금영수증 해주세요" 하는 거 귀찮음. 근데 그게 30% 공제임.
      </p>

      <p>
        <strong>핸드폰 번호 등록</strong>해두면 자동 발급되는 가게 많음. 안 해주면 본인이 직접 홈택스에서 등록 가능. 모바일 결제(카카오페이·삼성페이·네이버페이)도 자동 연결됨.
      </p>

      <h2>본인 환급액 가늠해보기</h2>

      <p>
        대략적인 계산: <strong>(공제 대상액 × 공제율 × 본인 한계세율)</strong> = 환급액. 한계세율 15%면 공제 100만원 = 환급 15만원 정도.
      </p>

      <p>
        본인 종소세에 신용카드 공제까지 반영해보고 싶으면 <a href="/income-tax">종소세 계산기</a>에서 시뮬레이션 가능.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          총급여 25% 넘는 부분만 공제. 신용카드 15%, 체크/현금 30%, 전통시장·대중교통 40%. 25%까지는 신용카드 혜택 챙기고 그 이상은 체크카드로. 카카오페이·삼성페이는 자동 현금영수증 가능.
        </p>
      </div>
    </GuidePage>
  );
}
