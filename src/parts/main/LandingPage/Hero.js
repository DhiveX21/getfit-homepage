import React from "react";

import ImageHero from "assets/images/hero.png";
import Button from "elements/Button";
import SectionTitle from "elements/SectionTitle";
import "assets/index.css";

export default function Hero(props) {
  return (
    <section className="pt-20 h-screen bg-hero-pattern bg-repeat bg-cover">
      <div className="grid justify-items-center  text-center w-full md:mt-10 lg:mt-0 lg:flex lg:justify-between  lg:items-center">
        <div className="mb-7 pt-4 flex justify-center lg:order-last lg:w-3/6 hero-img">
          <img
            className="md:w-9/12 lg:w-9/12 "
            src={ImageHero}
            alt="Hero.jpg"
          ></img>
        </div>
        <div className="lg:order-first lg:w-3/6 ">
          <div className="text-4xl mb-3 text-pink font-bold md:text-7xl lg:text-5xl transitionIn-1-fast">
            Bring Back Your Fit Body.
          </div>
          <p className="mb-7 font-bold text-tiny md:text-lg lg:text-base transitionIn-1-base">
            We’ll Bring Back Your FIT Body To you. <br />
            We are team of talented Physiotherapy.
          </p>
          <div
            className="flex justify-center transitionIn-1-slow"
            id="detail-button"
          >
            <Button
              className="group shadow-md w-32 text-sm font-medium rounded-4xl bg-pink py-2 lg:py-2 lg:w-32 hero-detail-button hover:bg-blue hover:shadow-lg  hover:shadow-inner hover:-translate-y-1 transform transition ease-in-out duration-200 "
              data-replace='{ "-translate-y-1": "translate-y-10" }'
              type="link"
              href="/aboutUs"
            >
              <p className="text-white hero-detail-text">Detail</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
