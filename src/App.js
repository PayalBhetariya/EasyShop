import React from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/EasyShop",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart /> ,
  },
  {
    path: "/about",
    element: <About /> ,
  },
  {
    path: "/contact",
    element: <Contact /> ,
  },
]);
function App() {
  return (
    <>
      <Navigation />
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;