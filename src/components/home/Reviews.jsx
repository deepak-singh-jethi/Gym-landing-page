import { motion } from "framer-motion";
import { reviewsData } from "../../assets/staticData";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import MainButton from "../common/buttons/MainButton";

const Reviews = () => {
  return (
    <div className="container mx-auto">
      {/* Reviews Section  */}
      <div className="flex md:justify-between justify-center items-center px-4 pt-24 lg:pt-32 flex-col md:flex-row gap-14 md:gap-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          TRANSFORMATIONS SPEAK <br /> LOUDER{" "}
          <span className="text-[#F2FD84]">THAN WORDS</span>
        </h1>
        <div className="md:justify-self-end md:self-end">
          <MainButton title="View Classes" />
        </div>
      </div>

      <motion.div
        className=" overflow-hidden my-20  mx-auto relative"
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}>
        <Marquee speed={30} pauseOnClick={true}>
          {reviewsData.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
          {/* Duplicate the ReviewCard components for infinite scrolling */}
          {reviewsData.map((item, index) => (
            <ReviewCard key={index + reviewsData.length} item={item} />
          ))}
        </Marquee>
        {/* Left-right end shadow overlay */}
        <div className="absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-[#222222] "></div>
        <div className="absolute top-0 right-0 h-full w-1/6 bg-gradient-to-l from-[#222222] "></div>
      </motion.div>
    </div>
  );
};

export default Reviews;

// eslint-disable-next-line react/prop-types
