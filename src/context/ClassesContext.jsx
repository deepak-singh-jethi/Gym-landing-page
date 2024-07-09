import { createContext } from "react";
import { classesData } from "../assets/staticData";

export const ClassContext = createContext({
  classes: [],
  getClass: () => {},
});

// eslint-disable-next-line react/prop-types
export const ClassesContextProvider = ({ children }) => {
  const getClass = (title) => {
    console.log(title);
    return classesData.find((item) => item.title === title);
  };

  const value = {
    classes: classesData,
    getClass: getClass,
  };

  return (
    <ClassContext.Provider value={value}>{children}</ClassContext.Provider>
  );
};
