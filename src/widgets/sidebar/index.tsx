import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Logo } from "@/shared/assets/logo";
import { sidebarItems } from "@/shared/config";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AppSidebar = () => {
  const { pathname } = useLocation();
  return (
    <Sidebar
      className="bg-sidebar-background text-sidebar-foreground border-sidebar-border "
      collapsible="icon"
    >
      <SidebarHeader className="text-sidebar-foreground border-b border-sidebar-border px-4 py-3 h-12">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="gap-2 flex flex-col">
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>

          {sidebarItems.map((item) => (
            <SidebarMenuItem
              key={item.href}
              className="group-data-[collapsible=icon]:p-2"
            >
              <SidebarMenuButton
                tooltip={item.title}
                className={cn(
                  " !text-sidebar-foreground group-data-[collapsible=icon]:justify-center gap-2",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "!bg-sidebar-primary "
                    : "hover:bg-sidebar-border!",
                )}
                size="lg"
                render={<Link to={item.href} />}
              >
                <item.icon className="w-7 h-7 shrink-0 " />
                <span className="group-data-[collapsible=icon]:hidden">
                  {item.title}
                </span>
                <ChevronRight className="w-3 h-3 opacity-50 ml-auto group-data-[collapsible=icon]:hidden " />
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-primary " />
          <span className="text-sm group-data-[collapsible=icon]:hidden">
            Администратор
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
