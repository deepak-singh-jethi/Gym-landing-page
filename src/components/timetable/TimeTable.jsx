import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import HeroSection from "../common/ui/HeroSection";
import { timeTableHeroUrls } from "../../assets/imageUrls";

const TimeTable = () => {
  return (
    <>
      <MotionBottomToTop>
        <HeroSection
          word="Timetable "
          spanWord=" Domination"
          imageArray={timeTableHeroUrls}
          page="contact"
        />
      </MotionBottomToTop>
    </>
  );
};

export default TimeTable;
