import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="wrapper">
          <div className="lists">
            <ul className="list-items">
              <p>ABOUT</p>
              <a href="#contact">Contact Us</a>
              <a href="#about">About Us</a>
              <a href="#careers">Careers</a>
              <a href="#stories">Flipkart Stories</a>
              <a href="#press">Press</a>
              <a href="#wholesale">Flipkart Wholesale</a>
              <a href="#info">Corporate Information</a>
            </ul>
            <ul className="list-items">
              <p>HELP</p>
              <a href="#payments">Payments</a>
              <a href="#shipping">Shipping</a>
              <a href="#cancellation">Cancellation & Returns</a>
              <a href="#stories">Flipkart Stories</a>
              <a href="#faq">FAQ</a>
              <a href="#report">Report Infringement</a>
            </ul>
            <ul className="list-items">
              <p>CONSUMER POLICY</p>
              <a href="#return">Return Policy</a>
              <a href="#terms">Terms of Use</a>
              <a href="#security">Security</a>
              <a href="#privacy">Privacy</a>
              <a href="#sitemap">Sitemap</a>
              <a href="#grievance">Grievance Redressal</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
