import React, { Component } from "react";
import "../assets/styles/LandingPage.css";
import {
  bg,
  bg2,
  bannerBg,
  icon1,
  icon2,
  icon3,
  prod1,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8,
  prod9,
  prod10,
  prod11,
  prod12,
  newBanner1,
  newBanner2,
  newBanner3,
  banner2,
  banner6,
  banner7,
  banner5,
  cards,
  mastercard,
  paypal
} from "../assets/index";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default class LandingPage extends Component {
  render() {
    const centerModeSettings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000
    };
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        {/* <div id="preloder">
          <div className="loader"></div>
        </div> */}
        <header>
          <div className="upper-header">
            <div className="logo-div">
              <img
                className="logo"
                src="http://coalbrass.com/images/logo.png"
              />
            </div>
            <div className="search-div">
              <form className="header-search-form">
                <input type="text" placeholder="What are you looking for?" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="user-div">
              <div className="user-panel">
                <div className="up-item">
                  <i className="fa fa-user"></i>
                  <a href="#">Sign In /Sign Up</a>
                </div>
              </div>
            </div>
            <div className="shopping-div">
              <div className="user-panel">
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="fa fa-shopping-bag"></i>
                    <span>0</span>
                  </div>
                  <a href="#">Shopping Bag</a>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-navbar">
            <div className="container">
              <ul className="main-menu">
                <li>
                  <a href="#">Apparels</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Designers</a>
                </li>
                <li>
                  <a href="#">Jewellery</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                  {/* <ul className="sub-menu">
                    <li>
                      <a href="#">Sachin</a>
                    </li>
                    <li>
                      <a href="#">Saachi</a>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <a href="#">
                    Artisan Stories
                    <span className="new">New</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="banners-section">
          <Slider {...settings}>
            <div className="banners-slider-div">
              <img className="banner-image" src={bg} />
            </div>
            <div className="banners-slider-div">
              <img className="banner-image" src={bg2} />
            </div>
          </Slider>
        </section>
        <section className="features-section">
          <div className="col-md-4 p-0 feature">
            <div className="feature-inner">
              <div className="feature-icon">
                <img src={icon1} />
              </div>
              <h2>Free Shipping</h2>
            </div>
          </div>
          <div className="col-md-4 p-0 feature">
            <div className="feature-inner">
              <div className="feature-icon">
                <img src={icon2} />
              </div>
              <h2>on time delivery</h2>
            </div>
          </div>
          <div className="col-md-4 p-0 feature">
            <div className="feature-inner">
              <div className="feature-icon">
                <img src={icon3} />
              </div>
              <h2>Fast Secure Payments</h2>
            </div>
          </div>
        </section>
        <section className="latest-section">
          <h5 className="latest-products-text">
            <span>Latest Products</span>
          </h5>
          <div className="lastest-prod-div">
            <div>
              <div className="single-banner">
                <img src={newBanner1} />
                <div className="inner-text">
                  <h4>Apparels</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="single-banner">
                <img src={newBanner2} />
                <div className="inner-text">
                  <h4>Jewellery</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="single-banner">
                <img src={newBanner3} />
                <div className="inner-text">
                  <h4>Accessories</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="image-slider-section">
          <div className="image-slider">
            <i className="fa fa-chevron-circle-left"></i>
            <div className="product-item">
              <div className="pi-pic">
                <img src={prod1} />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="fa fa-shopping-bag"></i>
                    <span>add to cart</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>Rs.999</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src={prod6} />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="fa fa-shopping-bag"></i>
                    <span>add to cart</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>Rs.999</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src={prod4} />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="fa fa-shopping-bag"></i>
                    <span>add to cart</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>Rs.999</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <div className="product-item">
              <div className="pi-pic">
                <img src={prod5} />
                <div className="pi-links">
                  <a href="#" className="add-card">
                    <i className="fa fa-shopping-bag"></i>
                    <span>add to cart</span>
                  </a>
                  <a href="#" className="wishlist-btn">
                    <i className="fa fa-heart-o"></i>
                  </a>
                </div>
              </div>
              <div className="pi-text">
                <h6>Rs.999</h6>
                <p>Flamboyant Pink Top </p>
              </div>
            </div>
            <i className="fa fa-chevron-circle-right"></i>
          </div>
        </section>

        <section className="product-filter-section">
          <div className="section-title">
            <h5 className="latest-products-text">
              <span>Browse Top Selling Products</span>
            </h5>
          </div>
          <div className="product-filter-menu">
            <a>JUMPSUITS</a>

            <a>JEANS</a>

            <a>DRESSES</a>

            <a>skirts</a>

            <a>COATS</a>

            <a>Jackets</a>
          </div>
          <div className="best-seller-grid">
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod5} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <div className="tag-sale">ON SALE</div>
                  <img src={prod6} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod7} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod8} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod9} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod10} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod11} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={prod12} />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <i className="fa fa-shopping-bag"></i>
                      <span>add to cart</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>Rs.999</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
          </div>
          <div className="load-more-button-div">
            <button className="site-btn">LOAD MORE</button>
          </div>
        </section>
        <section class="single-banner-section">
          <div class="container">
            <div class="banner-img">
              <div class="tag-new">NEW</div>
              <span>New Arrivals</span>
              <h2>STRIPED SHIRTS</h2>
              <a href="#" class="site-btn">
                SHOP NOW
              </a>
            </div>
          </div>
        </section>
        <section className="instagram">
          <div style={{ padding: "0.8% 2% 2% 2%", textAlign: "center" }}>
            <h5 className="latest-products-text">
              <span>instagram</span>
            </h5>
            <Slider {...centerModeSettings}>
              <img className="banner-images" src={banner2} />
              <img className="banner-images" src={banner6} />
              <img className="banner-images" src={banner7} />
              <img className="banner-images" src={banner2} />
              <img className="banner-images" src={banner6} />
              <img className="banner-images" src={banner7} />
            </Slider>
          </div>
        </section>
        <section class="footer-section">
          <div class="container">
            <div class="footer-logo text-center">
              <a href="">
                <img
                  src="http://coalbrass.com/images/logo-white.png"
                  width="20%"
                  alt=""
                />
              </a>
            </div>
            <div class="footer-widget-row">
              <div class="footer-widget-div">
                <div class="footer-widget about-widget">
                  <h2>About</h2>
                  <p>
                    Coalbrass Fashion & Lifestyle is coming up with its boutique
                    online platform www.coalbrass.com to showcase distinctive
                    collections from upcoming fashion designers.
                  </p>
                  <h2>We accept</h2>
                  <img src={cards} alt="" />
                </div>
              </div>
              <div class="footer-widget-div">
                <div class="footer-widget about-widget">
                  <h2>may we help you?</h2>
                  <ul>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Track Orders</a>
                    </li>
                    <li>
                      <a href="">Returns</a>
                    </li>
                    <li>
                      <a href="">Jobs</a>
                    </li>
                    <li>
                      <a href="">Shipping</a>
                    </li>
                    <li>
                      <a href="">Blog</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Partners</a>
                    </li>

                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer-widget-div">
                <div class="footer-widget about-widget">
                  <h2>Blog</h2>
                  <div class="fw-latest-post-widget">
                    <div class="lp-item">
                      <img class="lp-thumb" src={newBanner1} />
                      <div class="lp-content">
                        <h6>what shoes to wear</h6>
                        <span>June 12, 2020</span>
                        <a href="#" class="readmore">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="lp-item">
                      <img class="lp-thumb" src={newBanner2} />
                      <div class="lp-content">
                        <h6>trends this year</h6>
                        <span>June 12, 2020</span>
                        <a href="#" class="readmore">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footer-widget-div">
                <div class="footer-widget contact-widget">
                  <h2>Contact us</h2>
                  <div class="con-info">
                    <span>C.</span>
                    <p>Coalbrass Fashions LLP</p>
                  </div>
                  <div class="con-info">
                    <span>A.</span>
                    <p>Thane(W)</p>
                  </div>
                  <div class="con-info">
                    <span>P.</span>
                    <p>+91 90043 71144</p>
                  </div>
                  <div class="con-info">
                    <span>E.</span>
                    <p>care@coalbrass.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="social-links-warp">
            <div class="container">
              <div class="social-links">
                <a href="" class="instagram">
                  <i class="fa fa-instagram"></i>
                  <span>instagram</span>
                </a>
                <a href="" class="google-plus">
                  <i class="fa fa-google-plus"></i>
                  <span>g+plus</span>
                </a>
                <a href="" class="pinterest">
                  <i class="fa fa-pinterest"></i>
                  <span>pinterest</span>
                </a>
                <a href="" class="facebook">
                  <i class="fa fa-facebook"></i>
                  <span>facebook</span>
                </a>
                <a href="" class="twitter">
                  <i class="fa fa-twitter"></i>
                  <span>twitter</span>
                </a>
                <a href="" class="youtube">
                  <i class="fa fa-youtube"></i>
                  <span>youtube</span>
                </a>
                <a href="" class="tumblr">
                  <i class="fa fa-tumblr-square"></i>
                  <span>tumblr</span>
                </a>
              </div>

              <p class="copyright">
                Copyright &copy; 2020 | All rights reserved
              </p>
            </div>
          </div>
          <Link to="/" style={{ color: "#fff" }}>
            <p>Goto option 1</p>
          </Link>
          <Link to="/beta3" style={{ color: "#fff" }}>
            <p>Goto option 3</p>
          </Link>
        </section>
      </div>
    );
  }
}
