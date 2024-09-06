import { RxCross2 } from "react-icons/rx";

const Cart = ({ cart }) => {
  const { name, description, id, stock, category, image, price } = cart;
  return (
    <div className="bg-base-200 flex my-4 p-4 rounded-3xl">
      <div className="flex justify-center items-center gap-2 text-2xl font-bold ">
        <button className="bg-base-300"> - </button>
        <span>1</span>
        <button className="bg-base-300"> + </button>
      </div>
      <div className="flex p-4 w-3/4 gap-4">
        <img className="w-56 h-44 rounded-full" src={image} />
        <div>
          <h1 className="text-center text-xl font-bold">{name}</h1>
          <h2>{category}</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end p-4 w-1/2">
        <button>
          {" "}
          <RxCross2 className="text-4xl" />
        </button>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Cart;
