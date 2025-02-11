import { Check } from "lucide-react";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-10">
        {/* Content */}
        <div>
          <h1 className="upparcase text-white mb-6 font-bold">
            Flexible & Affortable
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white my-5">
            Our Pricing Plans
          </h1>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            excepturi ipsam eius sequi? Temporibus eaque repudiandae, beatae
            tenetur debitis alias?
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-white text-lg font-semibold opacity-60">
                High Quality Service
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-white text-lg font-semibold opacity-60">
                7/24 customer support
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <Check className="w-6 h-6 text-green-500" />
              <p className="text-white text-lg font-semibold opacity-60">
                Affordable Rates
              </p>
            </div>
          </div>
        </div>
        {/* Price Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <PriceCard price="4" user="1" type="Silver Pack"/>
          </div>
          <div>
            <PriceCard price="8" user="3" type="Golen Pack"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
