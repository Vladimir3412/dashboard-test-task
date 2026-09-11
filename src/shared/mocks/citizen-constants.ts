import type { CitizenStatus } from "@/entities/citizen/model";
import type { Education, FamilyMember } from "@/shared/mocks/citizen";

export const statuses: CitizenStatus[] = [
  "Активный",
  "Неактивный",
  "На рассмотрении",
];

export const relations: FamilyMember["relation"][] = [
  "Супруг(а)",
  "Ребёнок",
  "Родитель",
  "Брат/Сестра",
];

export const degreeLevels: Education["degreeLevel"][] = [
  "Среднее",
  "Среднее профессиональное",
  "Высшее",
  "Магистратура",
];

export const institutions = [
  "МГУ им. М.В. Ломоносова",
  "СПбГУ",
  "МГТУ им. Н.Э. Баумана",
  "НИУ ВШЭ",
  "РАНХиГС",
  "Уральский федеральный университет",
];

export const specialties = [
  "Информатика и вычислительная техника",
  "Экономика",
  "Юриспруденция",
  "Прикладная математика",
  "Менеджмент",
  "Педагогическое образование",
];

export const companies = [
  "ООО «ТехноСофт»",
  "АО «Ростелеком»",
  "ПАО Сбербанк",
  "ООО «Яндекс.Технологии»",
  "ГБУ «Мосгортранс»",
];

export const positions = [
  "Менеджер",
  "Инженер",
  "Бухгалтер",
  "Специалист по продажам",
  "Аналитик",
];
