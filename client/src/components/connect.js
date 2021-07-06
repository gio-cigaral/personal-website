import React from "react";

import "../styles/page-layout.css";
import "../styles/connect.css";

function Connect() {
  return (
    <div className="Connect page-div">
      <header className="connect-header page-header">
        <h1>Connect</h1>
      </header>

      <main className="connect-main page-main">
        <div>
          <ul>
            <li>
              <a href="mailto:gio.cigaral@gmail.com">email</a>
            </li>
            <li>
              <a href="https://github.com/gio-cigaral">github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gianpaolo-cigaral-7a31ab216/">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Connect;
