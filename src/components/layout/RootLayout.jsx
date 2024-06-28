import { Outlet } from "react-router";
import NavBar from "../common/ui/NavBar";
import Footer from "../common/ui/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
