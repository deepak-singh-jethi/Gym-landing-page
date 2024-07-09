import { useContext, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { ClassContext } from "../../context/ClassesContext";
import HeroSection from "../common/ui/HeroSection";

const ClassInfo = () => {
  const { id } = useParams();
  const { getClass } = useContext(ClassContext);
  const classData = useRef();
  classData.current = getClass(id);

  return (
    <>
      <HeroSection
        word={classData.current?.title}
        spanWord=""
        imageArray={[classData.current?.backgroundImage]}
        page={`classes > ${classData.current?.title.toLowerCase()} `}>
        <h1>{classData.current?.title}</h1>
      </HeroSection>
      <div className="container mx-auto my-10"></div>
    </>
  );
};

export default ClassInfo;
