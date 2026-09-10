import { SidebarTrigger } from "@/components/ui/sidebar";

export const PageLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b border-border px-2 h-12 flex items-center justify-between">
        <div className="flex items-center gap-3 ">
          <SidebarTrigger size="icon-lg" />
          <h1 className="font-semibold">{title}</h1>
        </div>
      </header>
      <div className="p-12 flex-1">{children}</div>
    </div>
  );
};
