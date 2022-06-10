import React, { Component } from "react";
import darkLogo from "../assets/images/resources/logo-dark.png";
export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      scrollBtn: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 70) {
      this.setState({
        scrollBtn: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        scrollBtn: false
      });
    }
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="site-footer__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-widget footer-widget__about">
                    <img
                      src={darkLogo}
                      width="119"
                      alt=""
                      className="footer-widget__logo"
                    />
                    <p className="footer-widget__contact">
                      <a href="tel:888-666-0000">888 666 0000</a>
                    </p>

                    <p className="footer-widget__contact">
                      <a href="mailto:needhelp@example.com">
                        needhelp@example.com
                      </a>
                    </p>
                    <p className="footer-widget__contact">
                      855 road, broklyn street <br /> new york 600
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="#none">About</a>
                      </li>
                      <li>
                        <a href="#none">Our Team</a>
                      </li>
                      <li>
                        <a href="#none">Features</a>
                      </li>
                      <li>
                        <a href="#none">Blog</a>
                      </li>
                      <li>
                        <a href="#none">How It Works</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Services</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="#none">Speed Optimization </a>
                      </li>
                      <li>
                        <a href="#none">Marketing Analysis </a>
                      </li>
                      <li>
                        <a href="#none">SEO and Backlinks </a>
                      </li>
                      <li>
                        <a href="#none">Content Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Links</h3>
                    <ul className="footer-widget__links list-unstyled">
                      <li>
                        <a href="#none">Help </a>
                      </li>
                      <li>
                        <a href="#none">Support </a>
                      </li>
                      <li>
                        <a href="#none">Clients </a>
                      </li>
                      <li>
                        <a href="#none">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footer-widget">
                    <div className="site-footer__social">
                      <a
                        href="#s-link"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a
                        href="#none"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#none"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a
                        href="#none"
                        aria-label="social icon"
                        aria-hidden="true"
                      >
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="inner-container text-center">
                <p className="site-footer__copy">
                  &copy; copyright {new Date().getFullYear()} by{" "}
                  <a href="#none">Layerdrops.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div
          onClick={this.scrollTop}
          onKeyDown={this.scrollTop}
          role="button"
          tabIndex="0"
          className="scroll-to-target scroll-to-top"
          style={{ display: this.state.scrollBtn ? "block" : "none" }}
        >
          <i className="fa fa-angle-up"></i>
        </div>
      </div>
    );
  }
}
