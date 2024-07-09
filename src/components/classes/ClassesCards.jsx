import { useContext, useState } from "react";
import { ClassContext } from "../../context/ClassesContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const variantsViewButton = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const ClassesCards = () => {
  const navigate = useNavigate();
  const { classes } = useContext(ClassContext);
  const [selectedCardTitle, setSelectedCardTitle] = useState();

  const handleCard = (title) => {
    setSelectedCardTitle(title);
  };
  const handleClickCard = (title) => {
    navigate(`/classes/${title}`);
  };

  return (
    <>
      {classes.map((item) => (
        <div
          className="bg-[#272727] h-full border-[1px] border-[#3d3d3d] hover:border-[#fadd84] hover:scale-[1.009] transition-all ease-in duration-500 "
          key={item.title}
          onMouseEnter={() => handleCard(item.title)}
          onMouseLeave={() => handleCard(null)}
          onClick={() => handleClickCard(item.title)}>
          <div className="flex justify-center items-center flex-col gap-3">
            <div className="relative w-full h-full">
              <img
                src={item.coverImage}
                alt="image"
                className="md:h-[350px] lg:h-[370px] h-[300px] 
                w-full min-w-[320px]
                object-cover object-center "
              />
              {selectedCardTitle === item.title && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  exit="hidden"
                  variants={variantsViewButton}
                  className="absolute top-[45%] left-[36%] px-3 py-2 w-fit bg-[#dadc69] transition-opacity duration-300">
                  View Details
                </motion.div>
              )}
              {/* show level at top right inside a box */}
              <div className="absolute top-1 right-1 bg-[#2a2a2a] text-white text-lg px-3 py-2  font-bold ">
                {item.level}
              </div>
            </div>

            <div className="text-center space-y-4 py-7">
              <h1
                className={`md:text-2xl text-xl 
              ${
                selectedCardTitle === item.title
                  ? "text-[#f8fa84] underline"
                  : "text-white"
              }
               font-bold`}>
                {item.title.toUpperCase()}
              </h1>
              <p className="text-[#898989] text-xl md:text-lg">{item.type}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClassesCards;
