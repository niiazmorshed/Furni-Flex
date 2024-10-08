import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { NavLink, useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import Footer from "../../Footer/Footer";


const Products = () => {
  const info = useLoaderData();
  const half = info.slice(0, 6);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Products"} | Furni-Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open my-32 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Page content here */}
          <div className="md:grid md:grid-cols-3 gap-6 mx-4">
            {half.map((i) => (
              <ProductsCard key={i.id} product={i}></ProductsCard>
            ))}
          </div>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            <li>
              <a className="text-xl font-semibold">Rocking Chair</a>
            </li>
            <li>
              <a className="text-xl font-semibold">Slide Chair</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink to="/showall">
          <button className="btn btn-info btn-outline w-44">Show All</button>
        </NavLink>
      </div>
      <div className="mt-20 font-sans">
          <Footer></Footer>
        </div>
    </div>
  );
};

export default Products;
