import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate developer specializing in modern web technologies.
              <br />
              <br />My core expertise lies in 
              <i>
                <b className="purple"> JavaScript, React.js, Next.js, Node.js, and Express.js.</b>
              </i>
              <br />
              <br />
              I have a deep interest in building dynamic and scalable web applications,
              <i>
                <b className="purple"> leveraging MongoDB</b>
              </i> for robust data management and
              <i>
                <b className="purple"> Webpack and Babel</b>
              </i> for efficient bundling and transpilation.
              <br />
              <br />
              I'm also exploring the latest advancements in web development, aiming to deliver cutting-edge solutions that enhance user experience and performance.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              I'm always open to new opportunities and collaborations.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/m-yunus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
       
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammed-yunus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
