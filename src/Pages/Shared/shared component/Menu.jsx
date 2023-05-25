import SectionTitle from "./SectionTitle";
import MenuCard from "./MenuCard";
import useMenu from "../../../hooks/UseMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Popular items"}
        heading={"From our menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 p-3">
        {popular.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
      {/* <button className="btn btn-secondary text-center">More</button> */}
    </section>
  );
};

export default Menu;
