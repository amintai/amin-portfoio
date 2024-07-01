import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import infonoblehse from "../../Assets/Projects/infonoblehse-2.png";
import chat from "../../Assets/Projects/Chat-app.PNG";
import BreakUp from "../../Assets/Projects/BreakOut.PNG";
import PokeDex from "../../Assets/Projects/Pokedex.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infonoblehse}
              isBlog={false}
              title="Infonoblehse"
              // description="I have developed this personal website for one of my client using React.JS,Infonoblehse is used to Elevate workplace well-being, safety, and efficiency with our comprehensive solutions in Environmental Health, Fire Safety, and HR Payrolls"
              ghLink="https://github.com/amintai/infonoblehse"
              demoLink="https://infonoblehse.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              // description="Personal Chat Room or Chat Group to chat and hangout with friends build with react.js, Node JS, and Socket.io. Have features which allows user for realtime messaging, Live Location sharing as well as supports reactions on messages."
              ghLink="https://github.com/amintai/node-chat-app"
              demoLink="https://amin-node-chat-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BreakUp}
              isBlog={false}
              title="Break-Up"
              // description="Personal Chat Room or Chat Group to chat and hangout with friends build with react.js, Node JS, and Socket.io. Have features which allows user for realtime messaging, Live Location sharing as well as supports reactions on messages."
              ghLink="https://github.com/amintai/BreakPoint"
              demoLink="https://loving-fermi-a11fae.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PokeDex}
              isBlog={false}
              title="PokeDex"
              // description="Personal Chat Room or Chat Group to chat and hangout with friends build with react.js, Node JS, and Socket.io. Have features which allows user for realtime messaging, Live Location sharing as well as supports reactions on messages."
              ghLink="https://github.com/amintai/Pokedex"
              demoLink="https://nifty-pike-f4e67d.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
