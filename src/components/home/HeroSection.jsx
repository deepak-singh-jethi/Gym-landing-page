import { homeHeroUrls } from "../../assets/imageUrls";
import HeroSectionWrapper from "../common/HeroSectionWrapper";
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
      {/* hero headings para and buttons */}
      <div className="flex flex-col justify-center items-start container z-50 mx-6 sm:mx-auto gap-6 md:gap-10 lg:gap-32 mt-[120px]  md:mt-[140px] lg:mt-[180px]">
        {" "}
        <motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight">
            <span className="text-[#F2FD84]">ACHIEVE</span> MORE THAN JUST
            FITNESS
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 max-w-xl">
            Combine strength, flexibility, and endurance in a community that
            values well-rounded health and supportive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-10">
            <MainButton title="Join Now" />
            <SecondaryButton title="Learn More" />
          </div>
        </motion.div>
        {/* stats section */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:mt-8 mt-4 border bottom-2 border-white rounded-lg md:p-6 p-4 w-full relative"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={variants1}>
          {/* overlay */}
          <div className="absolute inset-0 bg-white opacity-10 z-0"></div>
          {/* stats cards */}
          {gymStats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#F2FD84] p-4 rounded-lg min-w-[250px] flex justify-center items-center flex-col"
              variants={variants2}
              viewport={{ once: true }}>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                {item.number}
              </h1>
              <p className="text-md sm:text-lg md:text-xl font-semibold">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
