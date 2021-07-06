import React from "react";

import "../styles/page-layout.css";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="Profile page-div">
      <header className="profile-header page-header">
        <h1>Profile</h1>
      </header>

      <main className="profile-main page-main">
        <div className="profile-content">
          <ul className="content-details">
            <li>
              <p className="content-label">Name</p>
              <p className="content-value">Gianpaolo (Gio) Cigaral</p>
            </li>
            <li>
              <p className="content-label">Birthday</p>
              <p className="content-value">05 November 2000</p>
            </li>
            <li>
              <p className="content-label">Locations</p>
              <p className="content-value">Wellington, New Zealand</p>
              <p className="content-value">Auckland, New Zealand</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Profile;
