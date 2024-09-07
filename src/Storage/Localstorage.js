const getStoredProduct = () => {
  const storedProduct = localStorage.getItem("product");
  if (storedProduct) {
    return JSON.parse(storedProduct);
  }
  return [];
};

const saveProduct = (product) => {
  const storedProduct = getStoredProduct();
  const exist = storedProduct.find((i) => i.id === product.id);
  if (!exist) {
    storedProduct.push(product);
    localStorage.setItem("product", JSON.stringify(storedProduct));
  }
};

const removeProduct = (cart) => {
  const storedProduct = getStoredProduct();

  const remaining = storedProduct.filter(
    (storedItem) => storedItem.id !== cart.id
  );
  localStorage.setItem("product", JSON.stringify(remaining));
  console.log("Product removed successfully", remaining);
};


const incProduct = (id) => {
};

export { saveProduct, getStoredProduct, removeProduct, incProduct };
