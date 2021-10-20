import React, { Component } from "react";
import Header from "parts/main/Header";
import Footer from "parts/main/Footer";
import History from "parts/main/AboutUs/History";
import AbousUsHero from "parts/main/AboutUs/Hero";
import Service from "parts/main/Service";
import Achievement from "parts/main/AboutUs/Achievement";
import Client from "parts/main/Client";
import Team from "parts/main/Team";
import TestimonialLine from "parts/main/TestimonialLine";
import StickyMenu from "parts/main/StickyMenu";
import api from "api/api.json";

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <StickyMenu></StickyMenu>
        {/* <Breadcrumb
          list={[
            {
              url: "/",
              name: "Home",
            },
            {
              url: "/aboutUs",
              name: "About Us",
            },
          ]}
        /> */}
        <Header position="absolute"></Header>
        <AbousUsHero></AbousUsHero>
        <History></History>
        <Team data={api.team}></Team>
        <TestimonialLine></TestimonialLine>
        <Service data={api.services}></Service>
        <Achievement></Achievement>
        <Client data={api.feedbacks}></Client>
        <Footer data={api.footer}></Footer>
      </>
    );
  }
}
