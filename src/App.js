import logo from './logo.svg';
import Header from "./components/Header";
import Home from "./pages/Home";
import './scss/app.scss';
import React, {useEffect, useState} from "react";

function App() {


  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
              <Home />
          </div>
        </div>
      </div>
  );
}

export default App;
