import React from "react";
import "./App.scss";

import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <HashRouter>
        <div style={{ backgroundColor: "yellow", color: "red", padding: "20px" }}>
          <Navigation />
          <AppRouter />
          <Footer />
        </div>
      </HashRouter>
    </>
  );
};

export default App;
