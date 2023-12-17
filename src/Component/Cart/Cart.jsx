import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { TiStarOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";

const Cart = ({ data }) => {
  const { id, name, price, rating, img, brand } = data;
  const detailsProduct = () => {
    console.log(id);
  };
  return (
    <div className="m-2 shadow-lg rounded-md">
      <img className="p-3 h-[220px] mx-auto" src={img} alt="" />
      <div className="">
        <div className="flex  px-5 justify-between">
          <h2 className=" font-bold">{name}</h2>
          <h2>{brand}</h2>
        </div>{" "}
        <div className="flex px-5 my-2 justify-between">
          <p className="font-bold flex gap-1 font-2xl">
            Price : {price}
            <HiOutlineCurrencyBangladeshi className="pt-1 text-2xl" />
          </p>

          <Rating
            emptySymbol={<TiStarOutline />}
            fullSymbol={<GoStarFill />}
            initialRating={rating}
            readonly
          />
        </div>
        <Link to={`/product/${id}`}>
          <button
            onClick={detailsProduct}
            className="btn btn-error w-full font-bold text-lg text-white "
          >
            View Detais
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
