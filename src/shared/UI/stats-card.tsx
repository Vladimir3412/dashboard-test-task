import { TrendingDown, TrendingUp } from "lucide-react";

export const StatsCard = ({
  description,
  trend,
  trendValue,
  title,
  icon: Icon,
  hint,
  color = "blue",
}: {
  description: string;
  trend: "up" | "down";
  trendValue: string;
  title: string | number;
  icon: React.ElementType;
  hint: string;
  color: "blue" | "green" | "purple" | "orange";
}) => {
  const colorMap = {
    blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
    green: { bg: "bg-green-500/20", text: "text-green-400" },
    purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
    orange: { bg: "bg-orange-500/20", text: "text-orange-400" },
  };
  const colors = colorMap[color];
  return (
    <div className="flex p-4 flex-col gap-2 bg-card rounded-2xl border-2 ">
      <div className="flex justify-between items-center ">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg}`}
        >
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        <div
          className={`flex items-center gap-2 text-xs border rounded-sm p-1  ${trend === "up" ? "text-green-500" : "text-red-500"}`}
        >
          {trend === "up" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {trendValue}
        </div>
      </div>

      <h1 className="font-bold text-white text-4xl mb-2">{title}</h1>

      <div className="flex flex-col gap-0">
        <p className="text-lg font-medium text-white">{description}</p>
        <span className="text-xs text-muted-foreground">{hint}</span>
      </div>
    </div>
  );
};
