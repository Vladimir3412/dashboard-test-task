import type { Citizen } from "@/shared/mocks/citizen";
import { FORMAT_DATETIME } from "@/shared/lib/dayjs";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const JobTab = ({ user }: { user: Citizen }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl font-medium">Работа</h2>

      {user.job.length === 0 && (
        <p className="text-muted-foreground text-sm">
          Нет данных о трудоустройстве
        </p>
      )}

      {user.job.map((record) => (
        <div
          key={record.id}
          className="flex items-center gap-3 border rounded-lg p-3"
        >
          <div className="flex items-center justify-center size-10 rounded-full bg-accent text-primary shrink-0">
            <Briefcase size={18} />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-foreground font-medium">{record.company}</p>
            <p className="text-muted-foreground text-sm">
              {record.position} · с {FORMAT_DATETIME(record.startDate)}
            </p>
            <p className="text-muted-foreground text-xs">
              Доход: {record.income.toLocaleString("ru-RU")} ₽
            </p>
          </div>
          {record.isCurrent && (
            <Badge variant="outline" className="ml-auto">
              Текущее место
            </Badge>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobTab;
