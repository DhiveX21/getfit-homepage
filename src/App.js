import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/main/LandingPage";
import AboutUs from "pages/main/AboutUs";
import PromoPage from "pages/main/PromoPage";
import ServicePage from "pages/main/ServicePage";
import RegistrationPage from "pages/main/RegistrationPage";
import LoginPage from "pages/main/LoginPage";
import AdminDashboard from "pages/admin/Dashboard";
import AdminListPatient from "pages/admin/ListPatient";
import AdminListAppointment from "pages/admin/ListAppointment";
import AdminListOrder from "pages/admin/ListOrder";
// import "assets/scss/style.scss";
import "assets/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/promo" component={PromoPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/listPatient" component={AdminListPatient} />
        <Route path="/admin/listAppointment" component={AdminListAppointment} />
        <Route path="/admin/listOrder" component={AdminListOrder} />
      </Router>
    </div>
  );
}

export default App;
