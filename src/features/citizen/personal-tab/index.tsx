import type { Citizen } from "@/shared/mocks/citizen";
import { FormField } from "@/shared/UI/form-field";
import { useState } from "react";

const PersonalTab = ({ user }: { user: Citizen }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
    email: user.email,
    phone: user.phone,
    city: user.city,
  });

  return (
    <div className=" grid grid-cols-1 gap-8  ">
      <div className="flex flex-col gap-3">
        <h2 className="text-white text-xl font-medium">Обновить ФИО</h2>
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
        <h2 className="text-white font-medium text-xl">Контакты</h2>
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
            value={formData.phone}
            onValueChange={(v) =>
              setFormData((prev) => ({ ...prev, phone: v }))
            }
          />

          <FormField
            placeholder="Город"
            label="Город"
            value={formData.city}
            onValueChange={(v) => setFormData((prev) => ({ ...prev, city: v }))}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalTab;
