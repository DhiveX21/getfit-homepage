import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

// value,
// type,
// placeholder,
// name,
// prepend,
// append,
// outerClassName,
// inputClassName,
// errorResponse,

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HasError: "",
      checked: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
      checked: event.target.value,
    });
  };

  render() {
    return (
      <div className={["", this.props.outerClassName].join(" ")}>
        <div className="my-2">
          {this.props.prepend && (
            <div className="">
              <span>{this.props.prepend}</span>
            </div>
          )}
          {this.props.option.map((item) => (
            // <select
            //   name={this.props.name}
            //   type={this.props.type}
            //   // pattern={this.props.pattern}
            //   className={[
            //     "py-1 px-4 bg-white rounded-lg placeholder-gray-400 text-pink border-r-2  border-l-2 border-pink appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-opacity-0",
            //     this.props.inputClassName,
            //   ].join(" ")}
            //   value={this.state.value}
            //   placeholder={this.props.placeholder}
            //   onChange={this.handleChange}
            // >
            //   <option value={item.value}>{item.label}</option>
            // </select>

            <div>
              <label class="inline-flex items-center">
                <input
                  className={[
                    "py-1 px-4 bg-white rounded-lg placeholder-gray-400 text-pink border-r-2  border-l-2 border-pink appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-opacity-0",
                    this.props.inputClassName,
                  ].join(" ")}
                  type={this.props.type}
                  name={this.props.name}
                  value={item.value}
                  onChange={this.handleChange}
                />
                <span class="ml-2">{item.label}</span>
              </label>
            </div>
          ))}
          {this.props.append && (
            <div className="input-group-append bg-gray-500">
              {this.props.append}
            </div>
          )}
        </div>
        {this.state.HasError && (
          <span className="error-helper">{this.state.HasError}</span>
        )}
      </div>
    );
  }
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please Type Here!",
  errorResponse: "Please match the requested format",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
