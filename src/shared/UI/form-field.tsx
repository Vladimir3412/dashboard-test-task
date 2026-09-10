import { Input } from "@/components/ui/input";

export const FormField = ({
  label,
  onValueChange,
  ...props
}: {
  label: string;
  onValueChange: (v: string) => void;
} & React.ComponentProps<"input">) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-muted-foreground text-sm">{label}</label>
      <Input onChange={(e) => onValueChange(e.target.value)} {...props} />
    </div>
  );
};
