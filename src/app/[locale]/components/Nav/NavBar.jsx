import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import ChangeLangDropDown from "./ChangeLangDropDown";
import SideNav from "./SideNav";

const NavBar = () => {
  return (
    <nav className="p-5 flex justify-between items-center border ">
      <h1>Queston Area</h1>
      <div className="flex items-center gap-3">
        <ChangeLangDropDown />
        <ThemeToggle />
        <SideNav />
      </div>
    </nav>
  );
};

export default NavBar;
