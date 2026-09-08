import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 ">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
