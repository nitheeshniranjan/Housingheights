import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

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
          <div className="box">
            <span>City/Street</span>
            <input type="text" placeholder="Location" />
          </div>
          <div className="box">
            <span>Property Type</span>
            <input type="text" placeholder="Property Type" />
          </div>
          <div className="box">
            <span>Price Range</span>
            <input type="text" placeholder="Price Range" />
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
