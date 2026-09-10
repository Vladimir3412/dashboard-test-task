import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/app/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard";
import CitizensPage from "@/pages/сitizens";
import CitizenDetailPage from "@/pages/citizen-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "citizens", element: <CitizensPage /> },
      { path: "citizens/:id", element: <CitizenDetailPage /> },
    ],
  },
]);
