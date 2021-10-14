import React, { Component } from "react";
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

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HasError: "",
      value: "",
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    this.setState({
      value: event.target.value,
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
          <input
            name={this.props.name}
            type={this.props.type}
            // pattern={this.props.pattern}
            className={[
              "py-1 px-4 bg-white rounded-lg placeholder-gray-400 text-pink border-r-2  border-l-2 border-pink appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink focus:border-opacity-0",
              this.props.inputClassName,
            ].join(" ")}
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          ></input>
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

// export default function Text(props) {
//   console.log(props);
//   const {
//     value,
//     type,
//     placeholder,
//     name,
//     prepend,
//     append,
//     outerClassName,
//     inputClassName,
//     errorResponse,
//   } = props;

// const [HasError, SetHasError] = useState(null);
// let pattern = "";

// if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// if (type === "phone") pattern = "[0-9]*";

// const onChange = (event) => {
//   const target = {
//     target: {
//       name: name,
//       value: event.target.value,
//     },
//   };
// };

// if (type === "email") {
//   if (!pattern.test(event.target.value)) SetHasError(errorResponse);
//   else SetHasError("");
// }

// if (type === "phone") {
//   if (event.target.validity.valid) props.onChange(target);
// } else {
//   props.onChange(target);
// }

//   return (

//   );
// }

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
