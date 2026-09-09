import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { ageGroups } from "@/entities/citizen/model/age-groups";
import { citizen } from "@/entities/citizen/model/mock";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";

const activeCitizen = citizen.filter((c) => c.status === "Активный").length;
const inactiveCitizen = citizen.filter((c) => c.status === "Неактивный").length;
const pendingCitizen = citizen.filter(
  (c) => c.status === "На рассмотрении",
).length;

const chartData = [
  {
    status: "Активный",
    count: activeCitizen,
    fill: "var(--color-inactive)",
  },
  {
    status: "Неактивный",
    count: inactiveCitizen,
    fill: "var(--color-active)",
  },
  {
    status: "На рассмотрении",
    count: pendingCitizen,
    fill: "var(--color-pending)",
  },
];

const chartConfigDonut = {
  active: {
    label: "Активный",
    color: "var(--chart-1)",
  },
  inactive: {
    label: "Неактивный",
    color: "var(--chart-2)",
  },
  pending: {
    label: "На рассмотрении",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

citizen.forEach((c) => {
  const age = new Date().getFullYear() - new Date(c.birthDay).getFullYear();
  if (age <= 25) ageGroups[0].count++;
  else if (age <= 35) ageGroups[1].count++;
  else if (age <= 45) ageGroups[2].count++;
  else if (age <= 55) ageGroups[3].count++;
  else if (age <= 65) ageGroups[4].count++;
  else ageGroups[5].count++;
});

const chartConfig = {
  count: {
    label: "Количество",
  },
} satisfies ChartConfig;

export function ChartCard() {
  return (
    <div className="flex grid-cols-2 w-full justify-between">
      <Card className="w-4/5">
        <CardHeader>
          <CardTitle>Возраст граждан</CardTitle>
          <CardDescription>Август - сентбярь 2026</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart accessibilityLayer data={ageGroups}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="group"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
                tick={{ fontSize: 11 }}
              />
              <ChartTooltip
                cursor={{ fill: "rgba(255,255,255,0.95)" }}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar dataKey="count" fill="var(--chart-1)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
            Статистика возраста граждан <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Показано общее количество посетителей за последние 6 месяцев
          </div>
        </CardFooter>
      </Card>

      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Статистика статуса граждан</CardTitle>
          <CardDescription>Август - сентбярь 2026</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfigDonut}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="status"
                innerRadius={60}
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            Активность граждан <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Статиистика за последние 6 месяцев
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
