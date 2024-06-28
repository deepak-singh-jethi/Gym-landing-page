import HeroSection from "./HeroSection";
import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";

const Home = () => {
  return (
    <>
      <MotionBottomToTop>
        {/* Hero Section  */}
        <HeroSection />
        {/* gym stats */}
      </MotionBottomToTop>
    </>
  );
};
export default Home;
