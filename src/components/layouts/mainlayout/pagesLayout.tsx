import { ReactNode, useState } from "react";
import Navbar from "../navbar";
import Footer from "./Footer";

function PagesLayout({ children }: { children: ReactNode }) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  function handleSearBar() {
    setIsSearchBarOpen(!isSearchBarOpen);
  }
  return (
    <div className="relative min-h-dvh">
      <Navbar
        setIsSearchBarOpen={handleSearBar}
        isSearchBarOpen={isSearchBarOpen}
      />

      <div className="max-w-[1440px] py-5 mx-auto px-3 md:px-5 lg:px-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default PagesLayout;
