import React, { Component } from "react";
import Header from "parts/main/Header";
import Footer from "parts/main/Footer";
import Login from "parts/main/Login/Login";
import api from "api/api.json";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <Header position="relative"></Header>
        <Login></Login>
        <Footer data={api.footer}></Footer>
      </>
    );
  }
}
