import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Banner from "../../../public/pant/Banner.webp";

const Pant = () => {
  const pants = useLoaderData();

  return (
    <div>
      <img className="w-full " src={Banner} alt="" />
      <p className="text-3xl text-center font-bold underline my-6 ">Our Pant</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10">
        {pants.map((pant) => (
          <Cart key={pant.id} data={pant} />
        ))}
      </div>
    </div>
  );
};

export default Pant;
