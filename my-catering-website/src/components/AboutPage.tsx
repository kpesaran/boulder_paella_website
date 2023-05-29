import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../styles/aboutPage.scss'; // Import the new styling file

const AboutPage: React.FC = () => {
  return (
    <section id="about">
      <Container className = "outer-container">
        <Row>
          <Col className = "main-container">
            <h2>About Us</h2>
            <p>Boulder Paella was founded with a vision to combine a love for saffron-based rice dishes and a passion for fresh, local ingredients. Our founder embarked on this journey last year, creating a one-of-a-kind culinary experience that marries traditional Spanish flavors with the bounty of Colorado's produce.

Paella, a dish with deep roots in Valencia, Spain, is celebrated for its rich saffron flavors and stunning presentation. As an integral part of Spanish cuisine, paella showcases saffron, the world's most expensive spice, which is extracted from the saffron crocus flower. By cherishing the history of saffron and paella, we strive to provide an unparalleled and unforgettable dining experience.

</p>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;

