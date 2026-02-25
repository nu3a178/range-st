import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { GiOrange } from "react-icons/gi";

export function HomeSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center items-center">
          {"Range.St"} <GiOrange />
        </div>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
