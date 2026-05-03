import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "국세청 회피하기는 사용자의 개인정보를 수집하지 않으며, 모든 계산은 브라우저 내에서 처리됩니다. Google Analytics 및 광고 쿠키 사용 정책을 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="개인정보처리방침"
      subtitle="본 사이트는 사용자가 입력하는 세무 시뮬레이션 값을 서버로 전송하거나 저장하지 않습니다. 모든 계산은 사용자의 브라우저 안에서만 이루어집니다."
      lastUpdated="2026년 5월 3일"
    >
      <h2>1. 수집하는 개인정보 항목</h2>
      <p>
        국세청 회피하기(이하 &ldquo;사이트&rdquo;)는 회원가입 절차 없이 운영되며, 이용자로부터 직접 개인정보(이름, 주민등록번호, 연락처 등)를 수집하지 않습니다. 단, 사이트 이용 과정에서 다음과 같은 정보가 자동으로 생성되어 수집될 수 있습니다.
      </p>
      <ul>
        <li>접속 IP, 브라우저 종류·버전, OS, 접속 일시</li>
        <li>방문한 페이지 경로, 체류 시간, 유입 경로</li>
        <li>쿠키 및 유사 식별자</li>
      </ul>
      <p>
        세금 시뮬레이션 입력값(매출, 경비율, 부양가족 수 등)은 <strong>이용자의 브라우저 안에서만 처리</strong>되며, 사이트 운영자의 서버로 전송되거나 저장되지 않습니다.
      </p>

      <h2>2. 수집·이용 목적</h2>
      <ul>
        <li>서비스 품질 개선 및 오류 분석</li>
        <li>방문자 통계 분석 및 콘텐츠 개선</li>
        <li>비정상 접근·악용 방지를 위한 보안 모니터링</li>
      </ul>

      <h2>3. 쿠키의 사용</h2>
      <p>
        사이트는 사용자 환경 설정 저장 및 방문자 분석을 위해 쿠키(Cookie)를 사용할 수 있습니다. 사용자는 브라우저 설정에서 쿠키 저장을 거부할 수 있으며, 거부 시 일부 서비스 이용에 제한이 있을 수 있습니다.
      </p>

      <h2>4. 제3자 서비스 이용 및 개인정보 처리 위탁</h2>
      <p>
        사이트는 안정적 운영과 통계 분석을 위해 다음 외부 서비스를 이용할 수 있습니다.
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — 호스팅 및 콘텐츠 전송. 접속 로그 처리.{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer noopener">
            Vercel 개인정보처리방침
          </a>
        </li>
        <li>
          <strong>Google LLC (Google Analytics, Google AdSense)</strong> — 방문자 통계 및 광고. 익명화된 사용 데이터를 수집할 수 있습니다.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">
            Google 개인정보처리방침
          </a>
        </li>
      </ul>
      <p>
        Google AdSense를 비롯한 제3자 광고가 표시되는 경우, 해당 광고 제공자가 쿠키를 사용하여 사용자의 관심사 기반 광고를 제공할 수 있습니다. 사용자는{" "}
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener">
          Google 광고 설정
        </a>
        에서 맞춤형 광고를 거부할 수 있습니다.
      </p>

      <h2>5. 개인정보의 보유 및 이용 기간</h2>
      <p>
        자동 수집되는 접속 로그는 통신비밀보호법에 따라 최대 3개월간 보관 후 파기됩니다. Google Analytics 등 외부 서비스가 보관하는 정보는 해당 서비스 정책에 따릅니다.
      </p>

      <h2>6. 정보주체의 권리</h2>
      <p>
        이용자는 언제든지 본인의 개인정보 처리 현황에 대해 열람·정정·삭제·처리정지를 요구할 수 있습니다. 다만, 사이트 자체는 이용자의 개인정보를 직접 보관하지 않으므로, Google 등 제3자 서비스가 수집한 정보에 대해서는 해당 서비스의 정책에 따라 권리를 행사하셔야 합니다.
      </p>

      <h2>7. 개인정보의 안전성 확보 조치</h2>
      <ul>
        <li>HTTPS(SSL) 통신 암호화 적용</li>
        <li>접근 권한 최소화 및 정기 점검</li>
        <li>개인정보가 직접 수집·저장되지 않는 클라이언트 사이드 처리 구조</li>
      </ul>

      <h2>8. 개인정보 보호책임자</h2>
      <p>
        사이트는 개인정보 처리에 관한 문의·불만 처리 등을 위해 다음과 같이 개인정보 보호책임자를 지정하고 있습니다.
      </p>
      <ul>
        <li>책임자: 국세청 회피하기 운영자</li>
        <li>문의: 사이트 내 별도 페이지를 통해 안내</li>
      </ul>

      <h2>9. 정책 변경</h2>
      <p>
        본 방침은 법령·서비스의 변경 사항을 반영하기 위해 사전 공지 후 변경될 수 있습니다. 변경 시 변경일자와 변경 내용을 본 페이지에 공지합니다.
      </p>
    </LegalPage>
  );
}
