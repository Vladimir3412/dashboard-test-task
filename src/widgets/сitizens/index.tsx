import { Input } from "@/components/ui/input";
import { citizen } from "@/entities/citizen/model";
import { columns } from "@/entities/citizen/UI/citizen-columns";
import CitizenDataTable from "@/entities/citizen/UI/citzen-data-table";
import { X } from "lucide-react";
import { useState } from "react";

const Citizens = () => {
  const [search, setSearch] = useState("");

  const filtered = citizen.filter(
    (c) =>
      `${c.firstName} ${c.lastName}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="flex flex-col gap-4">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск по ФИО или email..."
        className="max-w-sm"
        rightSection={
          search.length > 0 && (
            <X
              className="text-muted-foreground hover:text-white cursor-pointer w-4 h-4"
              onClick={() => setSearch("")}
            />
          )
        }
      />
      <CitizenDataTable columns={columns} data={filtered} />
    </div>
  );
};
export default Citizens;
