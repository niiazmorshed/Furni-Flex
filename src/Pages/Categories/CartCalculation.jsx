

const CartCalculation = ({calculation}) => {
    const {id, price, stock} = calculation;
    return (
        <div className="bg-base-200 my-8 p-4">
            <h1>{price}</h1>
        </div>
    );
};

export default CartCalculation;