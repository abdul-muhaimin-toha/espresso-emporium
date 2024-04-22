import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-440px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
