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
    errorElement: <h2>404|found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shirt",
        element: <Shirt />,
        loader: async () => fetch("public/shirt.json"),
      },
      {
        path: "/pant",
        element: <Pant />,
        loader: async () => fetch("public/pant.json"),
      },
      {
        path: "/shoe",
        element: <Shoes />,
        loader: async () => fetch("public/shoe.json"),
      },
    ],
  },
]);

export default Router;
