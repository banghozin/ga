import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("pension-irp-tax-credit")!;

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
        솔직히 절세 끝판왕이 뭐냐? <strong>연금저축 + IRP</strong>임. 1년에 900만원 넣으면 <strong>148만 5천원</strong> 환급. 어떤 적금·예금 이자도 못 따라옴.
      </p>

      <p>
        근데 단점도 있음. 55세까지 못 빼는 거. 양날의 검이라 자기 상황 보고 결정해야 함.
      </p>

      <h2>세액공제 vs 소득공제, 다름</h2>

      <p>먼저 용어 짚고 가자.</p>

      <ul>
        <li><strong>소득공제</strong> — 소득을 줄여주는 거. 한계세율 따라 절세 효과 다름</li>
        <li><strong>세액공제</strong> — 세금에서 직접 빼주는 거. 누구나 같은 % 환급</li>
      </ul>

      <p>
        연금저축·IRP는 <strong>세액공제</strong>. 소득 적든 많든 같은 비율로 환급. 사실상 적금 + 보너스.
      </p>

      <h2>세액공제 한도와 환급률</h2>

      <h3>연금저축 단독</h3>
      <ul>
        <li>한도: 연 <strong>600만원</strong></li>
        <li>총급여 5,500만원 이하 → <strong>16.5%</strong> 세액공제</li>
        <li>총급여 5,500만원 초과 → <strong>13.2%</strong> 세액공제</li>
      </ul>

      <h3>IRP까지 합쳐서</h3>
      <ul>
        <li>합산 한도: 연 <strong>900만원</strong> (연금저축 600 + IRP 300)</li>
        <li>또는 IRP만으로 900만원 다 채우는 것도 가능</li>
        <li>세액공제율은 위와 동일</li>
      </ul>

      <div className="callout">
        <div className="callout-title">예시 ㆍ 총급여 4,500만원 직장인</div>
        <ul>
          <li>월 75만원씩 연금저축+IRP에 적립 → 연 900만원</li>
          <li>세액공제: 900만 × 16.5% = <strong>148만 5천원</strong> 환급</li>
          <li>실질 수익률만 16.5% — 시중 어떤 상품도 못 따라옴</li>
        </ul>
      </div>

      <h2>연금저축이랑 IRP, 뭐가 다름?</h2>

      <h3>연금저축</h3>
      <ul>
        <li>증권사·은행·보험사에서 가입</li>
        <li>본인이 자유롭게 운용 (펀드·ETF 등)</li>
        <li>가입 자격 누구나</li>
        <li>중도 인출 가능 (단 세제혜택 토해냄)</li>
      </ul>

      <h3>IRP (개인형퇴직연금)</h3>
      <ul>
        <li>퇴직금 받을 때 자동 가입되는 곳</li>
        <li>본인이 자율 운용 가능 (예금·펀드·ETF)</li>
        <li>안전자산 30% 이상 의무</li>
        <li>중도 인출 어려움 (특정 사유 외엔 거의 불가)</li>
      </ul>

      <p>
        둘 다 <strong>증권사 IRP</strong>로 가입하는 게 보통. 수수료 낮고 ETF로 운용 가능. 미래에셋, 삼성, 키움, 한투, 토스 등.
      </p>

      <h2>단점 — 55세까지 못 뺌</h2>

      <p>
        이게 핵심 단점. 진짜로 <strong>55세 전에 빼면 페널티</strong>가 있음.
      </p>

      <ul>
        <li>중도 해지 시 그동안 받은 세액공제 다시 토해냄</li>
        <li>운용 수익에는 기타소득세 16.5% 또는 연금소득세 부과</li>
        <li>특별 사유(천재지변·중대질병·해외이주 등)만 제외</li>
      </ul>

      <p>
        즉 <strong>"평생 안 쓸 돈"</strong>으로만 넣어야 함. 결혼자금·집 사는 데 쓸 돈 넣으면 안 됨.
      </p>

      <h2>그래도 무조건 추천하는 이유</h2>

      <p>
        잘 생각해보면 손해 볼 일 거의 없음.
      </p>

      <ul>
        <li>16.5% 환급 = <strong>1년만에 무위험 수익률 16.5%</strong></li>
        <li>그 안에서 ETF로 추가 수익까지 가능</li>
        <li>55세에 받으면 연금소득세 3.3~5.5%로 낮음 (분리과세 가능)</li>
        <li>어차피 노후 준비는 해야 하니까 강제로 모으는 효과</li>
      </ul>

      <h2>최적 적립 전략</h2>

      <h3>여유 자금 적은 경우</h3>
      <ul>
        <li>연금저축 600만 한도부터 채우기</li>
        <li>여유 있으면 IRP 300만 추가</li>
      </ul>

      <h3>월 단위로 분산 추천</h3>
      <ul>
        <li>900만원을 월 75만원씩 자동이체</li>
        <li>한 번에 넣는 것보다 분할이 평균 매수 단가 좋음</li>
      </ul>

      <h3>운용은 ETF 추천</h3>
      <ul>
        <li>S&P500, 나스닥100, 코스피200 등 패시브 ETF</li>
        <li>연금저축은 국내 상장 ETF 거래 가능</li>
        <li>IRP는 안전자산 30% 의무 (예금·채권 ETF 등)</li>
      </ul>

      <h2>주의할 점</h2>

      <ul>
        <li><strong>한 해에 한도 초과 적립 가능</strong> — 단 그 해 한도(900만)까지만 세액공제, 초과분은 다음 해 이월</li>
        <li><strong>연말정산·종소세 신고 시 자동 반영</strong> — 증권사가 자료 제출함</li>
        <li><strong>퇴직금 IRP로 받으면 별도</strong> — 세액공제 한도와 무관</li>
        <li><strong>중복 가입 가능</strong> — 여러 증권사에 분산해도 OK, 합산 한도만 있음</li>
      </ul>

      <h2>본인 환급액 추정</h2>

      <p>
        <a href="/income-tax">종소세 계산기</a>에 연봉 넣고, 연금저축·IRP 적립액을 별도 공제로 빼서 비교해볼 수 있음. 한계세율 24% 구간이면 연금저축 600만으로 약 99만원 환급, 35% 구간이면 약 124만원.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          연금저축 600만 + IRP 300만 = 합산 900만 한도. 16.5% 세액공제로 연 148만원 환급. 단점은 55세까지 못 빼는 거. 어차피 노후 준비할 거면 무조건 채우는 게 정답. 증권사에서 ETF로 운용 추천.
        </p>
      </div>
    </GuidePage>
  );
}
