import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import HeroSection from "../common/ui/HeroSection";
import { classesHeroUrls } from "../../assets/imageUrls";

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
    </div>
  );
};

export default Classes;
