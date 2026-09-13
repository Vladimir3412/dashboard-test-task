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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { citizen } from "@/entities/citizen/model/mock";
import dayjs from "dayjs";
import { TrendingUp } from "lucide-react";
import { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import type { Citizen } from "../mocks/citizen";

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

  const groupredByDate = filteredCitizen.reduce(
    (acc, cur) => {
      const dataKey = dayjs(cur.createdAt).format("DD.MM");
      acc[dataKey] = (acc[dataKey] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const chartAreaData = Object.entries(groupredByDate)
    .sort(
      ([dateA], [dateB]) =>
        dayjs(dateA, "DD.MM").valueOf() - dayjs(dateB, "DD.MM").valueOf(),
    )
    .map(([date, count]) => ({
      date,
      count,
    }));
  return (
    <Card className="w-full pt-0 overflow-hidden">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Динамика регистраций</CardTitle>
          <CardDescription>Динамика регистраций за период</CardDescription>
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
            <SelectValue placeholder="3 месяца" />
          </SelectTrigger>
          <SelectContent
            className="rounded-xl p-2"
            side="bottom"
            alignItemWithTrigger={false}
          >
            <SelectItem value="6 месяцев" className="rounded-lg">
              6 месяцев
            </SelectItem>
            <SelectItem value="3 месяца" className="rounded-lg">
              3 месяца
            </SelectItem>
            <SelectItem value="1 месяц" className="rounded-lg">
              1 месяц
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart accessibilityLayer data={chartAreaData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
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
          Статистика роста регистрации граждан
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Показано общее количество регистрации посетителей
        </div>
      </CardFooter>
    </Card>
  );
}
