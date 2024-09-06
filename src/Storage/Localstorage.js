const getStoredProduct = () => {
  const storedProduct = localStorage.getItem("product");
  if (storedProduct) {
    
    return JSON.parse(storedProduct);
  }
  return [];
};

const saveProduct = (id) => {
  console.log(id);
  
  const storedProduct = getStoredProduct();
  const exist = storedProduct.find((i) => i === id);
  if (!exist) {
    storedProduct.push(id);
    localStorage.setItem("product", JSON.stringify(storedProduct));
    console.log("Product saved successfully");
    console.log(storedProduct);
  }
};

export { saveProduct, getStoredProduct };
