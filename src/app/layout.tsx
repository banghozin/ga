import type { Metadata, Viewport } from "next";
import { Gowun_Batang, IBM_Plex_Sans_KR, IBM_Plex_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const plexSansKr = IBM_Plex_Sans_KR({
  variable: "--font-ibm-plex-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "국세청 회피하기 — 사업자 세금 통합 시뮬레이터",
    template: "%s | 국세청 회피하기",
  },
  description:
    "프리랜서 3.3% vs 사업자등록, 간이과세 vs 일반과세, 종소세·부가세·4대보험까지 한 번에 계산하는 자영업자·프리랜서용 무료 세금 시뮬레이터. 참고용입니다 — 정확한 신고는 세무사와 상의하세요.",
  keywords: [
    "프리랜서 3.3",
    "사업자등록 손익분기점",
    "간이과세 일반과세 비교",
    "종합소득세 계산",
    "부가가치세 계산기",
    "자영업 세금",
    "프리랜서 세금",
  ],
  openGraph: {
    title: "국세청 회피하기",
    description: "프리랜서 vs 사업자등록, 한 번에 계산.",
    type: "website",
    locale: "ko_KR",
    siteName: "국세청 회피하기",
  },
  twitter: {
    card: "summary_large_image",
    title: "국세청 회피하기",
    description: "프리랜서 vs 사업자등록, 한 번에 계산.",
  },
  verification: {
    google: "WzJU2wV95TwoMPH_RPUQ8Lu_fZWKp3XodCLwkotzR8I",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3ede0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${plexSansKr.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
