import { HomeSidebar } from "@/components/HomeSidebar";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { MapViewer } from "@/layout/MapViewer";
import { useEffect } from "react";

export const Home = () => {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  useEffect(() => {
    if (isMobile) {
      setOpenMobile(true);
    }
  }, [isMobile, setOpenMobile]);
  return (
    <div
      className={
        isMobile ? "relative w-screen h-screen" : "flex w-screen h-screen"
      }
    >
      <div className={isMobile ? "absolute left-0 z-[1000]" : ""}>
        <HomeSidebar />
        {!openMobile && <SidebarTrigger />}
      </div>
      <MapViewer />
    </div>
  );
};
