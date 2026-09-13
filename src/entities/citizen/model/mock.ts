import type {
  Citizen,
  Education,
  FamilyMember,
  Job,
} from "@/shared/mocks/citizen";
import {
  companies,
  degreeLevels,
  institutions,
  positions,
  relations,
  specialties,
  statuses,
} from "@/shared/mocks/citizen-constants";
import { faker } from "@faker-js/faker/locale/ru";

let familyCounter = 1;
const generateFamilyMember = (): FamilyMember => ({
  id: String(familyCounter++),
  fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
  relation: faker.helpers.arrayElement(relations),
  birthDay: faker.date.birthdate({ mode: "age", min: 0, max: 90 }),
});

let educationCounter = 1;
const generateEducation = (): Education => ({
  id: String(educationCounter++),
  degreeLevel: faker.helpers.arrayElement(degreeLevels),
  diplomaNumber: faker.string.numeric(10),
  specialty: faker.helpers.arrayElement(specialties),
  graduationYear: String(faker.number.int({ min: 2000, max: 2024 })),
  institution: faker.helpers.arrayElement(institutions),
});

let jobCounter = 1;
const generateJob = (): Job => ({
  id: String(jobCounter++),
  company: faker.helpers.arrayElement(companies),
  income: faker.number.int({ min: 30000, max: 200000 }),
  isCurrent: faker.datatype.boolean({ probability: 0.5 }),
  position: faker.helpers.arrayElement(positions),
  startDate: faker.date.past({ years: 5 }),
});

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
  createdAt: faker.date.recent({ days: 180 }),
  status: faker.helpers.arrayElement(statuses),
  familyMembers: Array.from(
    { length: faker.number.int({ min: 0, max: 3 }) },
    generateFamilyMember,
  ),
  education: Array.from(
    { length: faker.number.int({ min: 0, max: 2 }) },
    generateEducation,
  ),
  job: Array.from(
    { length: faker.number.int({ min: 0, max: 3 }) },
    generateJob,
  ),
});

faker.seed(1);

export const citizen = Array.from({ length: 350 }, generateCitizen);
