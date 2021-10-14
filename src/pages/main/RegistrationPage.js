import React, { Component } from "react";
import Header from "parts/main/Header";
import Footer from "parts/main/Footer";
import Register from "parts/main/Registration/Register";
import api from "api/api.json";

export default class RegistrationPage extends Component {
  render() {
    return (
      <>
        <Header position="absolute"></Header>
        <Register></Register>
        <Footer data={api.footer}></Footer>
      </>
    );
  }
}
