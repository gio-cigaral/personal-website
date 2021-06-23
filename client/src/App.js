import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./components/home";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Technology from "./components/technology";
import Education from "./components/education";
import Connect from "./components/connect";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
      </nav>

      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/technology" component={Technology} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/connect" component={Connect} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
