const Cart = ({ cart }) => {
  const { name, description } = cart;
  return (
    <div>
      <h1>Kire kiii {name} </h1>
      <h1>Kire kiii {description} </h1>
    </div>
  );
};

export default Cart;
