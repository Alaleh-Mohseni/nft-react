import Routers from "../../config/route";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
