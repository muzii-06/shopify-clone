import React from "react";
import { FaInstagram, FaPinterest, FaTimes } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-container ">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p className="lightgray">Find a location nearest you.</p>
          <p className="lightgray"><strong className="text-white">Hotline:</strong><br />
           (+00) 123 - 4568</p>
          <p className="lightgray"><strong className="text-white">Address:</strong>
          <br />
           512 Howard Street #19 San Francisco, USA.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="lightgray">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer-section">
          <h3>Information</h3>
          <ul className="lightgray">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Let's Get In Touch</h3>
          <p className="lightgray">Subscribe to our newsletter to receive news on update.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" className="" />
            {/* <button className="border-0 p-0 bg-transparent">→</button> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>©2024 Foesta Shopify Theme</p>
        <div className="social-icons">
          <FaInstagram />
          <FaTimes />
          <FaPinterest />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
