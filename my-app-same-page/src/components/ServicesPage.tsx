import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/servicesPage.scss"

type Service = {
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Corporate Event Catering",
    description:
      "We provide catering services for corporate events, including lunches, dinners, and networking events.",
  },
  {
    title: "Wedding Catering",
    description:
      "Make your special day even more memorable with our wedding catering services. We provide everything from hors d'oeuvres to the wedding cake.",
  },
  {
    title: "Private Parties and Celebrations",
    description:
      "From birthday parties to anniversaries and everything in between, we offer catering services for all kinds of private events.",
  },
  {
    title: "Farmers Market Stand",
    description:
      "Visit us at the local farmers market to enjoy fresh, locally-sourced food from our stand.",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <Container className="my-5 services" id = "services">
      <h2>Our Services</h2>
      <Row>
        {SERVICES.map((service) => (
          <Col md={4} key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
