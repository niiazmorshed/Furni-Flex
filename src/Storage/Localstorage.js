const getStoredProduct = () => {
  const storedProduct = localStorage.getItem("product");
  if (storedProduct) {
    return JSON.parse(storedProduct);
  }
  return [];
};

const saveProduct = (id) => {
  const storedProduct = getStoredProduct();
  const exist = storedProduct.find((i) => i === id);
  if (!exist) {
    storedProduct.push(id);
    localStorage.setItem("product", JSON.stringify(storedProduct));
    console.log("Product saved successfully");
    // console.log(storedProduct);
  }
};

const removeProduct = (id) => {
  const storedProduct = getStoredProduct();
  console.log(storedProduct);
  const remaining = storedProduct.filter((i) => i != id);
  localStorage.setItem("product", JSON.stringify(remaining));
};

const incProduct = (id) => {
  // const storedProduct = getStoredProduct();

};

export { saveProduct, getStoredProduct, removeProduct, incProduct };
