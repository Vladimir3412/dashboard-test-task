import { Button } from "@/components/ui/button";
import type { Citizen } from "@/shared/mocks/citizen";
import { FormField } from "@/shared/UI/form-field";
import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

type PersonalFormData = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
  city: string;
};

const PersonalTab = ({ user }: { user: Citizen }) => {
  const [formData, setFormData] = useState<PersonalFormData>(() => {
    const saved = localStorage.getItem(`citizen-${user.id}`);
    if (saved) {
      return JSON.parse(saved);
    }

    return {
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middleName,
      email: user.email,
      phone: user.phone,
      city: user.city,
    };
  });

  const handleSave = () => {
    localStorage.setItem(`citizen-${user.id}`, JSON.stringify(formData));
    toast.success("Сохранено!", { position: "top-right" });
  };

  return (
    <div className="flex flex-col">
      <div className=" grid grid-cols-2 gap-8  ">
        <div className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl font-medium">Обновить ФИО</h2>
          <FormField
            placeholder="Имя"
            label="Полное имя"
            onValueChange={(v) =>
              setFormData((prev) => ({ ...prev, firstName: v }))
            }
            value={formData.firstName}
          />

          <FormField
            placeholder="Фамилия"
            label="Фамилия"
            onValueChange={(v) =>
              setFormData((prev) => ({ ...prev, lastName: v }))
            }
            value={formData.lastName}
          />

          <FormField
            placeholder="Отчество"
            label="Отчество"
            onValueChange={(v) =>
              setFormData((prev) => ({ ...prev, middleName: v }))
            }
            value={formData.middleName}
          />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-foreground font-medium text-xl">Контакты</h2>
          <div className="flex flex-col gap-3">
            <FormField
              placeholder="Email"
              label="Email"
              value={formData.email}
              onValueChange={(v) =>
                setFormData((prev) => ({ ...prev, email: v }))
              }
            />
            <FormField
              placeholder="+7"
              label="Телефон"
              value={`+7 ${formData.phone}`}
              onValueChange={(v) =>
                setFormData((prev) => ({ ...prev, phone: v }))
              }
            />

            <FormField
              placeholder="Город"
              label="Город"
              value={formData.city}
              onValueChange={(v) =>
                setFormData((prev) => ({ ...prev, city: v }))
              }
            />
          </div>
        </div>
      </div>

      <Button className="self-end p-4 cursor-pointer mt-4" onClick={handleSave}>
        <Check />
        Сохранить
      </Button>
    </div>
  );
};

export default PersonalTab;
