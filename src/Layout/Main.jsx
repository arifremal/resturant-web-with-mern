import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
  const location =useLocation()
  const noHeaderFooter = location.pathname.includes('login')
  return <div>
    { noHeaderFooter || <Header></Header>}
    <Outlet></Outlet>
    {noHeaderFooter ||  <Footer></Footer>}
  </div>;
};

export default Main;
