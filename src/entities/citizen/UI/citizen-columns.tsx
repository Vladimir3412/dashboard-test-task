import type { Citizen } from "@/shared/mocks/citizen";
import { createColumnHelper } from "@tanstack/react-table";
import type { DataTableFeatures } from "./data-table-features";
import { FORMAT_DATETIME } from "@/shared/lib/dayjs";

const columnHelper = createColumnHelper<DataTableFeatures, Citizen>();

export const columns = columnHelper.columns([
  { accessorKey: "lastName", header: "ФИО" },
  {
    accessorKey: "birthDay",
    header: "Дата рождения",
    cell: ({ getValue }) => FORMAT_DATETIME(getValue()),
  },
  { accessorKey: "gender", header: "Пол" },
  { accessorKey: "city", header: "Город" },
  { accessorKey: "phone", header: "Телефон" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Статус" },
]);
