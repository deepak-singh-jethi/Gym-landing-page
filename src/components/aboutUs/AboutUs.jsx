import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import FooterBanner from "../common/ui/FooterBanner";
import HeroSection from "../common/ui/HeroSection";
import { aboutHeroUrls } from "../../assets/imageUrls";

const imageUrl =
  "https://framerusercontent.com/images/otdxJZ42u52ArVadaY0BPYAiW8.png";

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
      <FooterBanner
        text="Join FitFlex today and enjoy a variety of classes throughout the day!"
        buttonTitle="Join for a class"
        imageUrl={imageUrl}>
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold font-serif text-white text-center md:text-left">
          READY TO EMBARK ON <br /> YOUR
          <span className="text-[#F2FD84] hover:bg-red-400">
            FITNESS JOURNEY
          </span>{" "}
          <br />
          WITH GymBro?
        </h1>
      </FooterBanner>
    </>
  );
};

export default AboutUs;
