"use client"

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BiMenu } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import { NavLinks } from "../_constants/index";
import MobileNav from './MobileNav';
import Button from "./Button";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (

    <nav className="z-10  w-full  bg-white fixed px-4 md:px-0">
      <div className="flex z-10 justify-between py-4 container mx-auto items-center top-0 left-0 right-0">
        <div className="">
          <Link href="/">
            <Image
              src="/plenti_logo_dark.svg"
              width={116}
              height={43}
              alt="logo"
            />
          </Link>

        </div>

        <div className="space-x-10 hidden lg:flex" >
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text} 
            className={`text-gray-800 hover:text-gray-500 ${activeLink === link.text ? 'border-b-2 border-b-primary '
            : 'bg-white text-gray-800'} px-4 py-2 `}
            onClick={() => handleLinkClick(link.key)}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className=" gap-6 hidden lg:flex">
          <Link href="/login">
            <Button title="Login" bgColor="bg-secondary" textColor="text-primary" />
          </Link>
          <Link href="/register">
            <Button title="Get Started" />
          </Link>
        </div>
        <div>
          <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <MdClose className="text-3xl text-accent" />
            ) : (
              <BiMenu size={36} className="text-3xl text-accent" />
            )}
          </button>

          <div
            className={`${mobileNav ? "left-0" : "-left-full"
              } fixed top-0 w-[80vw] lg:hidden transition-all bottom-0 bg-[#FFF8EE] `}
          >
            <MobileNav />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
