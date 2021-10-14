import React, { Component } from "react";
import Hero from "parts/main/LandingPage/Hero";
import Founder from "parts/main/LandingPage/Founder";
import Team from "parts/main/Team";
import Header from "parts/main/Header";
import Service from "parts/main/Service";
import TestimonialLine from "parts/main/TestimonialLine";
import Promo from "parts/main/Promo";
import Galery from "parts/main/Galery";
import Footer from "parts/main/Footer";
import VideoOpening from "parts/main/VideoOpening";
import StickyMenu from "parts/main/LandingPage/StickyMenu";
import api from "api/api.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <StickyMenu></StickyMenu>
        <Header position="absolute"></Header>
        <Hero data={api.hero}></Hero>
        <VideoOpening data={api.videoOpening}></VideoOpening>
        <Founder data={api.founder}></Founder>
        <Galery data={api.galleries}></Galery>
        <Service data={api.services}></Service>
        <TestimonialLine></TestimonialLine>
        <Team data={api.team}></Team>
        <Promo data={api.promo}></Promo>
        <Footer data={api.footer}></Footer>
      </>
    );
  }
}
