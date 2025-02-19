import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ React Router
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";

import "./header.css"; // ✅ Custom styles

const Header = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState(false);

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
          <Link className="navbar-brand" to="/">
            <img src="./images/logo.png" alt="Housing Heights" className="logo-img" onClick={() => navigate("/")} />
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* ✅ Navbar Items */}
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`} id="navbarScroll">
            <ul className="navbar-nav mx-auto">
              {nav.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={item.path}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ✅ Right Section (Search, Wishlist, Sign-in) */}
            <div className="d-flex align-items-center">
              {/* 🔍 Search Icon */}
              <div className="search-container">
                {searchOpen && (
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <FaTimes className="search-icon" onClick={() => setSearchOpen(false)} />
                  </div>
                )}
                {!searchOpen && <FaSearch className="icon" onClick={() => setSearchOpen(true)} />}
              </div>

              {/* ❤️ Wishlist Icon */}
              <FaHeart className={`icon ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)} />

              {/* 📝 Sign In Button */}
              <button className="btn btn-outline-success" onClick={() => navigate("/signup")}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
