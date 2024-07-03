import { homeHeroUrls } from "../../assets/imageUrls";
import HeroSectionWrapper from "../common/ui/HeroSectionWrapper";
import MainButton from "../common/buttons/MainButton";
import SecondaryButton from "../common/buttons/SecondaryButton";
import { gymStats } from "../../assets/staticData";
import { motion } from "framer-motion";

const variants1 = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  hidden: { opacity: 0 },
};
const variants2 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hidden: { opacity: 0, y: 20 },
};

const HeroSection = () => {
  return (
    <HeroSectionWrapper imageArray={homeHeroUrls} wrapperHeight="100%">
      {/* Hero Section Content */}

      <div className="flex flex-col justify-center items-start pt-32 md:pt-48  px-4  container mx-auto">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight">
            <span className="text-[#F2FD84]">ACHIEVE</span> MORE THAN JUST
            FITNESS
          </h1>
          <p className="text-gray-100 text-base sm:text-lg md:text-xl my-6 max-w-xl font-serif">
            Combine strength, flexibility, and endurance in a community that
            values well-rounded health and supportive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-10 pb-10 md:pb-3">
            <MainButton title="Join Now" />
            <SecondaryButton title="Learn More" />
          </div>
        </div>
        <motion.div
          className="flex flex-wrap justify-evenly items-center gap-4 md:mt-32 sm:mt-10 mt-10 relative  border-slate-300 border-2 p-4 md:p-6  rounded-xl bg-transparent w-full "
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={variants1}>
          {gymStats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F2FD84] p-1 md:p-4 rounded-lg min-w-[250px] flex justify-center items-center flex-col  "
              variants={variants2}>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold ">
                {item.number}
              </h1>
              <p className="text-md sm:text-lg md:text-xl font-semibold text-center ">
                {item.text}
              </p>
            </motion.div>
          ))}
          {/* overlay glass effect */}
        </motion.div>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
