import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const HeroSectionWrapper = ({ children, imageArray, wrapperHeight }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      setImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <div
      className="relative overflow-hidden w-screen bg-transparent"
      style={{
        height: `${wrapperHeight}`,
        backgroundImage: `url(${imageArray[imageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}>
      {/* Hero Section Content */}
      <div
        className="mt-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          height: "100%",
          width: "100%",
        }}>
        {children}
      </div>
    </div>
  );
};

export default HeroSectionWrapper;
