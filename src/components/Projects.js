import React from "react";
import { ProjectContainer } from "./Projects.style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import starwas from "../assets/projectCardsImgs/starwars.jpg";
import youtube from "../assets/projectCardsImgs/youtube.jpg";
import comingsoon from "../assets/projectCardsImgs/comingsoon.jpg";
import airbnb_image from "../assets/projectCardsImgs/airbnb_image.jfif";

function Projects() {
  return (
    <ProjectContainer id="projects">
      <h1>03.Projects</h1>
      <div className="projects__header">
        <h2>What I've done so far:</h2>
        <div className="projects__cards">
          <div className="card">
            <a
              href="https://starwars-clone.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={starwas} alt="starwars" />
            </a>
            <div className="card__container">
              <h4>
                <b>StarWars Clone</b>
              </h4>
              <p>
                Note: you have to signup with to access the app content"sign up
                with lowcase characters plus at least one capital letter and a
                symbol"
              </p>
            </div>
          </div>
          <div className="card">
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="" />
            </a>
            <div className="card__container">
              <h4>
                <b>Youtube Clone</b>
              </h4>
              <p>the link has a little problem. It will be functional soon</p>
            </div>
          </div>
          <div className="card">
            <a href="https://airbnb-clone-bbjfu89w7-padreno.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={airbnb_image} alt="" />
            </a>
            <div className="card__container">
              <h4>
                <b>Airbnb</b>
              </h4>
              <p>This airbnb front page is working like it sould be</p>
            </div>
          </div>
          <div className="card">
            <a href="/#" target="_blank" rel="noopener noreferrer">
              <img src={comingsoon} alt="" />
            </a>
            <div className="card__container">
              <h4>
                <b>coming soon,</b>
              </h4>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact" className="expandMoreicon">
        <ExpandMoreIcon />
      </a>
    </ProjectContainer>
  );
}

export default Projects;
