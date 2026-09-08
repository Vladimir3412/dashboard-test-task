import { PageLayout } from "@/widgets/layout";
import { useLocation } from "react-router-dom";
import { sidebarItems } from "@/shared/config/index";
const DashboardPage = () => {
  const { pathname } = useLocation();
  const title =
    sidebarItems.find((item) => item.href === pathname)?.title ?? "Страница";

  return (
    <PageLayout title={title}>
      <div>сама страница</div>
    </PageLayout>
  );
};

export default DashboardPage;
