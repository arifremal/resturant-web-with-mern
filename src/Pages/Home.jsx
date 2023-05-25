import { Helmet } from "react-helmet-async";
import Banner from "../compnents/Banner";
import Slider from "../compnents/Slider";
import Featured from "./Shared/Feature/Featured";
import Menu from "./Shared/shared component/Menu";
import Testimonials from "./Shared/shared component/Testimonials";

const Home = () => {
  return (
    <div>
           <Helmet>
        <title>Restaurant | Home</title>
      </Helmet>
      <Banner></Banner>
      <Slider></Slider>
      <Menu></Menu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
