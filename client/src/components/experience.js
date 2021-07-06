import React from "react";

import "../styles/page-layout.css";
import "../styles/experience.css";

function Experience() {
  return (
    <div className="Experience page-div">
      <header className="experience-header page-header">
        <h1>Experience</h1>
      </header>

      <main className="experience-main page-main">
        <article>
          <header>
            <span>Countdown</span>
            <span>&nbsp;|&nbsp;</span>
            <span>Checkout Operator</span>
          </header>
          <div>2017 - 2019</div>

          <div>
            <ul>
              <li>
                Provided customers with fast, efficient, friendly and
                knowledgeable service
              </li>
              <li>
                Answered customer queries and complaints in a courteous manner
              </li>
              <li>Worked cooperatively in a team environment</li>
              <li>
                Ensured the health and safety of all store associates and
                customers
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Experience;
