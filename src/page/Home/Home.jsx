
import { Link } from "react-router-dom";
import useGETPants from "../../hooks/useGETPants";
import useGETShirts from "../../hooks/useGETShirts";
import useGETShoes from "../../hooks/useGETShoes";
import Homecart from '../../Component/Cart/Homecart'
const Home = () => {
  const getShoes = useGETShoes()
  const getPants = useGETPants()
  const getShirts = useGETShirts()
  return (
    <div className="mx-5 mb-5">
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {getShirts?.shirts?.slice(0,4)?.map((data) => (
          <Homecart key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end   mt-2">
        <Link to="./shirt">
          <button className="btn bg-gradient-to-r border-0 from-purple-500 to-indigo-500 min-h-[40px] h-[40px] text-white font-bold">
            Show More
          </button>
        </Link>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {getPants?.pants?.slice(0,4)?.map((data) => (
          <Homecart key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end   mt-2">
        <Link to="./pant">
          <button className="btn bg-gradient-to-r border-0 from-purple-500 to-indigo-500 min-h-[40px] h-[40px] text-white font-bold">
            Show More
          </button>
        </Link>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {getShoes?.shoes?.slice(0,4)?.map((data) => (
          <Homecart key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end   mt-2">
        <Link to="./shoe">
          <button className="btn bg-gradient-to-r border-0 from-purple-500 to-indigo-500 min-h-[40px] h-[40px] text-white font-bold">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
