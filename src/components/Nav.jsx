import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import searchIcon from "../assets/Search.png";
import userIcon from "../assets/user.svg";
import heartIcon from "../assets/HEART.png";
import basketIcon from "../assets/shopping-cart.svg";

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" width={80} />
      <div className="search__div">
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav_links">
        <Link className="nav_link" to={"/profile"}>
          <img src={userIcon} alt="profil page link" />
        </Link>
        <Link className="nav_link" to={"liked-books"}>
          <img src={heartIcon} alt="liked books page link" />
        </Link>
        <Link className="nav_link" to={"basket"}>
          <img src={basketIcon} alt="basket page link" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
