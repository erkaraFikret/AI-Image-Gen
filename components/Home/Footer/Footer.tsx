import { Mail, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pb-16 pt-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-10 pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0">
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold text-center">
            We develop & create digital future
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-white font-bold">Adres</h1>
          <p className="text-opacity-60 text-white mt-4">
            Odunpazarı Mahallesi, 1. Sokak
          </p>
         
          <p className="text-opacity-60 text-white">Eskişehir, Türkiye</p>
        </div>
        <div>
            <h1 className="text-xl text-white font-bold ">Contact</h1>
           <div>
           <p className="text-white flex items-center gap-4 mt-4">
                <Mail/> mail@gmail.com
            </p>
           </div>
           <div>
           <p className="text-white flex items-center gap-4 mt-4">
                <Phone/> +90 555 555 55 55
            </p>
           </div>
        </div>
      </div>
      <p className="text-white text-center mt-10">&copy; 2025 ImageCraft. All rights reserved.</p>
    </div>
  );
};

export default Footer;
