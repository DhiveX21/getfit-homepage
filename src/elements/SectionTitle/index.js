import React from "react";
import propTypes from "prop-types";

export default function SectionTitle(props) {
  return (
    <div className="mb-5 lg:mb-10">
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
