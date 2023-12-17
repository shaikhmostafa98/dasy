import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Bannar from "../../../public/shoe/Banner.jpeg";
const Shoes = () => {
  const shoes = useLoaderData();
  return (
    <div>
      <div>
        <img className="w-full " src={Bannar} alt="" />
        <p className="text-3xl my-6 text-center font-bold underline ">
          Our Shose
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10">
        {shoes.map((shoe) => (
          <Cart key={shoe.id} data={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
