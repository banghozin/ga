import type { Metadata } from "next";
import { GuidePage } from "@/components/guide-page";
import { getPost } from "@/lib/posts";

const post = getPost("hometax-first-time-guide")!;

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
        홈택스. 처음 들어가면 진짜 어디 눌러야 할지 모르겠음. 메뉴는 100개 같고, 인증서는 멘붕이고, 화면은 2010년대스러움. 정상임. 다 그럼.
      </p>

      <p>
        근데 한 번만 익숙해지면 평생 씀. 처음 진입할 때 잘 모르는 부분만 정리해줄게.
      </p>

      <h2>1단계 ㆍ 회원가입 + 인증</h2>

      <p>
        <a href="https://www.hometax.go.kr" target="_blank" rel="noreferrer noopener">홈택스 (hometax.go.kr)</a> 접속.
      </p>

      <h3>로그인 방식 — 5가지</h3>
      <ul>
        <li><strong>공동인증서 (구 공인인증서)</strong> — 은행에서 발급 받아서 PC에 등록. 옛날 방식</li>
        <li><strong>금융인증서</strong> — 클라우드 저장. PC·모바일 둘 다 가능</li>
        <li><strong>간편인증</strong> — 카카오, 네이버, PASS, 토스, 신한 등. 가장 편함</li>
        <li><strong>아이디/비번</strong> — 단순 조회만 가능. 신고는 X</li>
        <li><strong>홈택스 인증서</strong> — 홈택스에서 직접 발급</li>
      </ul>

      <p>
        처음이면 <strong>간편인증 (카카오 또는 네이버)</strong> 추천. 핸드폰만 있으면 30초 인증 끝.
      </p>

      <h2>2단계 ㆍ 첫 화면에서 길 잃지 않기</h2>

      <p>
        로그인하면 메인 화면에 메뉴가 산더미. 본인 상황에 맞는 거만 보면 됨.
      </p>

      <h3>주요 메뉴 — 자주 쓰는 것</h3>
      <ul>
        <li><strong>신고/납부</strong> — 종소세·부가세·원천세 등 신고. 가장 많이 씀</li>
        <li><strong>전자세금계산서</strong> — 사업자가 세금계산서 발행/수취</li>
        <li><strong>증명·등록·신청</strong> — 사업자등록, 사업자등록증 출력 등</li>
        <li><strong>조회/발급</strong> — 본인 신고 내역, 납부 내역 조회</li>
        <li><strong>My홈택스</strong> — 본인 받은 원천징수, 신고 이력 등</li>
      </ul>

      <h2>3단계 ㆍ 종소세 신고 — 직장인·프리랜서</h2>

      <p>5월에 가장 많이 들어옴.</p>

      <h3>경로</h3>
      <p>
        메인 → <strong>"종합소득세 신고"</strong> 큰 배너 클릭 → <strong>"모두채움 신고서"</strong>
      </p>

      <h3>모두채움 신고서가 뭔데?</h3>
      <p>
        프리랜서·소규모 사업자용. <strong>국세청이 본인 소득·원천징수 내역을 자동으로 채워줌</strong>. 본인이 검토하고 추가할 거만 입력 → 제출.
      </p>

      <ul>
        <li>회사들이 신고한 본인 소득 자동 표시</li>
        <li>원천징수 (3.3% 등) 기납부세액 자동 표시</li>
        <li>인적공제 본인 + 부양가족 추가</li>
        <li>의료비·신용카드·연금저축 등 자동 조회</li>
      </ul>

      <p>
        검토만 잘 하면 5~10분이면 끝남. 부양가족·안경 영수증·기부금 등 자동 안 들어가는 거만 본인이 추가.
      </p>

      <h2>4단계 ㆍ 부가세 신고 — 사업자</h2>

      <h3>경로</h3>
      <p>
        메인 → <strong>"부가가치세 신고"</strong> → 본인 신고 유형 선택 (일반/간이)
      </p>

      <h3>매출·매입 자동 채워짐</h3>
      <p>
        세금계산서·신용카드·현금영수증 다 국세청 데이터 기반으로 자동. 본인은 검토 + 일부 누락분 추가만.
      </p>

      <p>
        자세한 부가세 신고 방법은 <a href="/guide/vat-filing-4-steps">부가세 신고 4단계 가이드</a> 참고.
      </p>

      <h2>5단계 ㆍ 자주 만나는 에러·해결</h2>

      <h3>"인증서가 없습니다" 또는 "보안 프로그램 설치"</h3>
      <ul>
        <li>크롬 사용 추천. 익스플로러는 이제 작동 안 함</li>
        <li>처음 들어가면 보안 프로그램 자동 설치 권유 → 일단 다 설치</li>
        <li>그래도 안 되면 간편인증으로 우회</li>
      </ul>

      <h3>"이전 신고서가 없습니다"</h3>
      <ul>
        <li>처음 신고면 정상</li>
        <li>이전 신고 분 조회는 "조회/발급" → "신고서 조회"</li>
      </ul>

      <h3>"매출 자료가 표시되지 않습니다"</h3>
      <ul>
        <li>거래처가 아직 신고 안 한 경우</li>
        <li>조회 가능 시점: 부가세는 신고 마감 5~7일 전, 종소세는 5월 1일 이후</li>
        <li>안 떠 있으면 본인이 영수증 모아서 직접 입력</li>
      </ul>

      <h3>"제출 후 수정하고 싶어요"</h3>
      <ul>
        <li>법정신고기한(예: 5월 31일) 이전이면 → 그냥 다시 제출 (덮어씀)</li>
        <li>기한 지나면 → "수정신고" 메뉴에서 별도 절차</li>
        <li>수정신고는 일찍 할수록 가산세 감면 큼</li>
      </ul>

      <h2>모바일 홈택스도 가능</h2>

      <p>
        <strong>손택스 앱</strong> 또는 <strong>모바일 웹</strong>에서 거의 모든 기능 가능. 종소세 신고도 모바일로 OK. PC가 없으면 그냥 폰으로 해도 됨.
      </p>

      <ul>
        <li>iOS·Android 둘 다 앱 있음</li>
        <li>간편인증으로 30초 로그인</li>
        <li>모두채움 신고서 모바일에서도 동일하게 작동</li>
      </ul>

      <h2>꿀팁 모음</h2>

      <ul>
        <li><strong>5월 첫째 주는 피하기</strong> — 트래픽 폭주로 느림. 5월 둘째~넷째 주가 가장 쾌적</li>
        <li><strong>23~31일 마감 직전은 더 느림</strong> — 가능하면 중순에</li>
        <li><strong>북마크 해두기</strong> — 자주 쓰는 메뉴는 "자주가는 메뉴" 등록 가능</li>
        <li><strong>전자세금계산서는 한 번에</strong> — 매월 거래처별 묶어서 발행하면 편함</li>
        <li><strong>증명원 출력은 무료</strong> — 사업자등록증·납세증명 다 PDF로 무료 출력</li>
      </ul>

      <h2>도움 안 될 때</h2>

      <ul>
        <li><strong>국세청 콜센터 126</strong> — 평일 9~18시. 무료. 친절함</li>
        <li><strong>국세청 챗봇</strong> — 홈택스 우측 하단. 의외로 잘 답해줌</li>
        <li><strong>국세상담센터 방문</strong> — 가까운 세무서 상담실. 예약 추천</li>
        <li><strong>마을세무사 무료 상담</strong> — 지역마다 무료 세무 상담 시범 운영</li>
      </ul>

      <h2>본인 신고할 세금 미리 추정</h2>

      <p>
        홈택스 들어가기 전에 본인 종소세·부가세 대략 얼마 나올지 미리 보고 싶으면, 우리 사이트의 계산기들 활용:
      </p>
      <ul>
        <li><a href="/income-tax">종합소득세 계산기</a> — 5월 신고용</li>
        <li><a href="/vat">부가세 계산기</a> — 1월·7월 신고용</li>
        <li><a href="/">손익분기 비교</a> — 사업 형태 결정용</li>
      </ul>

      <div className="tldr">
        <div className="tldr-label">━━ 한 줄 요약 ━━</div>
        <p className="!mb-0">
          간편인증(카카오·네이버)으로 로그인 → 종소세는 모두채움 신고서로 5분 → 부가세는 자동 매출·매입 검토. 5월 첫째 주랑 마감 직전은 트래픽으로 느림. 막히면 126 콜센터. 모바일 손택스 앱으로도 다 됨.
        </p>
      </div>
    </GuidePage>
  );
}
