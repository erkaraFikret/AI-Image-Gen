import { Navlinks } from "@/constant/Constant";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void,
};

const MobileNav = ({ showNav, closeNav } : Props) => {

  const navOpen = showNav ? "traslate-y-0" : "translate-y-[-200%]"
  return (
    <div>
      <div
        className={`${navOpen} text-white fixed justify-center items-center flex flex-col h-screen transform 
    transition-all duration-1000 w-full bg-gray-900 space-y-6 z-[1050] top-0`}
      >
        <Link
        href="/"
        className="flex text-white items-center text-xl md:text-3xl font-bold ml-8 md:ml-16 gap-2 absolute top-[1.7rem] left-[0.7rem]"
      >
        <Image src="/logo.png" alt="logo image" width={50} height={50} />
        <span>ImageCraft</span>
      </Link>
        {Navlinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <XIcon onClick={closeNav} className="w-6 h-6 text-white absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8" />
      </div>
    </div>
  );
};

export default MobileNav;
