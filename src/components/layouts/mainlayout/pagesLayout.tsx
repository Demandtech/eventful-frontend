import { ReactNode } from "react";
import Navbar from "./navbar";

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="bg-[#04092c] sticky top-0 z-20">
        <Navbar />
      </div>
      <div className="max-w-[1440px] py-5 mx-auto px-3 md:px-5 lg:px-10">
        {children}
      </div>
    </div>
  );
}

export default PagesLayout;
