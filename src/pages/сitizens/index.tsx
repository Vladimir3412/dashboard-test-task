import { sidebarItems } from "@/shared/config";
import { PageLayout } from "@/widgets/layout";
import Citizens from "@/widgets/сitizens/index";
import { useLocation } from "react-router-dom";

const CitizensPage = () => {
  const { pathname } = useLocation();
  const title =
    sidebarItems.find((item) => item.href === pathname)?.title ?? "Страница";

  return (
    <PageLayout title={title}>
      <Citizens />
    </PageLayout>
  );
};

export default CitizensPage;
