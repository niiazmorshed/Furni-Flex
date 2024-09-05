import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { stock, category, image, price, description, name } = product;
  console.log(name);
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="2000"
    className=" sm: p-4 sm: m-4 card bg-base-100 shadow-lg shadow-red-700/50"
  >
    <figure className="max-h-96">
      <img src={image} />
    </figure>
    <div>
      <div className="pl-4 my-2 ">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <div className="flex justify-between p-2">
          <p className="text-green-600 font-medium ">{description}</p>
        </div>
      </div>
      <div className="flex p-4 justify-between">
        <div className="text-xl font-normal">
          <p> {price}</p>
        </div>
        <div className="flex items-center gap-2 align-middle">
          <FaRegStar className="text-xl"></FaRegStar>
          <p className="font-bold">{stock}</p>
        </div>
      </div>
      <p className="p-2 pb-6 font-normal text-lg">{category}</p>
      <hr className="border-dashed" />
    </div>
    <div className="flex items-center justify-between p-4">
      <p>
        from{" "}
        <span className="text-yellow-700 font-extrabold text-xl">
          {price}
        </span>
        /night
      </p>
      <NavLink >
        <button className="btn btn-outline btn-accent">View Property</button>
      </NavLink>
    </div>
  </div>
  );
};

export default ProductsCard;
