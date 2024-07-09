/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { ClassContext } from "../../context/ClassesContext";
import HeroSection from "../common/ui/HeroSection";
import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import BenefitsOfClass from "./BenefitsOfClass";

const ClassInfo = () => {
  const { id } = useParams();
  const { getClass } = useContext(ClassContext);
  const classData = getClass(id);

  if (!classData) {
    return <div className="container mx-auto my-10">Class not found</div>;
  }

  const { title, backgroundImage, benefits } = classData;

  return (
    <>
      <MotionBottomToTop>
        <HeroSection
          word={title}
          spanWord=""
          imageArray={[backgroundImage]}
          page={`classes > ${title.toLowerCase()}`}
        />
      </MotionBottomToTop>
      {/* Class Details Section */}
      <div className="container mx-auto space-y-20 my-20">
        {/* class details */}
        <ClassDetails classData={classData} />
        {/* benefits of class */}
      </div>
      <BenefitsOfClass benefits={benefits} />
    </>
  );
};

export default ClassInfo;

// eslint-disable-next-line no-unused-vars
const ClassDetails = ({ classData }) => {
  const variantsLi = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => {
      return {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.2,
        },
      };
    },
  };
  const { title, coverImage, type, level, duration, description } = classData;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-2">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          src={coverImage}
          alt={title}
          className="h-full w-auto object-cover object-center"
        />

        <ul className="flex flex-col space-y-6 text-xl text-gray-400 h-full justify-center items-start">
          {[
            { label: "Title", value: title },
            { label: "Type", value: type },
            { label: "Level", value: level },
            { label: "Duration", value: duration },
            { label: "Description", value: description },
          ].map(({ label, value }, index) => (
            <motion.li
              key={label}
              className="space-y-2"
              custom={index}
              variants={variantsLi}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <h3 className="text-white text-lg">{label}:</h3>
              <p className="text-gray-400 text-sm md:text-base">{value}</p>
              <hr className="border-gray-600" />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};
