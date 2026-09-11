import type { Citizen } from "@/shared/mocks/citizen";
import { GraduationCap } from "lucide-react";

const EducationTab = ({ user }: { user: Citizen }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl font-medium">Образование</h2>

      {!user.education.length && (
        <p className="text-muted-foreground text-sm">
          Нет данных об образовании
        </p>
      )}

      {user.education.map((record) => (
        <div
          key={record.id}
          className="flex items-center gap-3 border rounded-lg p-3"
        >
          <div className="flex items-center justify-center size-12 rounded-full bg-accent text-primary shrink-0">
            <GraduationCap size={25} />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-foreground font-medium">{record.institution}</p>
            <p className="text-muted-foreground text-sm">
              {record.specialty} | {record.degreeLevel} |{" "}
              {record.graduationYear}
            </p>
            <p className="text-muted-foreground text-xs">
              Диплом № {record.diplomaNumber}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTab;
