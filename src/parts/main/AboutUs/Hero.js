import React from "react";

import ImageAboutUsHero from "assets/images/aboutUsHero.jpg";

import "assets/index.css";

export default function Hero(props) {
  return (
    <section className="pt-40 h-screen bg-hero-pattern bg-repeat bg-cover ">
      <div className="grid justify-items-center  text-center w-full md:mt-10 lg:mt-0 lg:flex lg:justify-between  lg:items-center">
        <div className="mb-7 pt-4 flex justify-center md:mb-28 md:w-full lg:order-last lg:w-3/6 transitionIn-1-fast">
          <img
            className="md:w-9/12 lg:w-9/12 "
            src={ImageAboutUsHero}
            alt="Hero.jpg"
          ></img>
        </div>
        <div className="lg:order-first lg:w-3/6 ">
          <div className="text-4xl mb-3 text-pink font-bold md:text-7xl lg:text-5xl transitionIn-1-fast">
            Get Fit With Physio
          </div>
          <p className="mb-7 font-bold text-tiny md:text-lg lg:text-base transitionIn-1-base">
            We’ll Bring Back Your FIT Body To you. <br />
            We are team of talented Physiotherapy.
          </p>
          <div
            className="flex justify-center transitionIn-1-slow"
            id="detail-button"
          >
            <div className="text-center text-xl text-pink font-bold">
              Lets See our journey.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
