import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import videoBG from "../assets/images/background/video-one-bg.png";
import videoImage from "../assets/images/resources/video-1-1.jpg";
export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="video-one" id="video">
        <img src={videoBG} alt="alter text" className="video-one__bg" />
        <div className="container wow fadeInUp" data-wow-duration="1500ms">
          <div className="video-one__box ">
            <img src={videoImage} alt="" />
            <div className="video-one__content">
              <ModalVideo
                channel="youtube"
                isOpen={this.state.isOpen}
                videoId="aitb---aDYM"
                onClose={() => this.setState({ isOpen: false })}
              />
              <div
                onClick={this.openModal}
                onKeyDown={this.openModal}
                role="button"
                tabIndex="-1"
                className="video-popup video-one__btn"
              >
                <i className="fa fa-play"></i>
              </div>

              <h2 className="video-one__title">
                Watch Our <span>Tutorial</span> <br /> Videos.
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
