import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4 d-flex justify-content-center">
          {/* Social Icons */}
          {[
            { href: "#!", color: "#3b5998", icon: "fa-facebook-f" },
            { href: "#!", color: "#55acee", icon: "fa-twitter" },
            { href: "#!", color: "#dd4b39", icon: "fa-google" },
            { href: "#!", color: "#ac2bac", icon: "fa-instagram" },
            { href: "#!", color: "#0082ca", icon: "fa-linkedin-in" },
            { href: "https://github.com/HousingHeights/HousingHeights", color: "#333333", icon: "fa-github" },
          ].map((item, index) => (
            <a
              key={index}
              className="btn social-icon m-1"
              href={item.href}
              role="button"
              style={{ backgroundColor: item.color }}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </section>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
