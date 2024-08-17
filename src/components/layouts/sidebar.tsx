import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
} from "../ui";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-btn-secondary" side="left">
        <SheetHeader className="text-start mb-10">
          <SheetTitle className="inline capitalize font-bold text-lg tracking-wide first-letter:text-btn-primary text-white">
            <Link href="/">Eventful</Link>
          </SheetTitle>
        </SheetHeader>
        <ul className="text-white space-y-5 items-center gap-5">
          <li>
            <Link href="/categories/Family">Family</Link>
          </li>
          <li>
            <Link href="/categories/Sport">Sport</Link>
          </li>
          <li>
            <Link href="/categories/Concert">Concert</Link>
          </li>
          <li>
            <Link href="/categories/Theater">Theater</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
