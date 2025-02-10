"use client";

import { Navlinks } from "@/constant/Constant";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.screenY >= 90) setNavBg(true);
      if (window.screenY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.addEventListener("scroll", handler);
  }, []);

  const bgStyle = navBg ? "bg-gray-900 shadow-md" : "";

  return (
    <div
      className={`${bgStyle} flex items-center justify-between h-[12vh] w-full mx-auto fixed transition-all duration-200 z-[100]`}
    >
      <Link
        href="/"
        className="flex text-white items-center text-xl md:text-3xl font-bold ml-8 md:ml-16 gap-2"
      >
        <Image src="/logo.png" alt="logo image" width={50} height={50} />
        <span>ImageCraft</span>
      </Link>
      <div className="hidden md:flex items-center space-x-10">
        {Navlinks.map((link) => {
          return (
            <Link
              key={link.id}
              href={link.url}
              className="relative text-base text-white w-fit block after:block after:content-[''] 
              after:absolute after:h-[3px] after:bg-yellow-400 after:w-full 
              after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16">
        <ShoppingCart className="w-6 h-6 cursor-pointer" />
        <Search className="w-6 h-6 cursor-pointer" />
        <MenuIcon
          onClick={openNav}
          className="w-6 h-6 cursor-pointer md:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
