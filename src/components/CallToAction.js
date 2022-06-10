import React from "react";
import bgImage from "../assets/images/background/cta-one-bg.png";
import mocImage from "../assets/images/mocs/cta-moc-1-11.png";
const CallToAction = () => {
  return (
    <section className="cta-one">
      <img src={bgImage} className="cta-one__bg" alt="alter text" />
      <div className="container">
        <img src={mocImage} className="cta-one__moc" alt="alter text" />
        <div className="row justify-content-lg-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <i className="cta-one__icon dimon-icon-data1"></i>
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  We <span>Share</span> a Common Goal.
                </h2>
              </div>
              <div className="cta-one__text">
                <p>
                We know you have been burned by other companies, we have too. We 
                understand that we are not meant to work with every business, but 
                we thrive with those who we share a common goal.
                </p>
              </div>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check"></i>Research - We dig deep to find out why people buy from you and, more importantly, why not.
                </li>
                <li>
                  <i className="fa fa-check"></i>Organize - Develop a marketing strategy and align sales and marketing assets.
                </li>
                <li>
                  <i className="fa fa-check"></i>Target - Deploy a variety of digital marketing tactics to attract your ideal buyer.
                </li>
              </ul>
              <div className="row">
                <a href="#none" className="thm-btn">
                  <span>Shredding Companies</span>
                </a>
                <a href="#none" className="thm-btn pricing-one__btn">
                  <span>Pest Control Companies</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
