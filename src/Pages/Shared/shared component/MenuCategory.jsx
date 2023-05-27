import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuCard from "./MenuCard";

const MenuCategory = ({ items ,title,img }) => {
  return (
  <div className="pt-8">
      {title && <Cover
    img={img}
    title={title}
  ></Cover>}
    <div className="grid md:grid-cols-2 gap-10 p-3 ">
      {items.map((item) => (
        <MenuCard key={item._id} item={item}></MenuCard>
      ))}
    </div>
{ title &&
  <div className="text-center" >
  <Link to={`/order/${title}`}  >
  <button className="btn btn-outline border-0 border-b-4 border-white    mt-3">Order Now</button>
  </Link>
  
  </div>
}

  </div>
  );
};

export default MenuCategory;
