import React, { Component } from "react";

import Header from "parts/admin/Header";
import Card from "parts/admin/widget/Card";
import Title from "parts/admin/widget/Title";
import Statistics from "parts/admin/widget/Statistics";
import Sidebar from "parts/admin/Sidebar";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Header className="z-20"></Header>
        <div className="relative ml-16 mr-2 mt-16 z-0 md:ml-68 md:mr-4 md:mt-18">
          <Title title="Dashboard"></Title>
          <Card></Card>
          <Statistics></Statistics>
        </div>
        <Sidebar></Sidebar>
      </>
    );
  }
}
