import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {
  price: string;
  user: string;
  type: string;
};

const PriceCard = ({ price, user, type }: Props) => {
  return (
    <div className="bg-black p-8 rounded-lg text-center">
      <p className="mt-12 mb-2 text-3xl text-white font-semibold">{type}</p>
      <p className="text-white">Great for private individuals</p>
      <Separator className="my-8 opacity-20" />
      <div className="text-white font-semibold text-2xl">
        <span className="text-5xl">${price}</span>/mo
      </div>
      <Separator className="my-8 opacity-20" />
      <div className="mt-6 space-y-3 text-white opacity-50">
        <p>{user} user</p>
        <p>Unlimited Project</p>
        <p>Download Prototype</p>
      </div>
      <div className="mt-6">
        <Button variant={"secondary"} size={"lg"}>Get Now</Button>
      </div>
    </div>
  );
};

export default PriceCard;
