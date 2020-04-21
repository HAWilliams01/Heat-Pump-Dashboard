import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./components/home.component.js";
import Information from "./components/information.component.js";

function App() {
  return (
    <body>
      
          <div>
      <Router>
    <div className="container">
     <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
    <Link to="/" className="navbar-brand">Heat Pump</Link>
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="navbar-item">
            <Link to="/information" className="nav-link">About Me</Link>
            </li>
        </ul>
        </div>
    </nav>
    <h2 align="left" className="dashboard">Dashboard<img alt="" height="50" align="right" src="https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/indianatech.sidearmsports.com/images/responsive/it_logo.svg"></img></h2>
    <Route path="/" exact component={ Home } />
    <Route path="/information" component={ Information } />
    </div>  
    </Router>
    </div>
    </body>
  );
}

export default App;

/*
git init
git add README.md
git commit -m "first"
git remote add origin https://github.com/HAWilliams01/Heat-Pump-Dashboard.git
git push -u origin master
*/