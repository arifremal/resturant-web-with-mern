import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuCard from "./MenuCard";


const Menu = () => {
    const [menu,setMenu]= useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> {
            const popularItems = data.filter(item=> item.category ==='popular')
            setMenu(popularItems)})
    },[])
    return (
        <section className="mb-12">
            <SectionTitle
            subHeading={'Popular items'}
            heading={'From our menu'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10 p-3">
                {
                    menu.map(item=> <MenuCard
                    key={item._id}
                    item={item}
                    ></MenuCard> )
                }
            </div>
        </section>
    );
};

export default Menu;