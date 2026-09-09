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

  return (
    <Table className="mt-8 w-full overflow-hidden rounded-md border">
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
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default CitizenDataTable;
