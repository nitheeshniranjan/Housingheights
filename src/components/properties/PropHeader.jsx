import React, { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./propheader.css";

const PropHeader = () => {
  const [location, setLocation] = useState("Western Mumbai");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [propertyType, setPropertyType] = useState("Buy");

  return (
    <>
      {/* Header */}
      <nav className="header">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Company Logo" className="small-logo" />
          </Link>
        </div>
{/* Search Bar */}
<div className="search-bar">
  {/* Property Type Dropdown */}
  <select
    className="dropdown"
    value={propertyType}
    onChange={(e) => setPropertyType(e.target.value)}
  >
    <optgroup label="Residential">
      <option value="Buy">Buy</option>
      <option value="Rent">Rent</option>
      <option value="Sell">Sell</option>
    </optgroup>
    <optgroup label="Commercial">
      <option value="Buy">Buy</option>
      <option value="Lease">Lease</option>
    </optgroup>
  </select>

  {/* Location Tag (If selected) */}
  {location && (
    <span className="location-tag">
      {location} <button onClick={() => setLocation("")}>✖</button>
    </span>
  )}

  {/* Search Input */}
  <input
    type="text"
    className="large-input"
    placeholder="Search properties..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />

  {/* Search Button with Icon */}
  <button className="search-btn">
    <FaSearch className="search-icon" />
  </button>
</div>

        {/* Right-Side Icons */}
        <div className="right-section">
          {/* User Profile */}
          <div className="user-profile" onClick={() => setUserDropdown(!userDropdown)}>
            <FaUser />
            {userDropdown && (
              <div className="user-dropdown">
                <a href="/profile">Profile</a>
                <a href="/my-properties">My Properties</a>
                <a href="/settings">Settings</a>
                <a href="/logout">Logout</a>
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <FaBars className="hamburger" onClick={() => setIsSidebarOpen(true)} />
        </div>
      </nav>

      {/* Sidebar - Opens from Right */}
      {isSidebarOpen && (
        <div className="sidebar slide-in-right">
          <FaTimes className="close-sidebar" onClick={() => setIsSidebarOpen(false)} />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/buy">Buy</a></li>
            <li><a href="/rent">Rent</a></li>
            <li><a href="/pg">PG</a></li>
            <li><a href="/commercial">Commercial</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PropHeader;
