import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cartdetails = ({ data }) => {
  const { name, price, rating, img, brand } = data;

  const notify = () => toast(`${name} Add to cart.`);
  return (
    <div className="m-2 shadow-lg rounded-md">
      <img className="p-3 h-[220px] mx-auto" src={img} alt="" />
      <div className="">
        <div className="flex  px-5 justify-between">
          <h2 className="text-xl font-bold">{name}</h2>
          <h2>{brand}</h2>
        </div>{" "}
        <div className="flex px-5 my-2 justify-between">
          <p className="font-bold flex gap-1 font-2xl">
            Price : {price}
            <HiOutlineCurrencyBangladeshi className="pt-1 text-2xl" />
          </p>
          <h2>{rating}</h2>
        </div>
        <button
          onClick={notify}
          className="btn btn-error w-full font-bold text-lg text-white "
        >
          View Detais <FaCartPlus />
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cartdetails;
