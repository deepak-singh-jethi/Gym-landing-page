import { Outlet } from "react-router";
import NavBar from "../common/ui/NavBar";
import Footer from "../common/ui/Footer";
import { ClassesContextProvider } from "../../context/ClassesContext";

const RootLayout = () => {
  return (
    <ClassesContextProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </ClassesContextProvider>
  );
};

export default RootLayout;
