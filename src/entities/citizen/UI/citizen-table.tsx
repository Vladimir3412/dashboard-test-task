import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { citizen } from "@/entities/citizen/model";
import { FORMAT_DATETIME } from "@/shared/lib/dayjs";

const CitizenTable = () => {
  return (
    <Table className="mt-8 w-full ">
      <TableCaption>Подробнее в разделе "Картотека граждан"</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>ФИО</TableHead>
          <TableHead>Дата рождения</TableHead>
          <TableHead>Пол</TableHead>
          <TableHead>Город</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Статус</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {citizen.slice(0, 10).map((item) => (
          <TableRow key={item.id} className="cursor-pointer hover:bg-muted/80">
            <TableCell className="font-medium">
              {item.firstName} {item.lastName}
            </TableCell>
            <TableCell>{FORMAT_DATETIME(item.birthDay)} г.</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>{item.city}</TableCell>
            <TableCell>+7 {item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Badge
                variant={
                  item.status === "Активный"
                    ? "green"
                    : item.status === "Неактивный"
                      ? "outline"
                      : "yellow"
                }
                className="text-center"
              >
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CitizenTable;
