import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
 // Replace with the actual image path or import statement
    isBlog={false}
    title="Chocochi Website"
    description="A website created for Chocochi, a platform designed to showcase and sell chocolate products. Developed using React.js, Tailwind CSS, and Redux, the site features a responsive design and seamless shopping experience."
    ghLink="https://github.com/your-github/chocochi-website"  // Replace with your actual GitHub link
    demoLink="https://chocochi-demo.com"  // Replace with your actual demo link
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
     // Replace with the actual image path or import statement
    isBlog={false}
    title="Tap Easy"
    description="A social platform featuring a like count functionality, allowing users to tap and engage with profiles via their profile image. Built using React.js and Tailwind CSS, this project focuses on user interaction and engagement."
    ghLink="https://github.com/your-github/tap-easy"  // Replace with your actual GitHub link
    demoLink="https://app.tapeasy.me/sign-in"  // Link to Tap Easy demo
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
     // Replace with the actual image path or import statement
    isBlog={false}
    title="Ecommerce Website"
    description="An ecommerce platform developed using React.js, Tailwind CSS, and Redux. The site supports multiple vendors, secure payment gateways, and offers a user-friendly shopping experience."
    ghLink="https://github.com/your-github/ecommerce-website"  // Replace with your actual GitHub link
    demoLink="https://ecommerce-demo.com"  // Replace with your actual demo link
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    // Replace with the actual image path or import statement
    isBlog={false}
    title="PopTalk ERP Model"
    description="An ERP model integrated with a call center and management information system, built using React.js, Tailwind CSS, and Redux. The software includes modules for communication, data management, and operational efficiency."
    ghLink="https://github.com/your-github/poptalk-erp"  // Replace with your actual GitHub link
    demoLink="https://poptalk-demo.com"  // Replace with your actual demo link
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    // Replace with the actual image path or import statement
    isBlog={false}
    title="HR Management Software"
    description="A comprehensive HR management software developed using React.js, Tailwind CSS, and Redux. The platform offers features like employee management, payroll, and performance tracking, tailored to streamline HR processes."
    ghLink="https://github.com/your-github/hr-management"  // Replace with your actual GitHub link
    demoLink="https://hr-management-demo.com"  // Replace with your actual demo link
  />
</Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
