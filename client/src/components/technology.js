import React from "react";

import "../styles/page-layout.css";
import "../styles/technology.css";

function Technology() {
  return (
    <div className="Technology page-div">
      <header className="technology-header page-header">
        <h1>Technology</h1>
      </header>

      <main className="technology-main page-main">
        <article>
          <header>Languages</header>
          <ul>
            <li>Java</li>
            <li>C++</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </article>

        <article>
          <header>Frameworks</header>
          <ul>
            <li>React</li>
          </ul>
        </article>

        <article>
          <header>Tools</header>
          <ul>
            <li>Android</li>
            <li>Android Studio</li>
            <li>Node</li>
            <li>Visual Studio Code</li>
            <li>IntelliJ</li>
            <li>PyCharm</li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default Technology;
