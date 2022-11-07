import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
export default function TopHeader() {
  return (
    <div>
              {/* TopHeader Carosel  */} 
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="./images/1.jpg"
            alt="React Logo"
          />
          <Carousel.Caption>
            <h2 class="text-start">Best Learning Platfrom</h2>
            <p class="text-start">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="./images/2.jpg"
            alt="React Logo"
          />
          <Carousel.Caption>
            <h2 class="text-start">Easy to Access</h2>
            <p class="text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/3.jpg"
            alt="React Logo"
          />
          <Carousel.Caption>
            <h2 class="text-start">Multiple Courses</h2>
            <p class="text-start">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        {/* TopHeader Carosel  */} 
    </div>
  )
}
