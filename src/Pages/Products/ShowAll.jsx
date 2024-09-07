import { useLoaderData } from "react-router-dom";
import ShowAllcard from "./ShowAllcard";

const ShowAll = () => {
  const info = useLoaderData();
  return (
    <div className="md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto my-32">
      {info.map((i) => (
        <ShowAllcard key={i} product={i}></ShowAllcard>
      ))}
    </div>
  );
};

export default ShowAll;
