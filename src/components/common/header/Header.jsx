import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <img src="./images/logo.png" alt="Housing Heights" />
          </div>

          {/* Navigation */}
          <nav className="nav">
            <ul className="flex">
              {nav.map((list, index) => (
                <li key={index}>
                  <a href={list.path}>{list.text}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section (Search, Wishlist, Sign-in) */}
          <div className="right-section">
            {/* Search Icon */}
            <div className="search-container">
              <i 
                className="fa fa-search search-icon"
                onClick={() => setShowSearch(!showSearch)}
              ></i>
              {showSearch && (
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i 
                    className="fa fa-times close-search"
                    onClick={() => setShowSearch(false)}
                  ></i>
                </div>
              )}
            </div>

            {/* Wishlist Heart Icon */}
            <i
              className={liked ? "fa-solid fa-heart liked" : "fa-regular fa-heart"}
              onClick={() => setLiked(!liked)}
            ></i>

            {/* Sign-in Button */}
            <button className="signbtn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
