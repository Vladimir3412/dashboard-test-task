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
}
