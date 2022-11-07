import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navibar.css";

export default function Navibar() {
  return (
    <div>
      {/* Navibar  */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img alt="" src="./images/logo.png" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Course" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Course</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex rounded-0 ">
              <Button variant="outline-success rounded-0 w-100">
                Join Now
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navibar  */}
    </div>
  );
}
