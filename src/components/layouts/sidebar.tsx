import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetFooter,
} from "../ui";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import NavItems from "../reusables/NavItems";

function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-btn-secondary flex flex-col" side="left">
        <SheetHeader className="text-start mb-2">
          <SheetTitle className="inline capitalize font-bold text-4xl tracking-wide first-letter:text-btn-primary text-white">
            <Link href="/">Eventful</Link>
          </SheetTitle>
        </SheetHeader>

        <NavItems className="text-white space-y-5 items-center gap-5" />
        <Link
          className="bg-btn-primary text-center w-full mt-10 rounded text-white py-3"
          href={"/create-event"}
        >
          Create event
        </Link>
        <SheetFooter className="w-full text-center mt-auto">
          <div className="bg-[#040923] text-white/70 text-center py-2 w-full">
            <span className="text-xs">© 2023 Eventful Private Limited</span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
