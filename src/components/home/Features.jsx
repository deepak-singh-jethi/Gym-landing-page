import { motion } from "framer-motion";
import { gymBroDetails } from "../../assets/staticData";

const variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.2,
    },
  }),
};

const Features = () => {
  const imageUrl =
    "https://framerusercontent.com/images/SqX15jQW6ndCetit2gVtmUNrmk.png";
  return (
    <div className="container mx-auto md:my-24 lg:my-32 my-[5.5rem] px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center md:text-left text-white">
        <span className="text-[#F2FD84]">WHY GYMBRO </span> IS YOUR IDEAL <br />{" "}
        FITNESS PARTNER
      </h1>
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col items-start justify-center gap-6">
          {gymBroDetails.map((item, index) => (
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
              className="flex flex-col items-start gap-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white flex items-center">
                {/* check mark with yellow background and black check sign */}
                <span className="mr-4 bg-[#F2FD84] rounded-full text-xs h-4 w-4 block text-center">
                  {" "}
                  &#x2714;
                </span>
                {item.title}
              </h1>
              <p className="text-gray-400 ml-8">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-10 md:mt-0">
          <img
            src={imageUrl}
            alt="image"
            className="w-full md:max-w-md h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
