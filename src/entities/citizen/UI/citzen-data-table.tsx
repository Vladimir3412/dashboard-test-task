import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Citizen } from "@/shared/mocks/citizen";
import { useTable, type ColumnDef } from "@tanstack/react-table";
import { features, type DataTableFeatures } from "./data-table-features";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CitizenDataTableProps {
  columns: ColumnDef<DataTableFeatures, Citizen>[];
  data: Citizen[];
}

export function CitizenDataTable({ columns, data }: CitizenDataTableProps) {
  const table = useTable({
    features,
    data,
    columns,
  });

  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-lg border-1">
      <Table className=" w-full ">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => navigate(`${row.original.id}`)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Не найдено
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between p-3 ">
        <span>
          Страница {table.state.pagination.pageIndex + 1} из{" "}
          {table.getPageCount()}
        </span>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="cursor-pointer"
          >
            <MoveLeft />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="cursor-pointer"
          >
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CitizenDataTable;
