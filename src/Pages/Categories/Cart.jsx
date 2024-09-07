import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";

const Cart = ({ cart, handleCross, handleDec, handleInc }) => {
  const { name, id, category, image, price } = cart;

  return (
    <div className="bg-base-200 flex my-4 p-4 rounded-3xl">
      <div className="flex justify-center items-center gap-2 text-2xl font-bold">
        <button onClick={() => handleDec(id)} className="bg-base-300">
          {" "}
          -{" "}
        </button>
        <span>3</span>
        <button onClick={() => handleInc(id)} className="bg-base-300">
          {" "}
          +{" "}
        </button>
      </div>
      <div className="md:flex p-4 w-3/4 gap-4">
        <img className="md:w-56 md:h-44 rounded-full" src={image} />
        <div>
          <h1 className="text-center text-xl font-bold">{name}</h1>
          <h2>{category}</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end p-4 w-1/2">
        <button onClick={() => handleCross(cart)}>
          {" "}
          <RxCross2 className="text-4xl" />
        </button>
        <span className="text-lg font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleCross: PropTypes.func.isRequired,
  handleInc: PropTypes.func.isRequired,
  handleDec: PropTypes.func.isRequired,
  update: PropTypes.array.isRequired,
};
