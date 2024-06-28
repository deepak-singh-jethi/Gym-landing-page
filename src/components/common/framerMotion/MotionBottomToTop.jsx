import { motion } from "framer-motion";

const varients = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

// eslint-disable-next-line react/prop-types
const MotionBottomToTop = ({ children }) => {
  return (
    <motion.div
      variants={varients}
      initial="hidden"
      animate="visible"
      viewport={{
        once: true,
      }}
      transition={{ duration: 0.9 }}>
      {children}
    </motion.div>
  );
};

export default MotionBottomToTop;
