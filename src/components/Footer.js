import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <a href="">Back to top</a>
      </div>
      <div className="footer-middle">
        <div className="footer-row">
          <h3>Get to Know Us</h3>
          <h5><a href="" style={{color:"white"}}>About Us</a></h5>
          <h5><a href="" style={{color:"white"}}>Careers</a></h5>
          <h5><a href="" style={{color:"white"}}>Press Release</a></h5>
          <h5><a href="" style={{color:"white"}}>Amazon Cities</a></h5>
          <h5><a href="" style={{color:"white"}}>Gift a Smile</a></h5>
        </div>
        <div className="footer-row">
          <h3>Connect with Us</h3>
          <h5><a href="" style={{color:"white"}}>Facebook</a></h5>
          <h5><a href="" style={{color:"white"}}>Twitter</a></h5>
          <h5><a href="" style={{color:"white"}}>Instagram</a></h5>
        </div>
        <div className="footer-row">
          <h3>Make Money with Us</h3>
          <h5><a href="" style={{color:"white"}}>Sell on Amazon</a></h5>
          <h5><a href="" style={{color:"white"}}>Sell under Amazon Accelerator</a></h5>
          <h5><a href="" style={{color:"white"}}>Become an Affiliate</a></h5>
          <h5><a href="" style={{color:"white"}}>Advertise Your Products</a></h5>
          <h5><a href="" style={{color:"white"}}>Amazon Pay on Merchants</a></h5>
        </div>
        <div className="footer-row">
          <h3>Let Us help You</h3>
          <h5><a href="" style={{color:"white"}}>COVID-19 and Amazon</a></h5>
          <h5><a href="" style={{color:"white"}}>Your Account</a></h5>
          <h5><a href="" style={{color:"white"}}>Returns Centre</a></h5>
          <h5><a href="" style={{color:"white"}}>100% App Download</a></h5>
          <h5><a href="" style={{color:"white"}}>Amazon App Download</a></h5>
        </div>
      </div>
      <div className="footer-bottom">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="footer-logo" alt=""/>
        <div className="footer-bottom-two">
          <h6>Australia</h6>
          <h6>Brazil</h6>
          <h6>Canada</h6>
          <h6>China</h6>
          <h6>France</h6>
          <h6>Germany</h6>
          <h6>Italy</h6>
          <h6>Japan</h6>
          <h6>Mexico</h6>
          <h6>Netherlands</h6>
          <h6>Singapore</h6>
          <h6>Spain</h6>
          <h6>United Arab Emirates</h6>
          <h6>United Kingdom</h6>
          <h6>United States</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;