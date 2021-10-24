import React, { Component } from "react";
import Header from "parts/main/Header";
import Promo from "parts/main/Promo";
import Footer from "parts/main/Footer";
import api from "api/api.json";
import StickyMenu from "parts/main/StickyMenu";

export default class PromoPage extends Component {
  render() {
    return (
      <>
        <StickyMenu></StickyMenu>
        <Header position="relative"></Header>
        <Promo data={api.promo}></Promo>
        <Footer data={api.footer}></Footer>
      </>
    );
  }
}
