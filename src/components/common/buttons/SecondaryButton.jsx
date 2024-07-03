import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecondaryButton = ({ title, routeName }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routeName);
  };
  return (
    <button
      className=" text-white text-sm sm:text-md md:text-xl py-2 px-4 border border-white "
      onClick={handleClick}>
      {title}
    </button>
  );
};

export default SecondaryButton;
