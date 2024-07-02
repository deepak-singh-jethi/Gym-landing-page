/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSectionWrapper = ({ children, imageArray, wrapperHeight }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <motion.div
      className="relative overflow-hidden w-screen bg-neutral-950 -z-10"
      style={{
        height: `${wrapperHeight}`,
      }}>
      {/* Hero Image */}
      <AnimatePresence>
        <motion.img
          key={imageIndex}
          src={imageArray[imageIndex]}
          alt={`Hero Image ${imageIndex + 1}`}
          className="absolute inset-0 object-cover w-full md:object-center object-right h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            height: `${wrapperHeight}`,
            objectFit: "cover",
            width: "100%",
            zIndex: "-1",
          }}
        />
      </AnimatePresence>
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent  opacity-50 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent  opacity-60 -z-10"></div>

      {children}
    </motion.div>
  );
};

export default HeroSectionWrapper;
