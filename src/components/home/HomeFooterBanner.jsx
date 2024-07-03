import HeroSectionWrapper from "../common/ui/HeroSectionWrapper";
import MainButton from "./../common/buttons/MainButton";

const imageUrl =
  "https://framerusercontent.com/images/G8xMzIjY5g1A4dzMFlj6H5BFZnc.png";

const HomeFooterBanner = () => {
  return (
    <HeroSectionWrapper imageArray={[imageUrl]}>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 justify-center h-[60vh] container mx-auto ">
        <div className="hidden md:block"></div>
        <div className="w-full flex flex-col justify-center items-center md:items-start gap-8  ">
          <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold font-serif text-white text-center md:text-left font-sans">
            EADY TO START YOUR <br /> JOURNEY WITH <br />
            <span className="text-[#F2FD84] hover:bg-red-400">GymBro</span>
          </h1>

          <p className="text-lg font-medium text-gray-200">
            Reserve Your Spot Today!
          </p>
          <MainButton title="Join Now" />
        </div>
      </div>
    </HeroSectionWrapper>
  );
};

export default HomeFooterBanner;
