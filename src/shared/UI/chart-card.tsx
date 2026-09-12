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
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  XAxis,
} from "recharts";
import type { Citizen } from "../mocks/citizen";
import dayjs from "dayjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const activeCitizen = citizen.filter((c) => c.status === "Активный").length;
const inactiveCitizen = citizen.filter((c) => c.status === "Неактивный").length;
const pendingCitizen = citizen.filter(
  (c) => c.status === "На рассмотрении",
).length;

const chartDataDonut = [
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

// citizen.forEach((c) => {
//   const age = new Date().getFullYear() - new Date(c.birthDay).getFullYear();
//   if (age <= 25) ageGroups[0].count++;
//   else if (age <= 35) ageGroups[1].count++;
//   else if (age <= 45) ageGroups[2].count++;
//   else if (age <= 55) ageGroups[3].count++;
//   else if (age <= 65) ageGroups[4].count++;
//   else ageGroups[5].count++;
// });

const chartConfig = {
  count: {
    label: "Количество",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const getFilteredByDays = (citizen: Citizen[], days: number) => {
  // const total = new Date()
  // const nowDay = total.setDate(new Date().getDate() - days);

  // return citizen.filter((c) => c.createdAt >= total)

  const total = dayjs().subtract(days, "day");

  return citizen.filter((c) => dayjs(c.createdAt).isAfter(total));
};

export function ChartCard() {
  const [timeRange, setTimeRange] = useState<
    "6 месяцев" | "3 месяца" | "1 месяц"
  >("3 месяца");
  const rangeToDays: Record<typeof timeRange, number> = {
    "1 месяц": 30,
    "3 месяца": 90,
    "6 месяцев": 180,
  };

  const filteredCitizen = getFilteredByDays(citizen, rangeToDays[timeRange]);
  return (
    <div className="flex grid-cols-2 w-full justify-between ">
      <Card className="w-4/5 pt-0 ">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1">
            <CardTitle>Возраст граждан</CardTitle>
            <CardDescription>Август - сентбярь 2026</CardDescription>
          </div>

          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value) {
                setTimeRange(value);
              }
            }}
          >
            <SelectTrigger
              className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl p-2">
              <SelectItem value="6 месяцев" className="rounded-lg">
                Последние 6 месяцев
              </SelectItem>
              <SelectItem value="3 месяца" className="rounded-lg">
                Последние 3 месяца
              </SelectItem>
              <SelectItem value="1 месяц" className="rounded-lg">
                Последниий месяц
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart accessibilityLayer data={ageGroups}>
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

              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--chart-1)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="count"
                fill="url(#fillDesktop)"
                radius={4}
                type="natural"
                fillOpacity={0.4}
                stroke="var(--chart-1)"
              />
            </AreaChart>
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
                data={chartDataDonut}
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
