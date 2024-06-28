/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSectionWrapper = ({ children, imageArray, wrapperHeight }) => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [imageArray.length]);

  return (
    <AnimatePresence>
      <motion.div
        className="relative flex items-center justify-start"
        style={{
          height: `${wrapperHeight}`,
        }}>
        {/* Hero Image */}

        <motion.img
          key={heroImageIndex}
          src={imageArray[heroImageIndex]}
          alt={`Hero Image ${heroImageIndex + 1}`}
          className="absolute inset-0 object-cover w-full md:object-center object-right h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            height: `${wrapperHeight}`,
            objectFit: "cover",
            width: "100%",
            zIndex: "-1",
          }}
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSectionWrapper;
