import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Instruction() {
  return (
    <div>   {/* Instructor Section */}
    <Container>
      <Row>
        <p>Expert Instructors</p>
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
{/* Instructor Section */}</div>
  )
}
