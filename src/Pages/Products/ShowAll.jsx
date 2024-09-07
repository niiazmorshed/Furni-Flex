import { useLoaderData } from "react-router-dom";
import ShowAllcard from "./ShowAllcard";
import Footer from "../../Footer/Footer";

const ShowAll = () => {
  const info = useLoaderData();
  return (
    <div>
      <div className="md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto my-32">
        {info.map((i) => (
          <ShowAllcard key={i} product={i}></ShowAllcard>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ShowAll;
