import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import FooterBanner from "../common/ui/FooterBanner";
import HeroSection from "../common/ui/HeroSection";
import { timeTableHeroUrls } from "../../assets/imageUrls";

const imageUrl =
  "https://framerusercontent.com/images/7BGFGzToOOL12GGDEFJD2guEY.png";

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
      <FooterBanner
        text="Join FitFlex today and enjoy a variety of classes throughout the day!"
        buttonTitle="Join for a class"
        imageUrl={imageUrl}>
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold font-sans text-white text-center md:text-left">
          EXPLORE OUR DIVERSE
          <br />
          <span className="text-[#F2FD84] hover:bg-red-400">
            CLASS SCHEDULE
          </span>{" "}
          <br />
          OF OUR CLASSES?
        </h1>
      </FooterBanner>
    </>
  );
};

export default TimeTable;
