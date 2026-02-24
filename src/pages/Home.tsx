import { HomeSidebar } from "@/components/HomeSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MapViewer } from "@/layout/MapViewer";

export const Home = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <HomeSidebar />
        <MapViewer />
      </div>
    </SidebarProvider>
  );
};
