import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";

const Categories = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Categories"} | Furni Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <div className="my-32 grid grid-cols-3">
        {/* Left-Col */}
        <div className="col-span-2">
          
        </div>
        {/* Right-col */}
          <div className="col-span-1">

          </div>
      </div>
    </div>
  );
};

export default Categories;
