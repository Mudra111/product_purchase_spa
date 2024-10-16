import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cartMain">
      <h1 className="cartH1">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cartEmptyP">Your cart is empty!!!</p>
      ) : (
        <div>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cartImg" />
                <h2 className="cartName">{item.name}</h2>
                <h4 className="cartBrand">{item.brand}</h4>
                <p className="cartPrice">Price: &#8377;{item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item, e.target.value)}
                  className="itemInputCart"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="removeBtnCart"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3 className="totalPriceCart">
            Total Price: &#8377;{calculateTotalPrice()}
          </h3>
          <Link to="/checkout">
            <button className="checkOutBtn">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
