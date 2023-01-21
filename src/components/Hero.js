import React from "react";
import { HeroSection } from "./Hero.style.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Hero({ toggle }) {
  return (
    <HeroSection className={toggle ? "toggleIsActive" : ""}>
      <div className="homePage__bio">
        <h1>Hi, my name is</h1>
        <h2>Badr Khouzima.</h2>
        <h3>I specialize in crafting outstanding web creations.</h3>
        <p>
          I am a web developer with a focus on JavaScript and its frameworks,
          specifically React, Vue and VanillaJS. I am currently re-studying web
          development at Universitat Autónoma De Barcelona with Vanilla
          JavaScript, Vue and SQL.
        </p>
      </div>
      <a href="#about" className="expandMoreicon">
        <ExpandMoreIcon />
      </a>
    </HeroSection>
  );
}

export default Hero;
