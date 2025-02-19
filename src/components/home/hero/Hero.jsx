import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  // State for autocomplete, dropdown, and slider
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState(500000); // Default price range
  const [currency, setCurrency] = useState('USD'); // Default currency

  // Handle change for autocomplete, dropdown, and slider
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handlePropertyTypeChange = (e) => setPropertyType(e.target.value);
  const handlePriceRangeChange = (e) => setPriceRange(e.target.value);

  // Format price with currency symbol
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  return (
    <section className="hero">
      {/* Background Video */}
      <video autoPlay loop muted className="hero-video">
        <source src="/videos/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text visibility */}
      <div className="overlay"></div>

      <div className="container">
        {/* Title and Subtitle */}
        <div className="text-container">
          <Heading 
            title="Search Your Next Home" 
            subtitle="Find new & featured property located in your local city or any city." 
          />
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="cta-button">Rent</button>
          <button className="cta-button">Buy</button>
          <button className="cta-button">Sell</button>
        </div>

        {/* Search Form */}
        <form className="search-form">
          {/* Location (Autocomplete) */}
          <div className="box">
            <span>City/Street</span>
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Location"
            />
          </div>

          {/* Property Type (Dropdown) */}
          <div className="box">
            <span>Property Type</span>
            <select
              value={propertyType}
              onChange={handlePropertyTypeChange}
              className="dropdown"
            >
              <option value="">Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
              <option value="villa">Villa</option>
              <option value="pg/hostel">Pg/Hostel</option>
            </select>
          </div>

          {/* Price Range (Slider) */}
          <div className="box">
            <span>Price Range</span>
            <input
              type="range"
              min="100000"
              max="1000000"
              step="10000"
              value={priceRange}
              onChange={handlePriceRangeChange}
              className="price-slider"
            />
            <span>{formatPrice(priceRange)}</span>
          </div>

          <button className="btn1">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
