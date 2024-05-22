import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <hr />
      <br />
      <Footer />
    </div>
  );
};

export default Main;
