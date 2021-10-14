import React from "react";
import { Link } from "react-router-dom";
import Button from "elements/Button";
import propTypes from "prop-types";

export default function Breadcrumb(props) {
  return (
    <section className="bg-gray-400 px-4 py-8">
      <div className="container mx-auto">
        <ul className="breadcrumb flex flex-row">
          {props.list?.map?.((items, index) => {
            const arias =
              index === props.list?.length
                ? { "aria-label": "current-page" }
                : {};

            const separator = index == props.list?.length - 1 ? "" : "/";
            return (
              <>
                <li key={items.url} className="mx-2">
                  <Link to={items.url} {...arias}>
                    {items.name}
                  </Link>
                </li>
                <li>{separator}</li>
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Button.propTypes = {
  list: propTypes.array.isRequired,
};
