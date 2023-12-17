import { Outlet } from "react-router-dom";
import Nav from "../src/Component/Nav/Nav";
import Footer from "../src/Component/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
