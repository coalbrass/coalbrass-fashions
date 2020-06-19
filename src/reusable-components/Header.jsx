import React, { Component } from "react";
import "../assets/styles/Header.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <div className="upper-menu">
            <div className="first-block">
              <p id="first-block-text">
                <i className="fa fa-envelope" id="fa-icon"></i>
                care@coalbrass.com
              </p>
              <p id="first-block-text">
                <i className="fa fa-phone" id="fa-icon"></i>
                +91-90043 71144
              </p>
            </div>
            <div className="second-block">
              <img
                className="logo"
                src="http://coalbrass.com/images/logo.png"
              />
            </div>
            <div className="third-block">
              <div className="third-block-upper-div-grid">
                <p id="first-block-text">Sign Up / Sign In</p>
                <i id="fa-icon-third-block" className="fa fa-whatsapp"></i>
                <i id="fa-icon-third-block" className="fa fa-heart"></i>
              </div>
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="search-box"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="search-button">
                    <i id="fa-icon-search" className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="menu" id="menu">
            <a href="#apparels">Apparels</a>
            <a href="#jewellery">Jewellery</a>
            <a href="#accessories">Accessories</a>
            <a href="#artisan-stories">Artisan Stories</a>
            <a href="#designers">Designers</a>
            <a href="#trending">Trending</a>
            <a href="#ready-to-ship">Ready To Ship</a>
          </div>
        </section>
      </div>
    );
  }
}
