import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Bannner from "../Banner/Bannner";

const Home = () => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Home"} | Furni Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <Bannner></Bannner>
    </div>
  );
};

export default Home;
