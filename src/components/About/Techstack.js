import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiYii,
  DiCodeigniter,
  DiGit,
} from "react-icons/di";
import {
  SiPostman,
  SiNextdotjs,
  SiMysql,
  SiSocketdotio,
} from "react-icons/si";
import { FaPhp, FaJava, FaVuejs, FaLaravel } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiYii />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio />
      </Col>
    </Row>
  );
}

export default Techstack;
