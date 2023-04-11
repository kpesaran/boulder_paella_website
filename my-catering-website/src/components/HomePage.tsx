import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/homePage.scss';
import paellaImage from '../assets/images/paella-1.jpg';

const HomePage: React.FC = () => {
  return (
    <div className='hero'>
      <Container>
        <Row>
          <Col md={4}>
            <img src={paellaImage} alt='Paella' className='img-fluid' />
          </Col>
          <Col md={6}>
            <h1>Welcome to our Paella Catering Business</h1>
            <p>
              We provide delicious, authentic Spanish paella for your events.
            </p>
            <Button variant='primary' size='lg'>
              View Menu
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
