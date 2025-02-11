import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pb-16 pt-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
        {/* Img  */}
        <div className="order-2 xl:order-1" data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image
            src="/images/about.jpg"
            alt="about"
            width={400}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        {/* content */}
        <div className="order-1 xl:order-2 flex flex-col space-y-6">
          <h1 className="text-gray-300 mb-4 font-semibold text-lg capitalize">
            What we do
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Build your own AI-powered business in minutes.
          </h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            quisquam magnam adipisci! Cumque officiis officia quod neque nobis
            minima ab vitae similique, commodi, impedit itaque animi ea
            consequuntur accusantium possimus!
          </p>
          <Button size={"lg"} className="w-32 h-12 text-base uppercase bg-gradient-to-r from-purple-500 to-pink-500  hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
