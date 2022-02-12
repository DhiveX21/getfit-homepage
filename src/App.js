import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/main/LandingPage";
import PilihKelas from "pages/main/PilihKelasPage";
// import "assets/scss/style.scss";
import "assets/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={PilihKelas} />
      </Router>
    </div>
  );
}

export default App;
