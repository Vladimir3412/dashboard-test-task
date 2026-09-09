import { citizen } from "@/entities/citizen/model/mock";
import CitizenTable from "@/entities/citizen/UI/citizen-table";
import { ChartCard } from "@/shared/UI/chart-card";
import { StatsCard } from "@/shared/UI/stats-card";
import { Users } from "lucide-react";

const Dashboard = () => {
  console.log(citizen);
  const totalCount = citizen.length;
  const activeCitizen = citizen.filter((c) => c.status === "Активный").length;

  const newThisMonth = citizen.filter((c) => {
    const date = new Date(c.createdAt);
    const nowDate = new Date();
    return (
      date.getMonth() === nowDate.getMonth() &&
      date.getFullYear() === nowDate.getFullYear()
    );
  }).length;

  const avgAge = Math.round(
    citizen.reduce((sum, c) => {
      const age = new Date().getFullYear() - new Date(c.birthDay).getFullYear();
      return sum + age;
    }, 0) / citizen.length,
  );

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-3 mb-8 ">
        <StatsCard
          title={totalCount}
          description="Всего"
          icon={Users}
          trend="up"
          trendValue="+17%"
          hint="Всего граждан"
          color="blue"
        />

        <StatsCard
          title={activeCitizen}
          description="Активных"
          icon={Users}
          trend="up"
          trendValue="+32%"
          hint="Количество активных граждан"
          color="green"
        />
        <StatsCard
          title={newThisMonth}
          description="Новые"
          icon={Users}
          trend="down"
          trendValue="-9%"
          hint="Количество новых граждан за месяц"
          color="orange"
        />
        <StatsCard
          title={avgAge}
          description="Средний возраст"
          icon={Users}
          trend="up"
          trendValue="+3%"
          hint="Средний возраст граждан (мужской и женский)"
          color="purple"
        />
      </div>
      <ChartCard />
      <CitizenTable />
    </div>
  );
};

export default Dashboard;
