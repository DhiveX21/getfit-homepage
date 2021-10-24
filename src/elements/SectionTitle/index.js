import React, { useEffect } from "react";
import propTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionTitle(props) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div className="mb-5 lg:mb-10" data-aos="fade-in">
      <div className="text-base text-gray-400 md:text-lg text-center font-bold flex flex-col">
        {props.preTitle}
        <span className="text-pink text-xl">( {props.Title} )</span>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  preTitle: propTypes.string.isRequired,
  Title: propTypes.string.isRequired,
};
