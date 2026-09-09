import dayjs from "dayjs";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DATE_DEFAULT } from "@/shared/config/data";

dayjs.locale("ru");
dayjs.extend(customParseFormat);

export const dayjsInstance = dayjs;

export const FORMAT_DATETIME = (dateISO: string | Date): string => {
  return dayjs(dateISO).format(DATE_DEFAULT);
};
