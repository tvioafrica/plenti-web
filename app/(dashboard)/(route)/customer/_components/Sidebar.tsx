"use client"
import Link from "next/link";
import React from "react";
import { navLinks } from "../_constants/customerData";
// import { logo } from "@/images/index";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentRoute = usePathname();

  return (
    <div className=" bg-white md:sticky top-[80px] left-0 md:w-[250px] md:h-[100vh] ">
     
      <ul className="md:block hidden">
        {navLinks.map((nav) => {
          return (
            <Link href={nav.link} key={nav.name}>
              <li
                className={
                  currentRoute === nav.link
                    ? "border-l-4 border-l-[black] rounded-md text-black flex gap-4 p-6 text-[#818080]"
                    : "text-black flex gap-4 p-6 text-[#818080]"
                }
              >
                {" "}
                <img src={nav.icons.src} alt="" /> <span>{nav.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <ul className="w-full z-30 items-center justify-center fixed bottom-0 left-0 flex bg-white md:hidden">
        {navLinks.map((nav) => {
          return (
            <Link href={nav.link} key={nav.name}>
              <li
                className={
                  currentRoute === nav.link
                    ? "border-t-4 border-t-red-400  rounded-md flex-col text-black flex  items-center justify-center gap-4 p-6 text-[#818080]"
                    : "text-black flex flex-col items-center justify-center gap-4 p-6 text-[#818080] z-40"
                }
              >
                {" "}
                <img src={nav.icons.src} alt="" className="w-[25px] h-[25px]" /> <span>{nav.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
