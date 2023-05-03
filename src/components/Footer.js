import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer-container">
      <img
        className="logo-container"
        src={require("./../assets/Rick_and_Morty.svg.png")}
      />
      <div className="social-media-container">
        <h4 className="follow">Follow us</h4>
        <ul>
          <li><BsInstagram color="White" size={"30px"}/></li>
          <li><BsFacebook color="White" size={"30px"}/></li>
          <li><BsTwitter color="White" size={"30px"}/></li>
          <li><BsYoutube color="White" size={"30px"}/></li>
        </ul>
      </div>
    </div>
  );
}
