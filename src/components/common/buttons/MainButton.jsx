import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
const MainButton = ({ title, routeName }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routeName);
  };
  return (
    <button
      className="bg-[#F2FD84] text-black text-sm sm:text-md md:text-xl   py-2 px-4 
    hover:bg-[#F2FD84]/90 transition-all duration-300 ease-in-out"
      onClick={handleClick}>
      {title}
    </button>
  );
};

export default MainButton;
