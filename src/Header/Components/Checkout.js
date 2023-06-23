import logo from "../../Images/shopping-cart-solid.svg";

const Checkout = ({checkout}) => {
    const filterCheckout = checkout.filter((item) => {
        if(item.bought === true) {
            return item
        }
    })
    return (
        <div className="checkout">
            <img src={logo} alt="basket"/>
            <span className="counter">{filterCheckout.length}</span>
        </div>
    );
};

export default Checkout;