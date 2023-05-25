import SectionTitle from "../shared component/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './feature.css'

const Featured = () => {
    return (
        <div>
            <div className="featured-item text-white">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center   py-20 px-36 pt-12">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>June,2021</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            praesentium animi placeat earum, repellat eligendi explicabo
            incidunt in quo tenetur dicta sit cupiditate fugiat labore
            perspiciatis esse recusandae harum, ut ullam? Asperiores earum
            nesciunt rerum incidunt adipisci nam quis ducimus optio, corporis,
            minima eveniet? Aperiam quidem aliquid asperiores ab minus!
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-white   text-white mt-3">Order Now</button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Featured;