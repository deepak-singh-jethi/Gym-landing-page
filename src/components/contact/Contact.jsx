import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import HeroSection from "../common/ui/HeroSection";
import { contactHeroUrls } from "../../assets/imageUrls";

const Contact = () => {
  return (
    <>
      <MotionBottomToTop>
        <HeroSection
          word="Let's get in"
          spanWord=" touch"
          imageArray={contactHeroUrls}
          page="contact"
        />
      </MotionBottomToTop>
    </>
  );
};

export default Contact;
