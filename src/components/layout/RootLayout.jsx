import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="py-10">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default RootLayout;
