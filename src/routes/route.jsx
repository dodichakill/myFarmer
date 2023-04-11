import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Education from "../pages/Education";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailProduct from "../pages/DetailProduct";
import Stock from "../pages/Stock";
import Store from "../pages/Store";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/detail-product",
    element: <DetailProduct />,
  },
  {
    path: "/stock",
    element: <Stock />,
  },
  {
    path: "/store",
    element: <Store />,
  },
]);
