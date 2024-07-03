import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import HeroSection from "../common/ui/HeroSection";
import { classesHeroUrls } from "../../assets/imageUrls";
import FooterBanner from "../common/ui/FooterBanner";

const imageUrl =
  "https://framerusercontent.com/images/QgA5RFWqA3yEGfTEQ0RZT0HrnKk.png";

const Classes = () => {
  return (
    <div className="">
      <MotionBottomToTop>
        <HeroSection
          word="Classes to "
          spanWord="Guide"
          imageArray={classesHeroUrls}
          page="classes"
        />
      </MotionBottomToTop>
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
  );
};

export default Classes;
