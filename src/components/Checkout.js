import React from "react";
import "./checkout.css";

function Checkout({ cartItems }) {
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="checkOutMain">
      <h1 className="checkOutH1">Checkout</h1>
      <div>
        <div className="checkOut-list">
          {cartItems.map((item) => (
            <div key={item.id} className="checkOut-item">
              <h3 className="checkOutName">{item.name}</h3>
              <p className="checkoutPrice">Price: &#8377;{item.price}</p>
              <p className="checkoutPrice">Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
        <h3 className="totalPriceCheckOut">
          Total Price: ${calculateTotalPrice()}
        </h3>
        <button
          onClick={() => alert("Order placed!")}
          className="placeOrderBtn"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
