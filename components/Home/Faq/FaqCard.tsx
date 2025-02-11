import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-white">
  <AccordionItem value="item-1">
    <AccordionTrigger className="md:text-lg lg:text-2xl">Is it easy to use?</AccordionTrigger>
    <AccordionContent className="text-lg">
      Yes. Our AI-powered image generator is designed to be intuitive and user-friendly, allowing you to create stunning visuals with just a few clicks.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="md:text-lg lg:text-2xl">Can I customize the generated images?</AccordionTrigger>
    <AccordionContent className="text-lg">
      Yes. You can adjust the style, color palette, and other parameters to suit your specific needs and preferences.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger className="md:text-lg lg:text-2xl">Is it suitable for all types of projects?</AccordionTrigger>
    <AccordionContent className="text-lg">
      Absolutely. Whether you're working on digital art, marketing materials, or personal projects, our AI image generator can help you create high-quality visuals in any field.
    </AccordionContent>
  </AccordionItem>
</Accordion>

  );
};

export default FaqCard;
