import React, { Component } from "react";
import Header from "parts/patient/Header";
import ProfileSection from "parts/patient/widget/ProfileSection";
import CardMenuPatient from "parts/patient/widget/Card";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Header className="z-20"></Header>
        <div className="relative ml-4 mr-4 mt-20 z-0  ">
          <ProfileSection></ProfileSection>
          <CardMenuPatient></CardMenuPatient>
        </div>
      </>
    );
  }
}
