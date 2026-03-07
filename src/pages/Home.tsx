import { HomeSidebar } from "@/components/HomeSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { DrawerProvider, useDrawerContext } from "@/contexts/DrawerContext";
import { MapProvider, useMapContext } from "@/contexts/MapContext";
import { MapViewer } from "@/layout/MapViewer";
import { FaHouseUser } from "react-icons/fa";

const HomeContent = () => {
  const { isMobile, openMobile } = useSidebar();
  const { openDrawer, setOpenDrawer } = useDrawerContext();
  const { estateList, setSelectedEstate, setMapView } = useMapContext();
  return (
    <div
      className={
        isMobile
          ? "relative w-[100dvw] h-[100dvh]"
          : "flex w-[100dvw] h-[100dvh]"
      }
    >
      <div className={isMobile ? "absolute left-0 z-[1000]" : ""}>
        <HomeSidebar />

        {isMobile && !openMobile && (
          <SidebarTrigger className="bg-green-800 text-white">
            <FaHouseUser />
            検索する
          </SidebarTrigger>
        )}
      </div>
      <div className={isMobile ? "absolute inset-0" : "flex-1 min-w-0"}>
        <MapViewer />
        {!openDrawer && estateList.length > 0 && (
          <Button
            onClick={() => setOpenDrawer(true)}
            className="absolute bottom-4 left-1/2 "
          >
            検索結果
          </Button>
        )}

        <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
          <DrawerContent className="flex flex-col justify-end">
            <div className="flex flex-row gap-2 overflow-x-auto p-4">
              {estateList.map((estate) => (
                <Card
                  className="w-40 shrink-0 hover:shadow-lg hover:scale-105 transition-transform"
                  onClick={() => {
                    setSelectedEstate(estate);
                    setMapView({
                      latitude: estate.latitude,
                      longitude: estate.longitude,
                      zoom: 18,
                    });
                  }}
                  key={estate.name}
                >
                  <p>{estate.name}</p>
                  <p className="text-sm text-gray-500">{estate.address}</p>
                  <img src="https://picsum.photos/300/300" />
                  <p>{`家賃:¥${estate.rent_price?.toLocaleString()}`}</p>
                </Card>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <MapProvider>
      <SidebarProvider>
        <DrawerProvider>
          <HomeContent />
        </DrawerProvider>
      </SidebarProvider>
    </MapProvider>
  );
};
