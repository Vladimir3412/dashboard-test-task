import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Providers = () => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </TooltipProvider>
  );
};
