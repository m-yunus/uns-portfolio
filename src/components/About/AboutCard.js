import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Muhammed Yunus</span> from <span className="purple">Malappuram, India</span>.
            <br />I work as a software developer at Popit Solutions, where I focus on building impactful digital solutions.
            <br />
            I hold an Integrated Diploma in Computer Engineering from AKNM GPTC Thirurangadi.
            <br />
            <br />
            When I'm not coding, I enjoy engaging in activities that fuel my creativity and enthusiasm.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always aim to create solutions that matter."{" "}
          </p>
          <footer className="blockquote-footer">Yunus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
