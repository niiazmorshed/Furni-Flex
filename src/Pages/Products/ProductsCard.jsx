import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { MdRemoveShoppingCart } from "react-icons/md";
import { saveProduct } from "../../Storage/Localstorage";
const ProductsCard = ({ product }) => {
  const { stock, category, image, price, description, name, id } = product;

  const handleProduct = (id, name) => {
    saveProduct(id);
    console.log("Chap Lagche", id, "te", "nam hoilo", name);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" sm: p-4 sm: m-4 card bg-base-100 shadow-lg shadow-red-700/50 border"
    >
      <figure className="max-h-60">
        <img src={image} />
      </figure>
      <div>
        <div className="pl-4 my-2 ">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <div className="flex justify-between">
            <p className="font-medium ">{category}</p>
          </div>
        </div>
        <div className="flex p-4 justify-between">
          <div className="text-xl font-normal">
            <span className="text-yellow-700 font-extrabold text-xl">
              {price}/-
            </span>
          </div>
          <div className="flex items-center gap-2 align-middle">
            <MdRemoveShoppingCart className="text-xl"></MdRemoveShoppingCart>
            <p className="font-bold">{stock}</p>
          </div>
        </div>
        <p className="p-2 pb-6 font-normal text-lg">{description}</p>
        <hr className="border-dashed" />
      </div>
      <div className="p-4">
        <NavLink>
          <button
            onClick={() => handleProduct(id, name)}
            className="btn btn-outline  w-full"
          >
            Add To Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductsCard;
ProductsCard.propTypes = {
  children: PropTypes.node,
};
