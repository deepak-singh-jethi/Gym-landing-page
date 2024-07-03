import HeroSection from "./HeroSection";
import MotionBottomToTop from "../common/framerMotion/MotionBottomToTop";
import Reviews from "./Reviews";

import Features from "./Features";
import Plans from "./Plans";
import HomeFooterBanner from "./HomeFooterBanner";

const Home = () => {
  return (
    <>
      {/* Hero Section  */}

      <MotionBottomToTop>
        <HeroSection />
      </MotionBottomToTop>

      {/* gym reviews */}

      <Reviews />
      {/* plans */}
      <Plans />
      {/* features */}
      <Features />

      {/* footer banner */}
      <HomeFooterBanner />
    </>
  );
};
export default Home;
