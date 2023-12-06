import React from "react";
import SearchIcon from "../Images/Icon/search.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header-tel">
        <p className="tel">تلفن : 021556585</p>
      </div>
      <div>
        <form class="search">
          <img className="img-search-icon" src={SearchIcon} alt="search" />
          <input class="input-search" type="text" placeholder="جستجو..." />
          <button class="btn-search" type="submit">
            جستجو
          </button>
        </form>
      </div>
      <div className="header-content">
        <div>
          <a href="#"> دریافت نوبت </a>
          <a href="#"> سفارش دارو </a>
          <a href="#"> مطالب پزشکی </a>
          <a href="#"> درباره ما </a>
          <a href="#"> تماس با ما </a>
        </div>
      </div>
      <div className="header-docname">
        <div>
          <Link to="/">دکتر کاظم خوانساری</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
