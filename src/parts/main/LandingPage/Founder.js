import React from "react";

import ImageFounder from "assets/images/founder.jpg";
import Button from "elements/Button";
import SectionTitle from "elements/SectionTitle";

export default function Founder(props) {
  return (
    <section className="founder flex flex-col py-5 px-5 lg:px-52 mb-20 lg:h-screen lg:my-auto">
      <div className="lg:mt-32">
        <SectionTitle preTitle="Greetings Our" Title="Founder" />
      </div>
      <div className="md:flex rounded-4xl p-8 md:p-0">
        <img
          className="w-32 h-32 md:h-60 md:w-60 rounded-4xl mx-auto"
          src={ImageFounder}
          alt="Founder.jpg"
          width="384"
          height="512"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-sm lg:text-base">“{props.data.description}”</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-pink font-bold lg:text-xl">
              {props.data.name}
            </div>
            <div className="text-gray-500">Founder</div>
          </figcaption>

          <div className="flex justify-center md:justify-start transitionIn-1-slow">
            <Button
              className="group shadow-md w-32 text-sm font-medium rounded-4xl bg-pink text-white py-2 lg:py-2 lg:w-32 hero-detail-button hover:bg-blue  md:text-center  hover:-translate-y-1 transform transition ease-in-out duration-200 "
              type="link"
              href={props.data.url}
              target="_blank"
              isExternal
              hasShadow
            >
              Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
