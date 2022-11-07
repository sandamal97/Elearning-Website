import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./Navibar.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Categories() {
  return (
    <div>
    {/* Categories Section */}
         <Container>
           <Row>
             <Col md={8}>
               <img
                 className="d-block w-100"
                 src="./images/Graduation.jpg"
                 alt="React Logo"
               />
               <Container>
                 <Row>
                   <Col>
                     <img
                       className="d-block w-100"
                       src="./images/Graduation.jpg"
                       alt="React Logo"
                     />
                   </Col>
   
                   <Col>
                     <img
                       className="d-block w-100 h-100 "
                       src="./images/Graduation.jpg"
                       alt="React Logo"
                     />
                   </Col>
                 </Row>
               </Container>
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
    {/* Categories Section */}</div>
  )
}
