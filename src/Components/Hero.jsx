import React from "react";
import { WavyBackground } from "../UI/WavyBackground";
import { TypewriterEffectSmooth } from "../UI/TypeWriter";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <WavyBackground className="max-w-4xl pb-2 md:pt-32">
      <p className="text-lg md:text-2xl lg:text-5xl text-white font-bold inter-var text-center px-2">
        Unveiling the Power of AI, Data Science & Machine Learning
      </p>
      <p className="text-xs md:text-md lg:text-lg mt-4 text-white font-normal inter-var text-center md:px-24 px-8 lg:py-8">
        Dive into our case studies and witness the power of technology as it
        collaborates with our clients to achieve their wildest digital
        innovation dreams. Explore how our projects have revolutionized
        industries, empowered businesses, and left a lasting impact on the
        world.
      </p>

      <TypewriterEffectSmoothDemo />
    </WavyBackground>
  );
};

export default Hero;

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Machine Learning | ",
      className: "dark:text-blue-500",
    },
    {
      text: "Deep Learning |",
      className: "dark:text-pink-500",
    },
    {
      text: "Data Science |",
      className: "dark:text-white",
    },
    {
      text: "Artificial Intelligence",
      className: "dark:text-yellow-500",
    },
  ];
  return (
    <div className="md:flex flex-col items-center justify-center lg:my-32 hidden">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
