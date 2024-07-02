// eslint-disable-next-line react/prop-types
const ReviewCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { name, imageUrl, review, stars } = item;
  return (
    <div className="ml-6 sm:ml-10 md:ml-16 lg:ml-20">
      <div className="flex items-center w-[400px] sm:w-[500px] md:w-[600px]">
        <img
          src={imageUrl}
          alt="review"
          className="object-cover h-64 sm:h-72 md:80  lg:h-96  w-auto  flex-1"
        />
        <div className="bg-[#1E1E1E] h-64 sm:h-72 md:80  lg:h-96 flex flex-col justify-evenly leading-normal p-4 md:p-6  border-t border-r border-b border-[#858a54]">
          <p className="text-white text-base mb-4  my-4">{review}</p>
          <div className="flex items-center"></div>
          <div className="flex items-center">
            {[...Array(stars)].map((_, index) => (
              <Stars key={index} />
            ))}
            <span className="ml-2 text-sm text-white">{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

const Stars = () => {
  return <span className="text-[#F2FD84]">&#9733;</span>;
};
