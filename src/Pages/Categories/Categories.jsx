import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredProduct } from "../../Storage/Localstorage";
import Cart from "./Cart";

const Categories = () => {
  const products_data = useLoaderData();
  const [myProduct, setMyProduct] = useState([]);

  useEffect(() => {
    const storedProduct = getStoredProduct();
    if (products_data.length > 0) {
      const productStored = [];
      for (const id of storedProduct) {
        const product = products_data.find((i) => i.id === id);
        if (product) {
          productStored.push(product);
        }
      }
      setMyProduct(productStored);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Categories"} | Furni Flex</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <div className="my-32 grid grid-cols-3 gap-4 m-6">
        {/* Left-Col */}

        <div className="col-span-2 border">
          {
            myProduct.map((i)=> <Cart key={i.id} cart={i} ></Cart>)
          }
        </div>


        {/* Right-col */}
        <div className="col-span-1 border"></div>
      </div>
    </div>
  );
};

export default Categories;
