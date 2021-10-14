import React, { Component } from "react";

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
  constructor() {
    super();
    this.state = {
      name: "Forest Gump",
    };

    this.onValChange = this.onValChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onValChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmitForm}>
          <label>
            <input
              type="radio"
              value="Forest Gump"
              checked={this.state.name === "Forest Gump"}
              onChange={this.onValChange}
            />
            <span>Forest Gump</span>
          </label>

          <label>
            <input
              type="radio"
              value="Die Hard"
              checked={this.state.name === "Die Hard"}
              onChange={this.onValChange}
            />
            <span>Die Hard</span>
          </label>
        </form>
      </div>
    );
  }
}
