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
              <a>Contact Us</a>
              <a>About Us</a>
              <a>Careers</a>
              <a>Flipkart Stories</a>
              <a>Press</a>
              <a>Flipkart Wholesale</a>
              <a>Corporate Information</a>
            </ul>
            <ul className="list-items">
              <p>HELP</p>
              <a>Payments</a>
              <a>Shiping</a>
              <a>Cancelation & Returns</a>
              <a>Flipkart Stories</a>
              <a>FAQ</a>
              <a>Report Infringement</a>
            </ul>
            <ul className="list-items">
              <p>CONSUMER POLICY</p>
              <a>Return Policy</a>
              <a>Term of Use</a>
              <a>Security</a>
              <a>Privacy</a>
              <a>Sitemap</a>
              <a>Grievance Redressal</a>
              <a>EPR Compliance</a>
            </ul>
            <ul className="list-items">
              <p>SOCIAL</p>
              <a>Twitter</a>
              <a>YouTube</a>
              <a>Facebook</a>
            </ul>
          </div>
          <div className="flipkart-address">
            <ul className="address-container">
              <p>Mail Us :</p>
              <span>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India
              </span>
            </ul>
            <ul className="address-container">
              <p>Registered Office Address :</p>
              <span>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India CIN :
                U51109KA2012PTC066107 <br /> 
                Telephone :<a href="044-45614700"> 044-45614700</a> 
              </span>
            </ul>
          </div>
        </div>
      </div>
      <div className="addvertise-section">
        <div className="f-icons">
          <p>Become a seller</p>
        </div>
        <div className="f-icons">
          <p>Advertise</p>
        </div>
        <div className="f-icons">
          <p>Gift Cards</p>
        </div>
        <div className="f-icons">
          <p>Help Center</p>
        </div>
        <div className="f-icons">
          <p>© 2007-2024 Flipkart.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
