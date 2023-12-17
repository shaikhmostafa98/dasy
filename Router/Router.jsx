import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../src/Component/Home/Home";
import Shoes from "../src/Component/Shoe/Shoes";
import Pant from "../src/Component/Pant/Pant";
import Shirt from "../src/Component/Shirt/Shirt";
import Product from "../src/Component/Product/Product";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shirt",
        element: <Shirt />,
        loader: () => fetch("../public/shirt.json"),
      },
      {
        path: "/pant",
        element: <Pant />,
        loader: () => fetch("../public/pant.json"),
      },
      {
        path: "/shoe",
        element: <Shoes />,
        loader: () => fetch("../public/shoe.json"),
      },
      {
        path: "/product/:id",
        element: <Product />,
        loader: () => fetch("../public/shoe.json"),
      },
    ],
  },
]);

export default Router;
