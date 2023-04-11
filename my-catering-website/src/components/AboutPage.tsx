import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutPage: React.FC = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>We are a food catering and farmer market stand business that specializes in providing fresh, locally sourced food for events and markets.</p>
            <p>Our mission is to promote sustainable agriculture and support local farmers by using their products in our catering and market stand offerings.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;

