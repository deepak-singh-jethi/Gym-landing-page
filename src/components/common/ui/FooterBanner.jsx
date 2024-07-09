import { motion } from "framer-motion";
import MainButton from "../buttons/MainButton";
import HeroSectionWrapper from "./HeroSectionWrapper";

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 70,
  },
};

// eslint-disable-next-line react/prop-types
const FooterBanner = ({ children, text, buttonTitle, imageUrl }) => {
  return (
    <HeroSectionWrapper imageArray={[imageUrl]}>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 justify-center h-[60vh] container mx-auto">
        {/* ! main content div */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center items-center md:items-start gap-14  ">
          {/* main heading */}
          {children}

          <div className="space-y-6 text-center md:text-left">
            {/* side text */}
            <p className="text-lg font-medium text-gray-200">{text}</p>

            {/* button */}
            <MainButton title={buttonTitle} />
          </div>
        </motion.div>
        {/* space filler div */}
        <div className="hidden md:block"></div>
      </div>
    </HeroSectionWrapper>
  );
};

export default FooterBanner;
