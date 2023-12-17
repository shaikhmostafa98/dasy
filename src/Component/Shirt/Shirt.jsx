import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Banner from "../../../public/shirt/Banner.webp";

const Shirt = () => {
  const shirts = useLoaderData();
  return (
    <div>
      <img className="w-full" src={Banner} alt="" />
      <p className="text-3xl text-center font-bold underline my-6 ">
        Our Shirt
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10">
        {shirts.map((shirt) => (
          <Cart key={shirt.id} data={shirt} />
        ))}
      </div>
    </div>
  );
};

export default Shirt;
