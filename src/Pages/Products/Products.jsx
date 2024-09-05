import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";

const Products = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Products"} | Furni Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open my-4">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-2 p-2">
          {/* Page content here */}
          <div>
            <h1>kire</h1>
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
    </div>
  );
};

export default Products;
