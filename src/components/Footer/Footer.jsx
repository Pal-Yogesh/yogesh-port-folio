import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>yogeshpal5049@gmail.com</span>
        <div className="f-icons">
          
          <a href="https://www.instagram.com/yogeshpal1/" target="_blank" rel="noreferrer">
          <Insta color="white" size={"3rem"}  /></a>

          <a href="https://www.linkedin.com/in/yogesh-pal-7118a023b/" target="_blank" rel="noreferrer">
          <Linkedin color="white" size={"3rem"} /></a>

          <a href="https://github.com/Pal-Yogesh" target="_blank" rel="noreferrer">
          <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
