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
      <div>
        <h1>Categoreis Section Comming Soon</h1>
      </div>
    </div>
  );
};

export default Categories;
