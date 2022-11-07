import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Navibar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navibar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Courses() {
  return (
    <div> {/* Populer Courses */}

    <Container>
      <Row>
        <p>Populer Courses</p>
        <Col md={4}>
          <img
            className="d-block w-100"
            src="./images/Graduation.jpg"
            alt="React Logo"
          />
        </Col>

        <Col md={4}>
          <img
            className="d-block w-100 h-100 "
            src="./images/Graduation.jpg"
            alt="React Logo"
          />
        </Col>

        <Col md={4}>
          <img
            className="d-block w-100 h-100 "
            src="./images/Graduation.jpg"
            alt="React Logo"
          />
        </Col>
      </Row>
    </Container>
  {/* Populer Courses */}</div>
  )
}
