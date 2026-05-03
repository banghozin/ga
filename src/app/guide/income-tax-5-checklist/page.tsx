import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("income-tax-5-checklist")!;

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
        매년 5월 31일 밤 11시 30분쯤 되면 후회하는 사람 꼭 있음. "아 그거 챙겼어야 했는데..." 신고 끝났는데 빠뜨린 거 발견하면 진짜 속 쓰림.
      </p>

      <p>
        그래서 미리 정리해줄게. <strong>5월 종소세 신고할 때 절대 빠뜨리면 안 되는 5가지.</strong>
      </p>

      <h2>1. 인적공제 — 부양가족 다 챙겼나</h2>

      <p>
        본인 + 부양가족 1명당 <strong>150만원씩</strong> 자동 공제. 4인 가족이면 600만원. 추가 공제까지 합치면 더 큼.
      </p>

      <h3>흔히 빠뜨리는 케이스</h3>
      <ul>
        <li>60세 이상 부모님 (소득 100만원 이하면 등록 가능)</li>
        <li>대학생 자녀 (만 20세 이하)</li>
        <li>장애인 등록한 가족 (장애인공제 200만원 추가)</li>
        <li>70세 이상 가족 (경로우대공제 100만원 추가)</li>
      </ul>

      <p>
        자세한 내용은 <a href="/guide/dependent-deduction">부양가족 등록 가이드</a> 참고.
      </p>

      <h2>2. 의료비 세액공제 — 안경·임플란트까지</h2>

      <p>
        한 해 의료비가 총급여 3% 넘으면 그 초과분의 15%를 세금에서 직접 차감.
      </p>

      <h3>특히 잘 빠뜨리는 항목</h3>
      <ul>
        <li><strong>안경·콘택트렌즈</strong> — 1인 50만원 한도. 영수증 직접 챙겨야 함</li>
        <li><strong>치과 임플란트</strong> — 미용 아닌 치료 목적이면 OK</li>
        <li><strong>산후조리원</strong> — 출산일로부터 60일 내 200만원 한도</li>
        <li><strong>난임 시술비</strong> — 30% 공제 (한도 없음)</li>
        <li><strong>가족 의료비</strong> — 부양가족 의료비도 합산</li>
      </ul>

      <p>
        자세한 내용은 <a href="/guide/medical-expense-deduction">의료비 세액공제 가이드</a> 참고.
      </p>

      <h2>3. 신용카드 소득공제</h2>

      <p>
        총급여 25% 초과분에 대해 결제수단별 공제. 신용 15%, 체크 30%, 전통시장 40%.
      </p>

      <h3>꼭 체크할 것</h3>
      <ul>
        <li><strong>가족 카드도 합산</strong> — 배우자·자녀 카드 다 합쳐서</li>
        <li><strong>전통시장·대중교통은 별도 한도</strong></li>
        <li><strong>도서·공연·박물관</strong> — 총급여 7천 이하면 30% 공제</li>
        <li><strong>현금영수증 누락</strong> — 핸드폰 번호로 자동 발급 등록 안 했으면 본인이 추가</li>
      </ul>

      <h2>4. 연금저축 + IRP 세액공제</h2>

      <p>
        절세 끝판왕. 연 900만원까지 16.5% 환급. 이거 안 한 사람 손해 큼.
      </p>

      <h3>5월에 챙길 것</h3>
      <ul>
        <li>증권사·은행에서 자동 자료 제출. 홈택스에서 자동 조회됨</li>
        <li>2025년 12월에 한꺼번에 넣은 거도 다 인정</li>
        <li>여러 회사 분산 가입했으면 합산해서 한도 안 넘는지 확인</li>
        <li>총급여 5,500만 이하면 16.5%, 초과면 13.2% 적용</li>
      </ul>

      <p>
        지금부터 시작해도 늦지 않음. 12월까지 900만 채우면 다음 해 5월에 환급. 자세한 건 <a href="/guide/pension-irp-tax-credit">연금저축 가이드</a>.
      </p>

      <h2>5. 기납부세액 — 미리 떼간 거 빠뜨리지 말기</h2>

      <p>
        프리랜서면 거래처가 미리 떼간 <strong>3.3% 원천징수액</strong>이 있음. 이게 기납부세액이고, 종소세 계산할 때 차감됨. 빠뜨리면 환급 못 받음.
      </p>

      <h3>다 챙겼는지 확인 방법</h3>
      <ul>
        <li>홈택스 → "지급명세서 등 제출내역" 메뉴</li>
        <li>본인이 받은 모든 사업소득·기타소득 + 원천징수액 자동 조회</li>
        <li>거래처가 신고 안 한 게 있으면 표시 안 됨 → 본인이 영수증으로 추가</li>
      </ul>

      <h3>모두채움 신고서</h3>
      <p>
        프리랜서 대부분은 <strong>모두채움 신고서</strong>로 자동 입력됨. 검토만 하면 됨. 일반신고로 가면 본인이 직접 입력.
      </p>

      <h2>보너스 — 그 외 잘 챙기면 좋은 것들</h2>

      <ul>
        <li><strong>교육비</strong> — 본인 대학원, 자녀 학원·유치원, 영유아 보육비</li>
        <li><strong>기부금</strong> — 종교단체·NPO·정치자금. 영수증 발급 받기</li>
        <li><strong>월세 세액공제</strong> — 무주택 + 총급여 8천 이하 → 월세의 17% 환급</li>
        <li><strong>주택청약저축</strong> — 무주택 + 총급여 7천 이하 → 연 240만 한도, 40% 공제</li>
        <li><strong>중소기업 청년 소득세 감면</strong> — 만 34세 이하 + 중소기업 → 5년간 90% 감면</li>
      </ul>

      <h2>최종 체크리스트</h2>

      <div className="callout">
        <div className="callout-title">5월 신고 제출 직전 한 번 더 확인</div>
        <ol>
          <li>부양가족 다 등록했나? (특히 60세 이상 부모)</li>
          <li>의료비 자동 조회 + 안경 영수증 추가했나?</li>
          <li>신용카드 + 체크카드 + 현금영수증 다 반영됐나?</li>
          <li>연금저축·IRP 적립액 인정됐나?</li>
          <li>원천징수액(기납부세액) 다 들어갔나?</li>
          <li>월세·기부금·교육비도 봤나?</li>
        </ol>
      </div>

      <h2>본인 환급액 미리 가늠</h2>

      <p>
        <a href="/income-tax">종소세 계산기</a>에 연봉·사업소득·부양가족 입력해서 추정값 보고, 거기서 위 5가지 항목별로 추가 공제 들어가면 환급액이 어떻게 변하는지 직접 시뮬해볼 수 있음.
      </p>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          5월 신고 5대 체크: ① 부양가족 ② 의료비 ③ 신용카드 ④ 연금저축 ⑤ 기납부세액. 이 5개만 잘 챙겨도 환급액 수십만원 차이남. 모두채움 신고서로 시작해서 본인이 빠진 거 추가하는 게 베스트.
        </p>
      </div>
    </GuidePage>
  );
}
