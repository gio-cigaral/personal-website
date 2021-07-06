import React from "react";

import "../styles/page-layout.css";
import "../styles/education.css";

function Education() {
  return (
    <div className="Education page-div">
      <header className="education-header page-header">
        <h1>Education</h1>
      </header>

      <main className="education-main page-main">
        <article>
          <header>
            <div>BE(Hons) Software Engineering</div>
            <div>Victoria University of Wellington</div>
            <div>2019 - Present</div>
          </header>

          <div>
            <ul>
              <li>Awarded Dean&apos;s List for Academic Excellence - 2019</li>
              <li>
                Awarded Victoria Tangiwai School Leaver Scholarship - 2018
              </li>
            </ul>
          </div>
        </article>

        <article>
          <header>
            <div>Computer Engineering Student Exchange</div>
            <div>Nanyang Technological University, Singapore</div>
            <div>2019</div>
          </header>

          <div>
            <ul>
              <li>Wellington Global Exchange Programme - Trimester 1, 2019</li>
              <li>Focus on Computer Engineering/Computer Science courses</li>
            </ul>
          </div>
        </article>

        <article>
          <header>
            <div>NCEA Certificate</div>
            <div>St Bernard&apos;s College</div>
            <div>2012 - 2018</div>
          </header>

          <div>
            <ul>
              <li>Dux of St Bernard&apos;s College - 2018</li>
              <li>NCEA Level 3 Excellence Endorsement - 2018</li>
              <li>NCEA Level 2 Excellence Endorsement - 2017</li>
              <li>NCEA Level 1 Excellence Endorsement - 2016</li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}

export default Education;
