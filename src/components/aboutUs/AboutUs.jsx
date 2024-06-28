import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import HeroSection from "../common/ui/HeroSection";
import { aboutHeroUrls } from "../../assets/imageUrls";

const AboutUs = () => {
  return (
    <>
      <MotionBottomToTop>
        <HeroSection
          word="about"
          spanWord="gymbro"
          imageArray={aboutHeroUrls}
          page="about"
        />
      </MotionBottomToTop>
    </>
  );
};

export default AboutUs;
