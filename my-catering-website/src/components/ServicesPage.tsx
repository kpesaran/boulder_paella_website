import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/servicesPage.scss';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Corporate Event Catering',
      description:
        'We provide catering services for corporate events, including lunches, dinners, and networking events.',
    },
    {
      title: 'Wedding Catering',
      description:
        "Make your special day even more memorable with our wedding catering services. We provide everything from hors d'oeuvres to the wedding cake.",
    },
    {
      title: 'Farmers Market Stand',
      description:
        'Visit us at the local farmers market to enjoy fresh, locally-sourced food from our stand.',
    },
    {
      title: 'Private Parties and Celebrations',
      description:
        "Host your next celebration with us! Whether it's a birthday party, anniversary, or holiday gathering, we'll provide delicious food and exceptional service.",
    },
  ];

  return (
    <Container>
      <h3>Our Services</h3>
      <Row>
        {services.map((service) => (
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
