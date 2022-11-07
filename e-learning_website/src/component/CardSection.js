import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Navibar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardSection.css";
export default function CardSection() {
  return (
    <div>
      {/* Section-1 */}
      <Container>
        <Row className="card-section">
          <Col md={3} >
            <Card style={{ width: "16rem" }} className="col-section">
              <Card.Img variant="top" src="./images/c1.png" className="img"/>
              <Card.Body>
                <Card.Title>Skilled Instructor</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: "16rem" }}className="col-section">
              <Card.Img variant="top" src="./images/c2.png" className="img" />
              <Card.Body>
                <Card.Title>Online Classes</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: "16rem" }}className="col-section">
              <Card.Img variant="top" src="./images/c3.png" className="img" />
              <Card.Body>
                <Card.Title>Home Project</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ width: "16rem" }}className="col-section">
              <Card.Img variant="top" src="./images/c4.png" className="img" />
              <Card.Body>
                <Card.Title>Book Library</Card.Title>
                <Card.Text>Some quick example text to build</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Section-1 */}
    </div>
  );
}
