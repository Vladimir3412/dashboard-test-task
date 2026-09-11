import { FORMAT_DATETIME } from "@/shared/lib/dayjs";
import type { Citizen } from "@/shared/mocks/citizen";

const FamilyTab = ({ user }: { user: Citizen }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl font-medium">
        Информация о семье
      </h2>
      <p className="text-muted-foreground text-sm -mt-2">
        Всего членов семьи: {user.familyMembers.length}
      </p>

      {!user.familyMembers.length && (
        <p className="text-muted-foreground text-sm">
          Нет данных о членах семьи
        </p>
      )}

      {user.familyMembers.map((member) => (
        <div
          key={member.id}
          className="flex items-center justify-between border-b pb-3"
        >
          <div>
            <p className="text-foreground font-medium">{member.fullName}</p>
            <p className="text-muted-foreground text-sm">
              {member.relation} · Дата рождения:{" "}
              {FORMAT_DATETIME(member.birthDay)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FamilyTab;
