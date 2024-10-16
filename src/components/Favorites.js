import React from "react";
import "./favorites.css";

const Favorites = ({ favoriteItems }) => {
  return (
    <div className="favMain">
      <h1 className="favH1">Your Favorites</h1>
      {favoriteItems.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="fav-list">
          {favoriteItems.map((item) => (
            <div key={item.id} className="fav-item">
              <img src={item.image} alt={item.name} className="favImg" />
              <h3 className="favName">{item.name}</h3>
              <h4 className="favBrand">{item.brand}</h4>
              <p className="favDesc">{item.description}</p>
              <p className="favPrice">Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
