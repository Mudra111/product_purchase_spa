import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [mainMenu, setmainMenu] = useState(false);

  const display = () => {
    setmainMenu(!mainMenu);
  };
  const notDisplay = () => {
    setmainMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".mainHeader");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <header className="mainHeader">
      <nav className="navHeader">
        <div onClick={display} id="menu-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            alt="user"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <ul className={`ulHeader ${mainMenu ? "active" : ""}`}>
          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/cart">Cart</Link>

          <Link to="/favorites">Favorites</Link>

          <Link to="/contact">Contact Us</Link>

          <Link to="/feedback">Feedback</Link>
          <Link to="/" className="user-icon">
            <FontAwesomeIcon icon={faUser} size="lg" alt="user" />
          </Link>
        </ul>
        {/* <div className="close">
          <i
            id="menu-btn"
            className="material-icons"
            onClick={notDisplay}
            style={{ fontSize: "20px" }}
          >
            &#10006;
          </i>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
