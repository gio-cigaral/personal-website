import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./styles/App.css";

import useWindowDimensions from "./utility/dimensions_utility";

import Home from "./components/home";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Technology from "./components/technology";
import Education from "./components/education";
import Connect from "./components/connect";

function App() {
  const {height, width} = useWindowDimensions(); 
  const [navOpen, setNavOpen] = React.useState(false);

  function openNav() {
    document.getElementById("main-content").style.marginLeft = "250px";
    document.getElementById("navbar").style.width = "250px";

    setNavOpen(true);
  }

  function closeNav() {
    if (width < 700) {
      document.getElementById("main-content").style.marginLeft = "0";
      document.getElementById("navbar").style.width = "0";

      setNavOpen(false);
    }
  }

  return (
    <div className="App">
      {/* Side navigation bar */}
      <nav id="navbar" className="navbar">
        <li className="navbar-item">
          <Link to="/home" className="link-style">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className="link-style">
            Profile
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/experience" className="link-style">
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="link-style">
            Projects
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/technology" className="link-style">
            Technology
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/education" className="link-style">
            Education
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/connect" className="link-style">
            Connect
          </Link>
        </li>
      </nav>

      {/* Main content area */}
      <main id="main-content">
        <button type="button" className="navbar-openbtn" onClick={navOpen ? closeNav : openNav}>
          ☰
        </button>

        <div className="test" onClick={closeNav}>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/connect" component={Connect} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
