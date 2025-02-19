import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { navData } from "../../data/Data";
import "./header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="Headerlogo" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {navData.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className={item.highlight ? "nav-link highlight" : "nav-link"}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons and Search Bar */}
        <div className="icons">
          <div className="search-container">
            {searchOpen && (
              <div className="search-box">
                <input type="text" placeholder="Search..." />
                <FaSearch className="search-icon" onClick={() => setSearchOpen(false)} />
              </div>
            )}
            {!searchOpen && <FaSearch className="icon" onClick={() => setSearchOpen(true)} />}
          </div>

          <FaHeart className="icon" />
          <button 
            className="signup-btn" 
            onClick={() => window.open('/signup', '_blank', 'noopener,noreferrer')}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
