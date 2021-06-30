import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./styles/App.css";

import Home from "./components/home";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Technology from "./components/technology";
import Education from "./components/education";
import Connect from "./components/connect";

function App() {
  function openNav() {
    document.getElementById("main-content").style.marginLeft = "250px";
    document.getElementById("navbar").style.width = "250px";
  }

  function closeNav() {
    // TODO: Change to close side navbar with click on main screen
    document.getElementById("main-content").style.marginLeft = "0";
    document.getElementById("navbar").style.width = "0";
  }

  return (
    <div className="App">
      {/* Side navigation bar */}
      <nav id="navbar" className="navbar">
        <li className="navbar-item">
          <button type="button" className="navbar-closebtn" onClick={closeNav}>
            x
          </button>
        </li>
        <li className="navbar-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="navbar-item">
          <Link to="/technology">Technology</Link>
        </li>
        <li className="navbar-item">
          <Link to="/education">Education</Link>
        </li>
        <li className="navbar-item">
          <Link to="/connect">Connect</Link>
        </li>
      </nav>

      {/* Main content area */}
      <main id="main-content">
        <button type="button" className="navbar-openbtn" onClick={openNav}>
          ☰
        </button>

        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/connect" component={Connect} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
