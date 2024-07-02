import HeroSection from "./HeroSection";
import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <MotionBottomToTop>
        {/* Hero Section  */}

        <HeroSection />
        {/* gym reviews */}
        <Reviews />
      </MotionBottomToTop>
    </>
  );
};
export default Home;
