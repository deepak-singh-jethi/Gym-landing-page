import { CgGym } from "react-icons/cg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header
      className="text-white py-5 px-8  mx-auto fixed top-0 left-0 right-0  z-50"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Set the background color
      }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex items-center justify-between">
        <motion.ul className="flex items-center gap-20 flex-grow">
          <NavLink className="flex items-center">
            <CgGym className="lg:text-4xl xl:text-5xl text-[#F2FD84] font-bold" />
            <span className=" ml-2 text-3xl font-bold font-serif">GymBro</span>
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive ? `text-[#F2FD84] font-bold` : undefined
            }>
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-[#F2FD84] font-bold` : undefined
            }
            to="classes">
            Classes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-[#F2FD84] font-bold` : undefined
            }
            to="timetable">
            Timetable
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-[#F2FD84] font-bold` : undefined
            }
            to="about">
            About
          </NavLink>
        </motion.ul>
        <ul className="flex items-center justify-start">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? `text-[#F2FD84] font-bold` : undefined
            }>
            Contact
          </NavLink>
        </ul>
      </motion.div>
    </header>
  );
};

export default NavBar;
