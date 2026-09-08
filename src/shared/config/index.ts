import { LayoutDashboard, Users } from "lucide-react";

export const ROUTES = {
  DASHBOARD: "/",
  CITIZENS: "/citizens",
};

export const sidebarItems = [
  {
    title: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Картотека граждан",
    href: ROUTES.CITIZENS,
    icon: Users,
  },
];
