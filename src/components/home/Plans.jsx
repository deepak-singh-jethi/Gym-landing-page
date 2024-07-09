import { motion } from "framer-motion";
import { plans } from "../../assets/staticData";
import MainButton from "../common/buttons/MainButton";

const variants1 = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 70,
  },
};
const variants2 = {
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: 0.5 * index,
    },
  }),
  hidden: {
    opacity: 0,
    y: 70,
  },
};

const Plans = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <motion.div
        className="flex justify-center items-center flex-col py-10 gap-4 "
        variants={variants1}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center  text-white">
          <span className="text-[#F2FD84]">FLEXIBLE</span> PLANS <br /> FOR
          EVERY BUDGET
        </h1>
        <p className="text-gray-400 md:text-left text-center">
          Choose a plan that suits you. No long-term commitments required.
        </p>
      </motion.div>
      <motion.div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {plans.map((plan, index) => (
          <motion.div
            variants={variants2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="flex flex-col items-center  justify-between gap-6 md:gap-10  py-10 bg-gradient-to-b from-[#262625] to-[#353535]  border-[0.1px] border-gray-400  w-[300px] sm:w-[350px] md:w-[380px]  h-full">
            <h2 className="text-xl font-medium text-white ">{plan.plan}</h2>
            <p className="text-6xl font-bold text-[#F2FD84]">
              {plan.price}
              <span className="text-sm font-bold">{plan.duration}</span>
            </p>

            <p className="text-sm  bg-[#373737] w-full text-center py-4 text-white">
              {plan.frequency}
            </p>

            <ul className="list-none space-y-6">
              {plan.access.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex justify-start gap-2  items-center">
                  <>
                    <span className="text-black font-bold text-xs h-4 w-4 bg-[#F2FD84] rounded-full flex justify-center items-center">
                      {" "}
                      &#10003;
                    </span>
                    {item}
                  </>
                </li>
              ))}
            </ul>
            <MainButton title={plan.buttonText}></MainButton>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Plans;
