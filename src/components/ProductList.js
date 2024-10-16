import React, { useState } from "react";
import "./productList.css";
import Img1 from "../assets/images/bag_1.webp";
import Img2 from "../assets/images/bag_2.webp";
import Img3 from "../assets/images/bag_3.webp";
import Img4 from "../assets/images/bag_4.webp";
import Img5 from "../assets/images/bag_5.webp";
import Img6 from "../assets/images/bag_6.webp";
import Img7 from "../assets/images/bag_7.webp";
import Img8 from "../assets/images/bag_8.webp";
import Img9 from "../assets/images/bag_9.webp";
import Img10 from "../assets/images/bag_10.webp";
import Img11 from "../assets/images/bag_11.webp";
import Img12 from "../assets/images/bag_12.webp";

const ProductList = ({ addToCart, addToFavorites, removeFromFavorites }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Women Black, Grey Shoulder Bag - Extra Spacious",
      brand: "Wildmoda",
      price: 849,
      description:
        "This women's shoulder bag has a 20 L capacity, featuring multiple compartments for essentials like clothes, accessories, and a water bottle. Made from waterproof polyester, it’s lightweight and perfect for travel or daily use, keeping your belongings safe and dry.",
      image: `${Img1}`,
    },
    {
      id: 2,
      name: "Women Purple Satchel",
      brand: "LAVIE",
      price: 1039,
      description:
        "This satchel has a top zip closure for safety and security. The interior has a main spacious compartment with 2 slip pockets, 1 inner zip pocket and 1 external zip pocket, providing plenty of storage space for keeping phone, portable charger, keys, hairbrush, wallet, sunglasses, sanitizer etc. It also has a detachable and adjustable sling belt for multipurpose use.",
      image: `${Img2}`,
    },
    {
      id: 3,
      name: "Women Yellow Shoulder Bag",
      brand: "Fastrack",
      price: 639,
      description:
        "The Mustard shoulder bag features a 2.1 L capacity with a single zip closure, crafted from PU material in a vibrant yellow color. It has a compact design measuring 24 cm in width, 13 cm in height, and 7 cm in depth, and comes with a 6-month domestic warranty.",
      image: `${Img3}`,
    },
    {
      id: 4,
      name: "Women Beige Shoulder Bag",
      brand: "TOMMY HILFIGER",
      price: 2929,
      description:
        "The TH Essential SC Crossover bag features a sleek beige design with a single zip closure and is made from durable PU material. Its compact dimensions measure 3.93 inches in width and 9.84 inches in height, making it a stylish and practical accessory.",
      image: `${Img4}`,
    },
    {
      id: 5,
      name: "Women Black Shoulder Bag",
      brand: "TOMMY HILFIGER",
      price: 2759,
      description:
        "The TJW ESS Must Tote bag is a chic black accessory made from PU material, featuring a single compartment with a magnetic snap closure. Its dimensions are 5.9 inches in width and 11.8 inches in height, offering a stylish and functional design.",
      image: `${Img5}`,
    },
    {
      id: 6,
      name: "Women Black Shoulder Bag",
      brand: "MICHAEL KORS",
      price: 10169,
      description:
        "The 30S2GCDT3L Black bag is crafted from synthetic leather and features a sleek design with a single compartment and a magnetic snap closure. Measuring 31.44 inches in width and 30 inches in height, it combines style and functionality effortlessly.",
      image: `${Img6}`,
    },
    {
      id: 7,
      name: "Women Black Satchel",
      brand: "Miraggio",
      price: 2399,
      description:
        "The Risa Top-Handle Handbag for women features a stylish design with a single compartment and two pockets, made from durable PU material. Measuring 14 cm in width and 21 cm in height, it has a zip closure and includes a detachable and adjustable sling strap for versatility.",
      image: `${Img7}`,
    },
    {
      id: 8,
      name: "Women Silver Shoulder Bag",
      brand: "ALDO",
      price: 3229,
      description:
        "The 13762056 shoulder bag is crafted from polyester and features a sleek silver design with a single compartment and a flap closure. Measuring 19 cm in width, 11 cm in height, and 4 cm in depth, it’s stylish and practical for everyday use.",
      image: `${Img8}`,
    },
    {
      id: 9,
      name: "Women White Shoulder Bag",
      brand: "TOMMY HILFIGER",
      price: 2579,
      description:
        "The Tamara II Satchel in White Greige/Black features a stylish zip closure and is made from durable PU material. With a single compartment, it measures 4.9 inches in width and 8.9 inches in height, making it a chic accessory for any occasion.",
      image: `${Img9}`,
    },
    {
      id: 10,
      name: "Women Beige Hand-held Bag",
      brand: "MICHAEL KORS",
      price: 8099,
      description:
        "The 30F2G7CM1T bag is a solid design crafted from genuine leather, featuring two compartments and a capacity of 6 L. It includes one pocket and measures 26 cm in width, making it a stylish and functional choice.",
      image: `${Img10}`,
    },
    {
      id: 11,
      name: "Women Green Hand-held Bag",
      brand: "ACCESSORIZE LONDON",
      price: 5745,
      description:
        "The Women's Faux Leather Green Thea Croc Handheld Bag features a chic design made from synthetic leather, with one compartment and four pockets for organized storage. Measuring 13 cm in width, 22 cm in height, and 29 cm in depth, it combines style and practicality effortlessly.",
      image: `${Img11}`,
    },
    {
      id: 12,
      name: "Women Tan Shoulder Bag",
      brand: "MICHAEL KORS",
      price: 10879,
      description:
        "The 30H1GGRL2L bag features a solid design made from artificial leather, offering two compartments with a capacity of 3 L. It measures 25 cm in width and 14 cm in height, making it a stylish and practical accessory.",
      image: `${Img12}`,
    },
  ]);

  return (
    <div className="mainProducts">
      <h1 className="h1Products">Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="productImg"
            />
            <h3 className="productName">{product.name}</h3>
            <h4 className="productBrand">{product.brand}</h4>
            <p className="productDesc">{product.description}</p>
            <p className="productPrice">Price: &#8377;{product.price}</p>
            <button onClick={() => addToCart(product)} className="addToCardBtn">
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToFavorites(product);
              }}
              className="favBtn"
              id={`${product.id}`}
            >
              ❤
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
