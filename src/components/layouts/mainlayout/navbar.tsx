import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import Modal from "@/components/reusables/Modal";
import Link from "next/link";
import React from "react";
import Searchbar from "../searchbar";

function Navbar() {
  return (
    <nav className=" max-w-[1440px] mx-auto text-white py-5 px-3 md:px-5 lg:px-10">
      <div className="flex  justify-between">
        <Link href="/">
          <p className="inline uppercase font-bold text-lg tracking-wide first-letter:text-btn-primary">
            Eventful
          </p>
        </Link>
        <div className="flex gap-10">
          <ul className="flex items-center gap-5">
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
            <Modal triggerVariant="primary" triggerText="Sign up">
              <Signup />
            </Modal>
            <Modal triggerVariant="outline" triggerText="Login">
              <Login />
            </Modal>
          </div>
        </div>
      </div>
      <Searchbar />
    </nav>
  );
}

export default Navbar;
