import type { Citizen } from "@/shared/mocks/citizen";
import { createColumnHelper } from "@tanstack/react-table";
import type { DataTableFeatures } from "./data-table-features";
import { FORMAT_DATETIME } from "@/shared/lib/dayjs";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const columnHelper = createColumnHelper<DataTableFeatures, Citizen>();

export const columns = columnHelper.columns([
  {
    accessorKey: "lastName",
    header: "ФИО",
    cell: ({ row }) =>
      `${row.original.lastName} ${row.original.firstName} ${row.original.middleName}`,
  },
  {
    accessorKey: "birthDay",
    header: "Дата рождения",
    cell: ({ getValue }) => FORMAT_DATETIME(getValue()),
  },
  { accessorKey: "gender", header: "Пол" },
  { accessorKey: "city", header: "Город" },
  {
    accessorKey: "phone",
    header: "Телефон",
    cell: ({ row }) => `+7 ${row.original.phone}`,
  },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "status",
    header: "Статус",
    cell: ({ getValue }) => {
      const status = getValue();
      return (
        <Badge
          variant={
            status === "Активный"
              ? "green"
              : status === "Неактивный"
                ? "default"
                : "yellow"
          }
        >
          {status}
        </Badge>
      );
    },
  },

  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const citizen = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="h-8 w-8 p-0" />}
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Управление</DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Редактировать</DropdownMenuItem>
              <DropdownMenuItem>Подробнее</DropdownMenuItem>
              <DropdownMenuItem>Удалить</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  }),
]);
