import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  name: string;
  role: string;
};

const ReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <QuoteIcon className="w-10 h-10 text-yellow-300" />
      <p className="text-center mt-4 text-white text-base md:text-lg lg:text-xl font-semibold text-opacity-80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        perspiciatis voluptate quam inventore ducimus quo, ratione temporibus
        aspernatur esse neque exercitationem odit ex aperiam! Tempora quod iure
        nesciunt animi! Enim libero suscipit inventore deserunt ab molestias,
        corrupti minus nihil! Aliquam?
      </p>
      <div className="mt-8">
        <h1 className="text-base md:text-2xl font-bold text-white text-center">
          {name}
        </h1>
        <p className="text-white text-sm md:text-lg font-bold text-center">
          {role}
        </p>
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mx-auto mt-6"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
