import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../assets/styles/Rebelle.css";
import {
  summer,
  maestro,
  cards,
  newBanner1,
  newBanner2,
  banner10,
  banner11,
  bg2,
  newBanner3,
  clothingShop,
  newImage,
  model,
  model2,
  model3,
  model4,
  model5,
  model6,
  model7,
  model8,
  bg3,
  skirt,
  bag,
  purse,
  img,
  img2
} from "../assets/index";
export default class Rebelle extends Component {
  render() {
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
      <div className="rebelle">
        <section className="rebelle-header">
          <div className="upper-header">
            <div></div>
            <div className="upper-header-grid">
              <i
                id="font-awesome"
                // style={{ color: "#fff" }}
                className="fa fa-search"
              ></i>{" "}
              100% Authenticity Check
            </div>
            <div className="upper-header-grid">
              <i
                id="font-awesome"
                // style={{ color: "#fff" }}
                className="fa fa-check-circle"
              ></i>{" "}
              Top Ratings - <i className="fa fa-star"></i>{" "}
              <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
              <i className="fa fa-star"></i> <i className="fa fa-star"></i>
            </div>
            <div className="upper-header-grid">
              <i
                id="font-awesome"
                // style={{ color: "#fff" }}
                className="fa fa-lock"
              ></i>{" "}
              Secure Payment
            </div>
            <div></div>
          </div>
          <div className="lower-header">
            <div>
              <p className="phone-no">
                <i id="font-awesome" className="fa fa-phone"></i> +91
                8356-926559
              </p>
              <div className="search-div">
                <form className="header-search-form">
                  <button>
                    <i id="font-awesome" className="fa fa-search"></i>
                  </button>
                  <input type="text" placeholder="What are you looking for?" />
                </form>
              </div>
            </div>
            <div>
              <img
                src="http://coalbrass.com/images/logo.png"
                width="62%"
                style={{ marginTop: "2%" }}
              />
            </div>
            <div className="third-block-grid">
              <div></div>
              <div>
                <i id="font-awesome" className="fa fa-user"></i>{" "}
                <p className="block-text">Login</p>
              </div>
              <div>
                <i id="font-awesome" className="fa fa-heart-o"></i>{" "}
                <p className="block-text">Wishlist</p>
              </div>
              <div>
                <i id="font-awesome" className="fa fa-shopping-bag"></i>{" "}
                <p className="block-text">Shopping Bag</p>
              </div>
              <div></div>
            </div>
          </div>
          <nav className="main-navbar-rebelle">
            <ul className="main-menu-ul">
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
          </nav>
        </section>

        <section className="banners-slider-section">
          <Slider {...settings}>
            <div className="banners-slider-div">
              <img className="banner-image" src={banner10} />
            </div>
            <div className="banners-slider-div">
              <img className="banner-image" src={banner11} />
            </div>
          </Slider>
        </section>
        {/* <section className="flash-sale">
          FLASH SALE: up to 70% off exclusive designer pieces from all over the
          world! SHOP NOW
        </section> */}
        <section className="top-designers">
          <h5 className="new-title"> Top Designers</h5>
          <div className="designer-grid">
            <div className="product-item" style={{ marginRight: "10px" }}>
              <div className="pi-pic">
                <img src={model6} width="90%" />
              </div>
            </div>
            <div className="right-div-grid">
              <div>
                <div
                  className="product-item"
                  style={{ marginBottom: "5px", marginLeft: "5px" }}
                >
                  <div className="pi-pic">
                    <img src={newBanner2} width="100%" />
                  </div>
                </div>
                <div className="product-item" style={{ marginLeft: "5px" }}>
                  <div className="pi-pic">
                    <img src={newBanner1} width="100%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div-grid">
              <div>
                <div className="product-item" style={{ marginBottom: "5px" }}>
                  <div className="pi-pic">
                    <img src={newBanner2} width="98%" />
                  </div>
                </div>
                <div className="product-item" style={{}}>
                  <div className="pi-pic">
                    <img src={newBanner1} width="98%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="shop-her-closet">
          <h5 className="new-title"> Shop her look</h5>
          <div className="circular-divs-grid">
            <div className="circular-divs"></div>
            <div className="circular-divs"></div>
            <div className="circular-divs"></div>
            <div className="circular-divs"></div>
            <div className="circular-divs"></div>
            <div className="circular-divs"></div>
            <div className="circular-divs"></div>
          </div>
        </section>
        {/* <section className="designer-pieces">
          <h5 className="new-title"> Designer pieces for your budget</h5>
          <div className="designer-pieces-grid">
            <div className="designer-pieces-grid-div">
              <p className="under-budget">Under Rs. 300</p>
            </div>
            <div className="designer-pieces-grid-div">
              <p className="under-budget">Under Rs. 500</p>
            </div>
            <div className="designer-pieces-grid-div">
              <p className="under-budget">Under Rs. 1000</p>
            </div>
            <div className="designer-pieces-grid-div">
              <p className="under-budget">Exclusive</p>
            </div>
          </div>
        </section> */}
        <section className="new-in">
          <h5 className="new-title"> New in</h5>
          <div className="best-seller-grid">
            <div className="best-seller-grid-div">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={model} />
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
                  <img src={model2} />
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
                  <img src={model4} />
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
                  <img src={model5} />
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
                  <img src={model6} />
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
                  <img src={model2} />
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
                  <img src={model8} />
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
                  <img src={model4} />
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
        </section>
        <section className="top-designers">
          <h5 className="new-title"> Top Categories</h5>
          <div className="designer-grid">
            <div className="product-item" style={{ marginRight: "10px" }}>
              <div className="pi-pic">
                <div className="tag-sale">ON SALE</div>
                <img src={model} width="100%" />
              </div>
            </div>
            <div className="right-div-grid">
              <div>
                <div
                  className="product-item"
                  style={{ marginBottom: "5px", marginLeft: "5px" }}
                >
                  <div className="pi-pic">
                    <img src={newBanner2} width="100%" />
                  </div>
                </div>
                <div className="product-item" style={{ marginLeft: "5px" }}>
                  <div className="pi-pic">
                    <img src={newBanner1} width="100%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div-grid">
              <div>
                <div className="product-item" style={{ marginBottom: "5px" }}>
                  <div className="pi-pic">
                    <img src={newBanner2} width="100%" />
                  </div>
                </div>
                <div className="product-item" style={{}}>
                  <div className="pi-pic">
                    <img src={newBanner1} width="100%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="sell-now"></div> */}
        <section className="offers">
          {/* <div className="left-div"> */}
          {/* <div className="offer-card">
              <span>from</span>
              <h2>Rs. 300</h2>
              <p>For you</p>
            </div> */}
          {/* <p className="shop-now">Shop Now</p> */}
          {/* <div className="special-offers-grid">
              <p>
                <i className="fa fa-check"></i> Special offers & sales
              </p>
              <p>
                <i className="fa fa-check"></i> Newly added pieces
              </p>
              <p>
                <i className="fa fa-check"></i> Exclusive event invitations
              </p>
            </div> */}
          {/* </div> */}
          <div></div>
          <div style={{ width: "62%" }}>
            <p className="footer-new-title">
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
                  new-title="Sign up for our newsletter"
                  class="input-text required-entry validate-email"
                  required=""
                  autoComplete="true"
                />
              </div>
            </form>
          </div>
          <div></div>
        </section>
        {/* <div className="mask"></div> */}
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

                  <i id="cards" className="fa fa-cc-visa"></i>
                  <i id="cards" className="fa fa-cc-mastercard"></i>
                  <i id="cards" className="fa fa-cc-paypal"></i>
                  {/* <img
                    src={maestro}
                    id="cards"
                    width="12%"
                    style={{ marginTop: "-4px" }}
                  /> */}
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
                  <h2>Instagram</h2>
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
              <Link to="/beta2" style={{ color: "#fff" }}>
                <p>Goto option 2</p>
              </Link>
              <Link to="/beta3" style={{ color: "#fff" }}>
                <p>Goto option 3</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
