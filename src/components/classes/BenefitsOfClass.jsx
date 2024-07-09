/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";

// eslint-disable-next-line react/prop-types

const variants = {
  hidden: {
    opacity: 0,
    y: -70,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 120,
    },
  }),
};

const BenefitsOfClass = ({ benefits }) => {
  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8 w-screen">
      {/* Benefits */}
      <MotionBottomToTop>
        <h2 className="text-4xl md:text-6xl text-white font-bold pt-10 md:pt-20 pb-6 md:pb-16 text-center">
          BENEFITS
        </h2>
      </MotionBottomToTop>

      <motion.ul
        transition={{ delayChildren: 1 }}
        className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit, index) => (
          <motion.li
            variants={variants}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={benefit.title}
            whileHover={{ scale: 1.009 }}
            className="
                flex flex-col items-center justify-center gap-4 p-6 shadow-lg  w-[300px] h-[320px]">
            <img
              src={benefit.iconUrl}
              alt={benefit.title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-xl font-semibold text-white text-center ">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-center">{benefit.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default BenefitsOfClass;
