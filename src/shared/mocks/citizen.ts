import type { CitizenStatus } from "@/entities/citizen/model";

export interface Citizen {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDay: Date;
  gender: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  createdAt: Date;
  status: CitizenStatus;
  familyMembers: FamilyMember[];
  education: Education[];
  job: Job[];
}

export interface FamilyMember {
  id: string;
  fullName: string;
  relation: "Супруг(а)" | "Ребёнок" | "Родитель" | "Брат/Сестра";
  birthDay: Date;
}

export interface Education {
  id: string;
  institution: string;
  specialty: string;
  degreeLevel:
    | "Среднее"
    | "Среднее профессиональное"
    | "Высшее"
    | "Магистратура";
  graduationYear: string;
  diplomaNumber: string;
}

export interface Job {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  isCurrent: boolean;
  income: number;
}
