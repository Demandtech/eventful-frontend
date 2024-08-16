import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import Link from "next/link";
import React, { useState } from "react";
import Searchbar from "../searchbar";
import Sidebar from "../sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

function Navbar() {
  const [user, setUser] = useState(true);
  return (
    <nav className=" max-w-[1440px] mx-auto bg-[#04092c] text-white pb-5 px-3 md:px-5 lg:px-20">
      <div className="flex items-center sticky bg-[#04092c] top-0 z-20 py-5 justify-between">
        <div className="flex gap-3 items-center">
          {/* ÷ <Button className="px-0 lg:hidden" variant={"default"}> */}
          <Sidebar />

          {/* </Button> */}
          <Link href="/">
            <p className="inline uppercase font-bold text-lg tracking-wide first-letter:text-btn-primary">
              Eventful
            </p>
          </Link>
        </div>
        <div className="flex gap-10">
          <ul className=" items-center gap-5 hidden lg:flex">
            <li>
              <Link href="/trending">Trending</Link>
            </li>
            <li>
              <Link href="/sport">Sport</Link>
            </li>
            <li>
              <Link href="/concert">Concert</Link>
            </li>
            <li>
              <Link href="theater">Theater</Link>
            </li>
          </ul>

          <div className="gap-5 flex items-center">
            {user ? (
              <>
                <Signup />
                <Login />
              </>
            ) : (
              <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>RA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm -mb-2">Rasheed Adekunle</p>
                  <span className="text-xs font-medium text-gray-500">
                    @Demand
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Searchbar />
    </nav>
  );
}

export default Navbar;
