import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  getStoredProduct,
  incProduct,
  removeProduct,
} from "../../Storage/Localstorage";
import Cart from "./Cart";
import Footer from "../../Footer/Footer";

const Categories = () => {
  const [myProduct, setMyProduct] = useState([]);


  const handleCross = (cart) => {
    removeProduct(cart);
    setMyProduct(myProduct.filter((i) => i.id !== cart.id));
};



  const handleInc = (id) => {
    console.log("Increase", id);
    incProduct(id);
  };

  const handleDec = (id) => {
    console.log("Decrease", id);
  };

  useEffect(() => {
    const storedProduct = getStoredProduct();
    if (storedProduct.length > 0) {
      // const product = products_data.filter(i => storedProduct.includes(i.id));
      setMyProduct(storedProduct);
    }
  }, []);

  const totalPrice = myProduct.reduce((a, b) => a + b.price, 0);
  const totalPriceINT = parseFloat(totalPrice).toFixed(2);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"My Cart"} | Furni-Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>

      <div className="my-32 md:grid md:grid-cols-3 md:gap-6 sm:gap-2  p-10 ">
        {/* Left-Col */}
        <div className="col-span-2">
          {myProduct.map((i) => (
            <Cart
              key={i.id}
              cart={i}
              handleCross={handleCross}
              handleInc={handleInc}
              handleDec={handleDec}
            ></Cart>
          ))}
        </div>

        {/* Right-col */}
        <div className="col-span-1">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Order Details</h1>
          </div>
          <br />
          <div className="flex justify-around bg-base-300 rounded-3xl p-4">
            <div className="text-center text-xl font-semibold">
              <h1>Subtotal : </h1>
              <h1>Shipping : </h1>
              <h1>Vat :</h1>

              <h1 className="pt-4 font-extrabold text-3xl">Total Price:</h1>
            </div>

            <div className="text-center text-xl font-semibold">
              <p>{totalPriceINT}/-</p>
              <p>Free</p>
              <p>$-</p>

              <h1 className="pt-4 text-yellow-700 font-extrabold text-3xl">
                {totalPriceINT}/-
              </h1>
              <hr className="border-dotted" />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="btn btn-outline w-3/4">Make Payment</button>
          </div>
        </div>
      </div>
      <div className="mt-20 font-sans">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Categories;
