import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import EducationTab from "@/features/citizen/education-tab";
import FamilyTab from "@/features/citizen/family-tab";
import JobTab from "@/features/citizen/job-tab";
import PersonalTab from "@/features/citizen/personal-tab";
import type { Citizen } from "@/shared/mocks/citizen";
import { Settings } from "lucide-react";
import { useState } from "react";

const CitizenDetail = ({ user }: { user: Citizen }) => {
  const [activeTab, setActiveTab] = useState<
    "personal" | "family" | "education" | "job"
  >("personal");
  return (
    <div>
      <div className="flex items-center mb-8 ">
        <Settings size={40} />
        <div className="flex flex-col gap-1 ml-3  ">
          <h1 className="text-2xl font-semibold text-foreground">
            Настройки профиля
          </h1>
          <p className="text-muted-foreground text-sm">
            Управление персональные настройками пользователя
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[250px_1fr] gap-8">
        <div className="flex flex-col gap-2 bg-card/50 rounded-xl p-4 w-full self-start  ">
          <Button
            variant={activeTab === "personal" ? "outline" : "ghost"}
            onClick={() => setActiveTab("personal")}
            className="transition-all duration-200 cursor-pointer"
          >
            Личные данные
          </Button>
          <Button
            variant={activeTab === "family" ? "outline" : "ghost"}
            onClick={() => setActiveTab("family")}
            className="transition-all duration-200 cursor-pointer"
          >
            Семья
          </Button>
          <Button
            variant={activeTab === "education" ? "outline" : "ghost"}
            onClick={() => setActiveTab("education")}
            className="transition-all duration-200 cursor-pointer"
          >
            Образование
          </Button>
          <Button
            variant={activeTab === "job" ? "outline" : "ghost"}
            onClick={() => setActiveTab("job")}
            className="transition-all duration-200 cursor-pointer"
          >
            Работа
          </Button>
        </div>

        {activeTab === "personal" && (
          <div className="flex flex-col gap-3">
            <div className="relative rounded-xl p-5 border border-white/[0.08] overflow-hidden bg-card glass-panel">
              <div
                className="absolute -top-32 -right-52 w-72 h-72 rounded-full opacity-10 blur-[60px] pointer-events-none z-0"
                style={{ background: "hsl(250, 80%, 50%)" }}
              />

              <div className="relative z-10">
                <div className="flex gap-3 items-center mb-4">
                  <Avatar className="size-20">
                    <AvatarImage src="https://github.com/Vladimir3412.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-foreground">
                      {user.firstName} {user.lastName}
                    </p>
                    <Button
                      variant="outline"
                      size="xs"
                      className="cursor-pointer"
                    >
                      Изменить фото
                    </Button>
                  </div>
                </div>
                <Separator className="mb-4  h-px" />
                <PersonalTab user={user} />
              </div>
            </div>
          </div>
        )}
        {activeTab === "family" && (
          <div className="border border-white/[0.08] overflow-hidden bg-card rounded-xl p-6 relative glass-panel ">
            <div
              className="absolute -top-20 -right-24 w-48 h-48 rounded-full opacity-10 blur-[60px] pointer-events-none z-0"
              style={{ background: "hsl(250, 80%, 50%)" }}
            />
            <FamilyTab user={user} />
          </div>
        )}

        {activeTab === "education" && (
          <div className="border border-white/[0.08] overflow-hidden bg-card rounded-xl p-6 relative glass-panel">
            <div
              className="absolute -top-16 -right-24 w-48 h-48 rounded-full opacity-10 blur-[60px] pointer-events-none z-0"
              style={{ background: "hsl(250, 80%, 50%)" }}
            />
            <EducationTab user={user} />
          </div>
        )}
        {activeTab === "job" && (
          <div className="border border-white/[0.08] overflow-hidden bg-card rounded-xl p-6 relative glass-panel">
            <div
              className="absolute -top-16 -right-24 w-48 h-48 rounded-full opacity-10 blur-[60px] pointer-events-none z-0"
              style={{ background: "hsl(250, 80%, 50%)" }}
            />
            <JobTab user={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CitizenDetail;
