import React from "react";
import bannerMoc from "../assets/images/mocs/banner-moc-2-11.png";
const BannerTwo = () => {
  return (
    <section className="banner-two" id="banner">
      <span className="banner-two__shape-1"></span>
      <span className="banner-two__shape-2"></span>
      <span className="banner-two__shape-3"></span>
      <span className="banner-two__shape-4"></span>
      <div className="banner-two__moc">
        <img src={bannerMoc} alt="alter text" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-two__content">
              <h3 className="banner-two__title">
                Increase Revenue &amp; <br />
                <span>Add</span>Value
              </h3>
              <p className="banner-two__text">
              Together we will build a strong marketing foundation that increases revenue and adds value to your company.
              </p>
              <a href="#none" className="banner-two__btn thm-btn ">
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerTwo;
