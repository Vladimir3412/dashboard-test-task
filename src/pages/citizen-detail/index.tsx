import { citizen } from "@/entities/citizen/model";
import CitizenDetail from "@/widgets/citizen-user-detail";
import { PageLayout } from "@/widgets/layout";
import { useParams } from "react-router-dom";

const CitizenDetailPage = () => {
  const { id } = useParams();

  const user = citizen.find((c) => c.id === id);
  const title = user ? `${user.firstName} ${user.lastName}` : "Гражданин";

  return (
    <PageLayout title={title}>
      {user ? <CitizenDetail user={user} /> : <p>Гражданин не найден</p>}
    </PageLayout>
  );
};

export default CitizenDetailPage;
