import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/widgets/sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 ">
        <Outlet />
      </main>
      <Toaster
        theme="dark"
        toastOptions={{
          className: "bg-card! text-foreground! border!",
        }}
      />
    </SidebarProvider>
  );
};
