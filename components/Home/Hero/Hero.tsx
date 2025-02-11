"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "da40e2211cmsh2977d576d4d5c2ep1eaacbjsn774c56c43eb7",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        inputs: prompt,
      },
    };
    try {
      const response = await axios.request(options);
      setImage(response?.data.url);
      toast.success("Image Generated Successfully");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "Generated-image.jpg";
    link.click();
  };
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
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            onClick={handleImageGeneration}
            variant={"default"}
            size={"lg"}
          >
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
        {loading && (
          <div>
            <Loader className="animate-spin mt-6" />
          </div>
        )}
        {image && (
          <div className="mt-8 flex flex-col items-center">
            <img
              src={image}
              alt="AI Image"
              className="max-w-full h-[500] rounded-lg shadow-lg"
              loading="lazy"
            />
            <Button
              onClick={handleDownloadImage}
              className="mt-4 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 
              hover:to-pink-500 transition-all duration-300"
            >
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
