import React, { Component } from "react";
import Header from "../reusable-components/Header";
import Slider from "react-slick";
import "../assets/styles/Beta.css";
import { banner2, banner6, banner7, banner5 } from "../assets/index";
import Footer from "../reusable-components/Footer";
export default class Beta extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    const centerModeSettings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <div>
          <Header />
        </div>
        <section className="banner-section">
          <div style={{ padding: "2% 2% 1% 2%" }}>
            <Slider {...settings}>
              <div className="banner-slider-div">
                <img className="banner-images" src={banner5} />
                {/* <p className="text-over-banner-image">Summer sale</p> */}
              </div>
              <div className="banner-slider-div">
                <img className="banner-images" src={banner2} />
                {/* <p className="text-over-banner-image">Monsoon sale</p> */}
              </div>
              <div className="banner-slider-div">
                <img className="banner-images" src={banner6} />
                {/* <p className="text-over-banner-image">Winter sale</p> */}
              </div>
            </Slider>
          </div>
        </section>
        <section class="handpicked" id="handpicked">
          <div style={{ padding: "0% 2% 2% 2%" }}>
            <h5 className="title"> Handpicked</h5>
            <div class="two-img-grid">
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl4.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl3.jpg"
                />
              </div>
            </div>

            <div class="three-img-grid">
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl1.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl2.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl3.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="trending">
          <div style={{ padding: "0.8% 2% 2% 2%" }}>
            <h5 className="title"> Trending Now</h5>
            <div class="three-img-grid">
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl4.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl3.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl1.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="accessories">
          <div style={{ padding: "0.8% 2% 2% 2%" }}>
            <h5 className="title"> Accessories</h5>
            <div class="accessories-grid">
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl4.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl3.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl1.jpg"
                />
              </div>
              <div>
                <img
                  class="banner-images"
                  src="http://coalbrass.com/images/girl2.jpg"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="info">
          <div style={{ padding: "0.8% 2% 2% 2%" }}>
            <div class="tri-grid">
              <div>
                <img
                  src="http://coalbrass.com/images/og.jpg"
                  className="og-icon"
                />
                <p>100% Original</p>
              </div>
              <div>
                <img
                  src="http://coalbrass.com/images/free-shipping.png"
                  className="og-icon"
                />
                <p>Free Shipping above Rs.1000/-</p>
              </div>
              <div>
                <img
                  src="http://coalbrass.com/images/free-shipping.png"
                  className="og-icon"
                />
                <p>30 days return</p>
              </div>
            </div>
          </div>
        </section>
        <section class="instagram">
          <div style={{ padding: "0.8% 2% 2% 2%" }}>
            <h5 className="title"> Instagram</h5>
            <Slider {...centerModeSettings}>
              <img
                class="banner-images"
                src="http://coalbrass.com/images/girl1.jpg"
              />
              <img
                class="banner-images"
                src="http://coalbrass.com/images/girl4.jpg"
              />
              <img
                class="banner-images"
                src="http://coalbrass.com/images/girl2.jpg"
              />
              <img
                class="banner-images"
                src="http://coalbrass.com/images/girl3.jpg"
              />
              <img
                class="banner-images"
                src="http://coalbrass.com/images/girl2.jpg"
              />
            </Slider>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
