import { Helmet } from "react-helmet-async";
import Cover from "../Shared/shared component/Cover";
import useMenu from "../../hooks/UseMenu";
import SectionTitle from "../Shared/shared component/SectionTitle";
import MenuCategory from "../Shared/shared component/MenuCategory";

const Menus = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Restaurant | Menu</title>
      </Helmet>
      <Cover
        img={"https://i.ibb.co/HhfR6XW/banner3.jpg"}
        title={"our menu"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
        
      ></SectionTitle>
      <MenuCategory items={offered}   ></MenuCategory>
      <MenuCategory title={'dessert'} img={'https://i.ibb.co/b3cbSvh/dessert-bg.jpg'} items={dessert}></MenuCategory>
      <MenuCategory title={'pizza'} img={'https://i.ibb.co/T2LMGYY/pizza-bg.jpg'} items={pizza}></MenuCategory>
      <MenuCategory title={'salad'} img={'https://i.ibb.co/Gts98cp/salad-bg.jpg'} items={salad}></MenuCategory>
    </div>
  );
};

export default Menus;
