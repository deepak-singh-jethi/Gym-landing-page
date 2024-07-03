/* eslint-disable react/prop-types */
import HeroSectionWrapper from "./HeroSectionWrapper";
import { motion } from "framer-motion";

const variants1 = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export const variants2 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
};
export const variants3 = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.8 } },
};

const HeroSection = ({ word, spanWord, imageArray, page }) => {
  return (
    <HeroSectionWrapper imageArray={imageArray} wrapperHeight="60vh">
      {/* Hero Section Content */}
      <motion.div
        className="container  mx-4 sm:mx-auto pt-[180px]"
        variants={variants1}
        initial="hidden"
        animate="visible">
        {/* page heading */}
        <motion.h1
          className="text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold text-white max-w-3xl leading-tight"
          variants={variants2}
          initial="hidden"
          animate="visible">
          {word.toUpperCase()}{" "}
          <span className="text-[#F2FD84]">{spanWord.toUpperCase()}</span>
        </motion.h1>

        {/* arrow navigator para */}
        <motion.p
          className="
        text-xl text-gray-400 mt-6 max-w-xl"
          variants={variants3}
          initial="hidden"
          animate="visible">
          <span className="text-gray-200">Home {" > "} </span>
          <span className="text-[#F2FD84]">{`${page
            .charAt(0)
            .toUpperCase()}${page.slice(1)}`}</span>
        </motion.p>
      </motion.div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
