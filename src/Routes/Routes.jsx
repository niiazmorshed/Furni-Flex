import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Categories from "../Pages/Categories/Categories";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Review from "../Our Review/Review";
import AboutUs from "../About Us/AboutUs";
import Error from "../Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("/public/info.json"),
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
        loader: () => fetch("/public/info.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

export default router;
