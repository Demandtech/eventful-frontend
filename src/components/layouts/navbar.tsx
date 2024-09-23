import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import Link from "next/link";
import React, { useState } from "react";
import Searchbar from "./searchbar";
import Sidebar from "./sidebar";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/components/ui";
import { usePathname, useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import NavItems from "../reusables/NavItems";

function Navbar({
  isSearchBarOpen,
  setIsSearchBarOpen,
}: {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: () => void;
}) {
  const [user, setUser] = useState(true);
  const path = usePathname();
  const router = useRouter();

  return (
    <nav className=" sticky z-20 top-0 bg-[#04092c] text-white px-3 ">
      <div className=" max-w-[1440px] mx-auto md:px-5 lg:px-20">
        <div className="flex items-center sticky bg-[#04092c] top-0  py-5 justify-between">
          <div className="flex gap-3 items-center">
            <Sidebar />

            <Link href="/">
              <p className="font-bold text-4xl capitalize tracking-wide first-letter:text-btn-primary">
                Eventful
              </p>
            </Link>
          </div>

          <div className="flex items-center sm:gap-10 ">
            <div className="flex">
              {!path.includes("detail") && !path.includes("create-event") && (
                <Button onClick={setIsSearchBarOpen} variant="default">
                  <SearchIcon className="text-gray-600" />
                </Button>
              )}

              <NavItems className="items-center gap-5 hidden lg:flex" />
            </div>
            <div className="gap-5 flex items-center">
              {!user ? (
                <>
                  <Signup />
                  <Login />
                </>
              ) : (
                <div className="flex items-center gap-5">
                  <Link
                    href="/profile/iujeujdu"
                    className="flex gap-3 items-center"
                  >
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>RA</AvatarFallback>
                    </Avatar>
                    <div className="hidden sm:block">
                      <p className=" font-medium text-sm -mb-2">
                        Rasheed Adekunle
                      </p>
                      <span className="text-xs font-medium text-gray-500">
                        @Demand
                      </span>
                    </div>
                  </Link>
                  {/* <Link
                    className="hidden lg:block bg-btn-primary rounded-3xl px-4"
                    href={"/create-event"}
                  >
                    Create event
                  </Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
        {!path.includes("detail") && !path.includes("create-event") && (
          <div
            className={`${isSearchBarOpen ? "h-full" : "h-0"} overflow-hidden`}
          >
            <div className="pb-10 py-5">
              <Searchbar />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
