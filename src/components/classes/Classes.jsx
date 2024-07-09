import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import HeroSection from "../common/ui/HeroSection";
import { classesHeroUrls } from "../../assets/imageUrls";
import FooterBanner from "../common/ui/FooterBanner";
import { ClassesContextProvider } from "../../context/ClassesContext";
import ClassesCards from "./ClassesCards";

const imageUrl =
  "https://framerusercontent.com/images/QgA5RFWqA3yEGfTEQ0RZT0HrnKk.png";

const Classes = () => {
  return (
    <ClassesContextProvider>
      <div className="">
        <MotionBottomToTop>
          <HeroSection
            word="Classes to "
            spanWord="Guide"
            imageArray={classesHeroUrls}
            page="classes"
          />
        </MotionBottomToTop>

        <div className="container my-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center w-full  h-full py-10">
            <ClassesCards />
          </div>
        </div>

        <FooterBanner
          text="Reserve Your Spot Today!"
          buttonTitle="Join Now"
          imageUrl={imageUrl}>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold  text-white text-center md:text-left font-sans">
            READY TO EXPERIENCE <br />
            <span className="text-[#F2FD84] hover:bg-red-400">
              THE VARIETY AND <br /> EFFECTIVENESS
            </span>
            OF OUR <br /> CLASSES?
          </h1>
        </FooterBanner>
      </div>
    </ClassesContextProvider>
  );
};

export default Classes;
