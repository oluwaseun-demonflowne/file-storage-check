import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const NewMainNav = () => {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default NewMainNav;
