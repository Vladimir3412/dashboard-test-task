import { citizen } from "@/entities/citizen/model";
import { columns } from "@/entities/citizen/UI/citizen-columns";
import CitizenDataTable from "@/entities/citizen/UI/citzen-data-table";

const Citizens = () => {
  return (
    <div className="container mx-auto py-10">
      <CitizenDataTable columns={columns} data={citizen} />
    </div>
  );
};
export default Citizens;
