import { faker } from "@faker-js/faker/locale/ru";
import type { CitizenStatus } from "@/entities/citizen/model";
import type { Citizen } from "@/shared/mocks/citizen";

const statuses: CitizenStatus[] = ["Активный", "Неактивный", "На рассмотрении"];
let counter = 1;
export const generateCitizen = (): Citizen => ({
  id: String(counter++),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  middleName: faker.person.middleName(),
  birthDay: faker.date.birthdate({ mode: "age", min: 18, max: 80 }),
  gender: faker.person.sex(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  city: faker.location.city(),
  address: faker.location.streetAddress(),
  createdAt: faker.date.recent({ days: 365 }),
  status: faker.helpers.arrayElement(statuses),
});

faker.seed(1);

export const citizen = Array.from({ length: 100 }, generateCitizen);
