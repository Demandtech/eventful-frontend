import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { DialogContent, Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function Modal({
  children,
  triggerText,
  triggerVariant,
}: {
  triggerText: string;
  children: ReactNode;
  triggerVariant: "primary" | "secondary" | "outline" | "link";
}) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant={triggerVariant}>
            {triggerText}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="grid gap-4 py-4">{children}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
