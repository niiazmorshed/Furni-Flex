import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getStoredProduct,
  removeProduct,
} from "../../Storage/Localstorage";
import Cart from "./Cart";

const Categories = () => {
  const products_data = useLoaderData();
  const [myProduct, setMyProduct] = useState([]);
  const [update, setUpdate] = useState([]);

  const handleCross = (id) => {
    removeProduct(id);
    const remainigProduct = myProduct.filter((i) => i.id !== id);
    setMyProduct(remainigProduct);
  };

  const handleInc = (id) => {
    console.log("Barche", id);
    const productStored = [];

    const updatedProduct = productStored.push(id)
    setUpdate(updatedProduct);
    console.log(update)

  };

  const handleDec = (id) => {
    console.log("Komche", id);
  };

  useEffect(() => {
    const storedProduct = getStoredProduct();
    if (products_data.length > 0) {
      // const product = products_data.filter(i => storedProduct.includes(i.id));
      const productStored = [];
      for (const id of storedProduct) {
        const product = products_data.find((i) => i.id === id);
        if (product) {
          productStored.push(product);
        }
      }
      setMyProduct(productStored);
    }
  }, [products_data]);
  const totalPrice = myProduct.reduce((a, b) => a + b.price, 0);
  const totalPriceINT = parseFloat(totalPrice).toFixed(2);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Categories"} | Furni Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>

      <div className="my-32 grid grid-cols-3 gap-6 p-10 ">
        {/* Left-Col */}
        <div className="col-span-2">
          {myProduct.map((i) => (
            <Cart
              key={i.id}
              cart={i}
              handleCross={handleCross}
              handleInc={handleInc}
              handleDec={handleDec}
              update={update}
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
    </div>
  );
};

export default Categories;
