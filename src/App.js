import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Favorites from "./components/Favorites";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      alert("Product added to cart successfully..");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Add product to favorites
  const addToFavorites = (product) => {
    if (!favoriteItems.find((item) => item.id === product.id)) {
      setFavoriteItems([...favoriteItems, product]);
      alert("Product added to Favorite successfully..");
    }
  };

  // Update quantity in cart
  const updateQuantity = (product, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: parseInt(quantity) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    alert("Product removed from cart successfully..");
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="mainApp">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  addToCart={addToCart}
                  addToFavorites={addToFavorites}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductList
                  addToCart={addToCart}
                  addToFavorites={addToFavorites}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/favorites"
              element={<Favorites favoriteItems={favoriteItems} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cartItems={cartItems} />}
            />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
