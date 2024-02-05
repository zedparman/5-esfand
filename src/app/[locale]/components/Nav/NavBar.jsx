import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import ChangeLangDropDown from "./ChangeLangDropDown";
import SideNav from "./SideNav";
import { Link } from "@/navigations";

const NavBar = () => {
  return (
    <nav className="p-5 flex justify-between items-center border ">
      <Link href={"/"}>
        <h1>Queston Area</h1>
      </Link>
      <div className="flex items-center gap-3">
        <ChangeLangDropDown />
        <ThemeToggle />
        <SideNav />
      </div>
    </nav>
  );
};

export default NavBar;
