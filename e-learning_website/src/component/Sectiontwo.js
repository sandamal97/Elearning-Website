import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Navibar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Sectiontwo.css';

export default function Sectiontwo() {
  return (
    <div>
      {/* Section-2  */}
      <Container className="section-two">
        <Row>
          <Col>
            <img
              className="d-block w-100"
              src="./images/Graduation.jpg"
              alt="React Logo"
            />
          </Col>
          <Col>
            <h3>
              <b>
                About Us<hr></hr>
              </b>
            </h3>
            <h2>
              <b>Welcome to Ocean-Learning</b>
            </h2>
            <p>
              Wisdom is the right use of knowledge. To know is not to be wise.
              Many men know a great deal, and are all the greater fools for it.
              There is no fool so great a fool as a knowing fool. But to know
              how to use knowledge is to have wisdom.
            </p>
            <Container>
              <Row>
                <Col >
                 <ol>
                  <li>Skilled Instructor</li>
                  <li>Online Classes</li>
                  <li>Live Lessons</li>
                 </ol>
                </Col>

                <Col>
                <ol>
                  <li>Skilled Instructor</li>
                  <li>Online Classes</li>
                  <li>Live Lessons</li>
                 </ol>
                </Col>
              </Row>
            </Container>
            <Button variant="outline-success rounded-0 w-25 " className="btn-1" >Read More</Button>{" "}
          </Col>
        </Row>
      </Container>
      {/* Section-2  */}{" "}
    </div>
  );
}
