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
import ShowAll from "../Pages/Products/ShowAll";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
        loader: () => fetch("/info.json"),
      },
      {
        path: "/categories",
        element: (
          <PrivateRoute>
            <Categories></Categories>
          </PrivateRoute>
        ),
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
      {
        path: "/showall",
        element: (
          <PrivateRoute>
            <ShowAll></ShowAll>
          </PrivateRoute>
        ),
        loader: () => fetch("/info.json"),
      },
    ],
  },
]);

export default router;
