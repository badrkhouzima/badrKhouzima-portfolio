import React from "react";
import { Container } from "./About.style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function About() {
  return (
    <Container id="about">
      <div className="about">
        <h1>01. About Me</h1>
        <div className="about__container">
          <div className="about__Me">
            <p>
              Hello! My name is Badr and I am a front-end web developer with a
              passion for creating visually appealing and user-friendly
              websites. My journey began in 2018 when I started building
              webpages using WordPress and customizing scripts. As I delved
              deeper into the field, I realized that I could turn my passion
              into a profession by mastering the latest technologies and tools.
              I have completed a web development course on Udemy, and an
              in-person bootcamp at IT Academy in Barcelona, where I focused on
              JavaScript web development with Reactjs, as well as learning
              TypeScript, Sass, HTML, CSS, and testing framework Jest. I also
              joined another bootcamp at the Universidad Autonoma de Barcelona
              to further my skills in JavaScript, VueJS, and SQL. I am always
              striving to expand my skillset and stay up-to-date with the latest
              technologies in web development."
            </p>
            <div className="skills">
              <ul className="skills-list1">
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Vue.js</li>
              </ul>
              <ul className="skills-list2">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
              </ul>
              <ul className="skills-list2">
                <li>Bootstrap</li>
                <li>Git</li>
                <li>SQL</li>
              </ul>
              <ul className="skills-list2">
                <li>Vercel</li>
                <li>Firebase</li>
                <li>...</li>
              </ul>
            </div>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/64600480?v=4"
            alt="badr Khouzima"
          />
        </div>
      </div>
      <a href="#experience" className="expandMoreicon">
        <ExpandMoreIcon />
      </a>
    </Container>
  );
}

export default About;
