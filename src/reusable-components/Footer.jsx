import React, { Component } from "react";
import "../assets/styles/Footer.css";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="footer">
          <div style={{ padding: "0.8% 2% 0% 2%" }}>
            <div className="footer-grid">
              <div>
                <a href="#header">
                  <img
                    className="logo"
                    src="http://coalbrass.com/images/logo.png"
                  />
                </a>

                <p className="footer-title">WE ACCEPT</p>
                <p className="footer-text">
                  <img src="http://coalbrass.com/images/visa.png" />
                  <img
                    src="http://coalbrass.com/images/Razorpay-logo.jpg"
                    className="og-icon"
                  />
                </p>
              </div>
              <div>
                <p className="footer-title">MAY WE HELP YOU?</p>
                <p className="footer-text">Contact Us</p>
                <p className="footer-text">Shipping Information</p>
                <p className="footer-text">Terms & Conditions</p>
                <p className="footer-text">Privacy Policy</p>
              </div>
              <div>
                <p className="footer-title">ABOUT US</p>
                <p className="footer-text">About Coalbrass</p>
                <p className="footer-text">Gift Card</p>
              </div>
              <div>
                <div>
                  <p className="footer-title">
                    Sign up for our weekly style round-up
                  </p>
                  <form action="" id="newsletter-validate-detail">
                    <div class="input-box">
                      <p className="sign-me-up">SIGN ME UP!</p>
                      <input
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        autocapitalize="off"
                        autocorrect="off"
                        spellcheck="false"
                        name="email"
                        id="newsletter"
                        title="Sign up for our newsletter"
                        class="input-text required-entry validate-email"
                        required=""
                        autoComplete="true"
                      />
                    </div>
                  </form>
                  <p className="footer-title">Find us on</p>
                  <div className="social-media-links">
                    <i id="fa-icon" className="fa fa-facebook"></i>
                    <i id="fa-icon" className="fa fa-instagram"></i>
                    <i id="fa-icon" className="fa fa-twitter"></i>
                    <i id="fa-icon" className="fa fa-youtube"></i>
                    <i id="fa-icon" className="fa fa-pinterest"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-div">
            <i className=" fa fa-copyright"></i>
            <span> 2020 Coalbrass Fashions LLP. All Rights Reserved</span>
          </div>
        </section>
        <Link to="/" style={{ color: "#424242" }}>
          <p>Goto option 1</p>
        </Link>
        <Link to="/beta2" style={{ color: "#424242" }}>
          <p>Goto option 2</p>
        </Link>
      </div>
    );
  }
}
