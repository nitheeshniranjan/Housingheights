import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ React Router
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";

import "./header.css"; // ✅ Custom styles

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [liked, setLiked] = useState(false);
  const [navList, setNavList] = useState(false);

  // ✅ Dummy navigation links (Replace with real links if needed)
  const nav = [
    { path: "/", text: "Home" },
    { path: "/Properties", text: "Properties" },
    { path: "/", text: "AboutUs" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          {/* ✅ Logo */}
          <Link className="navbar-brand" to="/" >
            <img src="./images/logo.png" alt="Housing Heights" className="logo-img" onClick={() => navigate("/")}/>
          </Link>

          {/* ✅ Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* ✅ Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarScroll">
            {/* ✅ Left Side - Navigation */}
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
              {nav.map((list, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={list.path}>
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ✅ Right Section (Search, Wishlist, Sign-in) */}
            <div className="d-flex d-lg-flex align-items-center  d-sm-flex align-items-center flex-sm-row">
              {/* 🔍 Search Icon */}
              <div className="position-relative me-3 mb-2 mb-md-2 mb-sm-2  d-flex d-sm-flex align-items-start flex-sm-column">
                <i
                  className="fa fa-search search-icon"
                  onClick={() => setShowSearch(!showSearch)}
                ></i>
                {showSearch && (
                  <div className="position-absolute search-bar">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      onClick={() => setSearchTerm(false)} 
                    />
                    <i
                      className="fa fa-times close-search"
                      onClick={() => setShowSearch(false)}
                    ></i> 
                  </div>
                )}
                

              </div>
              </div>


              <div className="d-flex d-lg-flex align-items-center  d-sm-flex  flex-sm-row">

              {/* ❤️ Wishlist Icon */}
              <i
                className={`fa ${liked ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"} me-3 mb-2 mb-sm-0`}
                onClick={() => setLiked(!liked)}
              ></i>
              </div>

              {/* 📝 Sign In Button */}
              <div className="d-grid gap-1 col-xl-1 col-lg-1 d-lg-grid gap-2 col-1 d-sm-grid gap-2 col-2">
              <button className="btn btn-outline-success me-3 mb-3 mb-sm-0  " onClick={() => navigate("/signup")}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
