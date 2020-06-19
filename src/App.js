import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Beta from "./components/Beta";
import Landing from "./components/LandingPage";
import Rebelle from "./components/Rebelle";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Route path="/" component={Rebelle} exact />
      <Route path="/beta2" component={Landing} />
      <Route path="/beta3" component={Beta} />
    </div>
  );
}

export default App;
