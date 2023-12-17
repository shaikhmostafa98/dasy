import { useState } from "react";

import Homecart from "../Cart/Homecart";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [shirts, setShirts] = useState([]);
  const [pants, setpants] = useState([]);
  const [shoes, setShoes] = useState([]);

  fetch("shirt.json")
    .then((res) => res.json())
    .then((data) => setShirts(data));
  fetch("pant.json")
    .then((res) => res.json())
    .then((data) => setpants(data));
  fetch("shoe.json")
    .then((res) => res.json())
    .then((data) => setShoes(data));
  console.log(typeof shirts);
  const myShirt = shirts.slice(0, 4);
  const myPant = pants.slice(0, 4);
  const myShoes = shoes.slice(0, 4);
  return (
    <div className="mx-5 mb-5">
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {myShirt.map((data) => (
          <Homecart key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end   mt-2">
        <NavLink to="./shirt">
          <button className="btn bg-gradient-to-r border-0 from-purple-500 to-indigo-500 min-h-[40px] h-[40px] text-white font-bold">
            Show More
          </button>
        </NavLink>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {myPant.map((data) => (
          <Homecart key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end   mt-2">
        <NavLink to="./pant">
          <button className="btn bg-gradient-to-r border-0 from-purple-500 to-indigo-500 min-h-[40px] h-[40px] text-white font-bold">
            Show More
          </button>
        </NavLink>
      </div>
      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {myShoes.map((data) => (
          <Homecart key={data.id} data={data} />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end   mt-2">
        <NavLink to="./shoe">
          <button className="btn bg-gradient-to-r border-0 from-purple-500 to-indigo-500 min-h-[40px] h-[40px] text-white font-bold">
            Show More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
