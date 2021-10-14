import React, { Component } from "react";
import Header from "parts/main/Header";
import ServiceDetail from "parts/main/ServiceDetail";
import Footer from "parts/main/Footer";
import api from "api/api.json";

export default class ServicePage extends Component {
  render() {
    return (
      <>
        <Header position="relative"></Header>
        <ServiceDetail data={api.services}></ServiceDetail>
        <Footer data={api.footer}></Footer>
      </>
    );
  }
}
