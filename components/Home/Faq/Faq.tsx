import Image from "next/image";
import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return <div className="pb-16 pt-16 bg-gray-950">
    <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
            <Image src="/images/faq.png" alt="faq" width={500} height={500}/>
        </div>
        <div>
            <FaqCard/>
        </div>
    </div>
  </div>;
};

export default Faq;
