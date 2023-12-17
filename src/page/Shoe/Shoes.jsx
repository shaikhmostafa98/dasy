import Cart from "../../Component/Cart/Cart";
import useGETShoes from "../../hooks/useGETShoes";
const Shoes = () => {
  const data = useGETShoes();
  if (!data?.error && data?.loader) {
    return <h1 className="text-5xl">Loading...</h1>;
  }
  if (data?.error) {
    return <h1 className="text-5xl"> {data?.error} </h1>;
  }
  return (
    <div>
      <div>
        <img className="w-full " src="/shoe/Banner.jpeg" alt="" />
        <p className="text-3xl my-6 text-center font-bold underline ">
          Our Shose
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10">
        {!data?.error &&
          !data?.loader &&
          data?.shoes?.map((shoe) => <Cart key={shoe.id} data={shoe} />)}
      </div>
    </div>
  );
};

export default Shoes;
