import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiNgrok,
  SiVercel,
  SiLaragon,
} from "react-icons/si";
import { FaSourcetree } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaSourcetree />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaragon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNgrok />
      </Col>
    </Row>
  );
}

export default Toolstack;
