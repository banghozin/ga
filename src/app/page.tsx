import { SiteNav } from "@/components/nav";
import { DesktopView } from "@/components/views/desktop-view";
import { MobileView } from "@/components/views/mobile-view";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNav current="home" />
      <main className="flex-1">
        <DesktopView />
        <MobileView />
      </main>
    </div>
  );
}
