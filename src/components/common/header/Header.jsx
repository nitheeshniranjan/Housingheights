import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          {/* Logo on the extreme left */}
          <div className="logo">
            <img src="./images/logo.png" alt="Housing Heights" />
          </div>

          {/* Navigation in center */}
          <nav className="nav">
            <ul className="flex">
              {nav.map((list, index) => (
                <li key={index}>
                  <a href={list.path}>{list.text}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="right-section">
              <i  className={liked ? "fa-solid fa-heart liked" : "fa-regular fa-heart"}  
               onClick={() => setLiked(!liked)}  ></i>
          <button className="btn1">
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
