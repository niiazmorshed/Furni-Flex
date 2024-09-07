import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { getStoredProduct, saveProduct } from "../../Storage/Localstorage";

const ShowAllcard = ({ product }) => {
  const { stock, category, image, price, description, name } = product;
  const handleProduct = (product) => {
    const exist = getStoredProduct();
    const alreadyExist = exist.some((i) => i.id === product.id);
    if (!alreadyExist) {
      saveProduct(product);
      toast.success("Added to your Cart!");
    } else {
      toast.error("Already in your cart!");
    }
  };

  return (
    <div className=" sm: p-4 sm: m-4 card bg-base-100 shadow-lg shadow-red-700/50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Products"} | Furni-Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
        <Link>
          <button
            onClick={() => handleProduct(product)}
            className="btn btn-outline  w-full"
          >
            Add To Cart
          </button>
        </Link>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ShowAllcard;
ShowAllcard.propTypes = {
  product: PropTypes.array.isRequired,
};
