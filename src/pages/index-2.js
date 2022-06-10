import React from "react";
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import BannerTwo from "../components/BannerTwo";
import Features from "../components/Features";
import Video from "../components/Video";
import CallToAction from "../components/CallToAction";
import CallToActionTwo from "../components/CallToActionTwo";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import Faq from "../components/Faq";
import NewsHome from "../components/NewsHome";
import Subscribe from "../components/Subscribe";

const HomePageTwo = () => (
  <Layout pageTitle="Dimon - Home 2">
    <NavTwo />
    <BannerTwo />
    <Features />
    <CallToAction />
    <Pricing />
    <NewsHome />
    <Subscribe />
    <Footer />
  </Layout>
);

export default HomePageTwo;
