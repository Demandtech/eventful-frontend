import { ReactNode } from "react";
import Navbar from "./navbar";

function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <Navbar />

      <div className="max-w-[1440px] py-5 mx-auto px-3 md:px-5 lg:px-20">
        {children}
      </div>
    </div>
  );
}

export default PagesLayout;
