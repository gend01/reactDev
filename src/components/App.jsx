import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./static/Header";
import Footer from "./static/Footer";
import Router from "./Router"
import index from "../index.css"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
