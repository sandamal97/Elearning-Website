import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Navibar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";
import Form from 'react-bootstrap/Form';

export default function Footer() {
  return (
    <div>
      <Container fluid className="main-footer">
        <Container>
          <Row className="item-list">
            <Col md={2}>
              <h3>Quick Links</h3>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
              <p>FAQs</p>
              <p>Terms & Conditions</p>
            </Col>
            <Col md={2}>
              <h3>Contact</h3>
              <p>123 Street,Colombo</p>
              <p>011-1111111</p>
              <p>abc@gmail.com</p>
            </Col>
            <Col md={2}>
              <h3>Features</h3>
              <p>Jobs</p>
              <p>Brand Assets</p>
            </Col>
            <Col md={2}>
              <h3>Resources</h3>
              <p>Guides</p>
              <p>Research</p>
              <p>Experts</p>
            </Col>
            <Col md={4}>
              <h3>News Alert</h3>
              <p>Subcribe us for getting alerts</p>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
               
              </Form>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <p>All Right Reserved By Sandamal </p>
      </Container>
    </div>
  );
}
