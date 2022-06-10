import React from "react";
import Helmet from "react-helmet";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/plugins/dimon-icons/style.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="page-wrapper">{props.children}</div>
    </div>
  );
};
export default Layout;
