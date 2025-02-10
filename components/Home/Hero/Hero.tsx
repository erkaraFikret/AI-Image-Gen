import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[95%] min-h-screen mx-auto relative mt-[20vh]">
      <div className="z-10 relative text-white flex flex-col items-center justify-center">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center 
               bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Transform Your Ideas into <br />
          Stunning AI Art
        </h1>
        <p className="mt-3 text-sm sm:text-base font-semibold text-center text-gray-300">
          Experience the future of AI-driven art creation
        </p>
        <div
          className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white 
        rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between"
        >
          <input
            placeholder="Generate Your Dream Image"
            className="w-full rounded-lg outline-none h-full text-black 
            block flex-1 placeholder:text-xs sm:placeholder:text-base"
          />
          <Button variant={"default"} size={"lg"}>
            Generate
          </Button>
        </div>
        <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
          <p>Popular Tags :</p>
          <Button variant={"secondary"}>Creative</Button>
          <Button variant={"secondary"}>Hyperreality</Button>
          <Button variant={"secondary"}>Steampunk</Button>
          <Button variant={"secondary"}>Animation</Button>
          <Button variant={"secondary"}>Business</Button>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
