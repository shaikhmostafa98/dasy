
import Cart from "../../Component/Cart/Cart";
import useGETPants from '../../hooks/useGETPants'

const Pant = () => {
  const data = useGETPants()
  if(!data?.error && data?.loader){
    return <h1 className="text-5xl" >Loading...</h1>
  }
  if(data?.error){
    return <h1 className="text-5xl" > {data?.error} </h1>
  }
  return (
    <div>
      <img className="w-full " src='/shoe/Banner.jpeg' alt="" />
      <p className="text-3xl text-center font-bold underline my-6 ">Our Pant</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-10">
        {
          !data?.error && !data?.loader && data?.pants?.map(pant => <Cart key={pant.id} data={pant} />)
        }
      </div>
    </div>
  );
};

export default Pant;
