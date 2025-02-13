import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Logo */}
        <div className="footer-brand">
          <img src="/images/logoo.png" alt="HousingHeights Logo" className="brand-logo" />
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <div>
            <h4>For Sale</h4>
            <ul>
              <li><a href="#">New Homes</a></li>
              <li><a href="#">Commercial Properties</a></li>
              <li><a href="#">Overseas</a></li>
              <li><a href="#">Find Agents</a></li>
            </ul>
          </div>
          <div>
            <h4>To Rent</h4>
            <ul>
              <li><a href="#">Commercial Properties</a></li>
              <li><a href="#">Letting Agents</a></li>
            </ul>
          </div>
          <div>
            <h4>Research</h4>
            <ul>
              <li><a href="#">Shared Ownership</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Mortgage Calculator</a></li>
            </ul>
          </div>
          <div>
            <h4>For Business</h4>
            <ul>
              <li><a href="#">List with Us</a></li>
              <li><a href="#">HousingHeights Pro</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom-container">
        <p>© 2025 HousingHeights. All rights reserved.</p>

        <div className="footer-policy">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
