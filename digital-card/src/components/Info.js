import React from "react";
import Profile from "../image/profile.jpg";

export default function Info() {
  return (
    <info>
      <img src={Profile} alt="Logo" />
      <h3 className="name">Uğur Mert Özder</h3>
      <h4 className="title">Jr.Frontend Developer</h4>
      <p className="website">u.mert.website</p>
      <button class="btn">
        <i class="fa fa-envelope"></i> Email
      </button>
    </info>
  );
}
