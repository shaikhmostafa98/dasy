import { NavLink } from "react-router-dom";
import logo from "../../../public/Logo/logo-2.png";
import pant from "./pant.jpg";
import shirt from "./shirt.png";
import shoe from "./shoe.png";

const Nav = () => {
  return (
    <div>
      <div className="px-5 py-3 shadow-md mx-auto flex align-middle justify-between">
        <div>
          <NavLink>
            <img className="pt-2 w-8" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="flex gap-4 md:gap-12 lg:hidden pt-1  justify-center align-middle">
          <NavLink to="./shirt">
            <img className="w-8 h-8" src={shirt} alt="" />
          </NavLink>{" "}
          <NavLink to="./pant">
            <img className="w-8 h-8" src={pant} alt="" />
          </NavLink>{" "}
          <NavLink to="./shoe">
            <img className="pt-2 w-8" src={shoe} alt="" />
          </NavLink>
        </div>
        <div className="lg:flex mt-1 gap-4 text-xl font-semibold hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800"
                : "font-semibold"
            }
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/shirt"
            className={({ isActive }) =>
              isActive
                ? " text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800"
                : "font-semibold"
            }
          >
            Shirt
          </NavLink>{" "}
          <NavLink
            to="/pant"
            className={({ isActive }) =>
              isActive
                ? " text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800"
                : "font-semibold"
            }
          >
            Pant
          </NavLink>{" "}
          <NavLink
            to="/shoe"
            className={({ isActive }) =>
              isActive
                ? "text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-800"
                : "font-semibold"
            }
          >
            Shoes
          </NavLink>
        </div>

        <div>
          <button className="btn h-10 min-h-[20px] btn-error">Login</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Nav;

/*
<div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <NavLink>
            <img className="w-10" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-xl font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shirt">Shirt</NavLink>
            <NavLink to="/pant">Pant</NavLink>
            <NavLink to="/shoe">Shoe</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-error">Login</a>
        </div>
      </div>*/
