import { useParams } from "react-router";

const ClassInfo = () => {
  const { id } = useParams();

  return <div className="h-[800px] w-screen bg-red-500">{id}</div>;
};

export default ClassInfo;
