import React, { Component } from "react";

export default class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      month: true,
      year: false
    };
  }

  handleToggle = () => {
    const month = this.state.month;
    const year = this.state.year;

    if (month) {
      this.setState({ year: true, month: false });
    }
    if (year) {
      this.setState({ year: false, month: true });
    }
  };

  render() {
    return (
      <section className="pricing-one" id="pricing">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Choose <span>Pricing Plans</span> Which <br /> Suits Your Needs.
            </h2>
          </div>
          <ul
            className="list-inline text-center switch-toggler-list"
            id="switch-toggle-tab"
          >
            <li className={this.state.month ? "month active" : "month"}>
              <a href="#none">Monthly</a>
            </li>
            <li>
              <div
                className={this.state.year ? "switch off" : "switch on"}
                role="button"
                tabIndex="-1"
                onClick={this.handleToggle}
                onKeyDown={this.handleToggle}
              >
                <span className="slider round"></span>
              </div>
            </li>
            <li className={this.state.year ? "year active" : "year"}>
              <a href="#none">Yearly</a>
            </li>
          </ul>
          <div className="tabed-content">
            {this.state.month === true ? (
              <div id="month">
                <div className="row pricing-one__price-row">
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>$20.00</h3>
                      <p>basic pack</p>
                      <ul className="list-unstyled">
                        <li>Extra features</li>
                        <li>Lifetime free support</li>
                        <li>Upgrate options</li>
                        <li>Full access</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Choose Plan</span>
                      </a>
                      <span className="tag-line">No hidden charges!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInDown"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>$30.00</h3>
                      <p>medium pack</p>
                      <ul className="list-unstyled">
                        <li>Extra features</li>
                        <li>Lifetime free support</li>
                        <li>Upgrate options</li>
                        <li>Full access</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Choose Plan</span>
                      </a>
                      <span className="tag-line">No hidden charges!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>$40.00</h3>
                      <p>premium pack</p>
                      <ul className="list-unstyled">
                        <li>Extra features</li>
                        <li>Lifetime free support</li>
                        <li>Upgrate options</li>
                        <li>Full access</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Choose Plan</span>
                      </a>
                      <span className="tag-line">No hidden charges!</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {this.state.year === true ? (
              <div id="year">
                <div className="row pricing-one__price-row">
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>$120.00</h3>
                      <p>basic pack</p>
                      <ul className="list-unstyled">
                        <li>Extra features</li>
                        <li>Lifetime free support</li>
                        <li>Upgrate options</li>
                        <li>Full access</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Choose Plan</span>
                      </a>
                      <span className="tag-line">No hidden charges!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInDown"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>$230.00</h3>
                      <p>medium pack</p>
                      <ul className="list-unstyled">
                        <li>Extra features</li>
                        <li>Lifetime free support</li>
                        <li>Upgrate options</li>
                        <li>Full access</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Choose Plan</span>
                      </a>
                      <span className="tag-line">No hidden charges!</span>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 animated fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="pricing-one__single text-center">
                      <h3>$340.00</h3>
                      <p>premium pack</p>
                      <ul className="list-unstyled">
                        <li>Extra features</li>
                        <li>Lifetime free support</li>
                        <li>Upgrate options</li>
                        <li>Full access</li>
                      </ul>
                      <a href="#none" className="thm-btn pricing-one__btn">
                        <span>Choose Plan</span>
                      </a>
                      <span className="tag-line">No hidden charges!</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}
