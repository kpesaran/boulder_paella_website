import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import paellaImage from '../assets/images/paella-1.jpg';
import '../styles/homePage.scss';

const HomePage: React.FC = () => {
  return (
    <Container className = "homepage-content" id= 'home'>
      <Row>
        <Col md={4}>
          <img src={paellaImage} alt='Paella' className='img-fluid' />
        </Col>
        <Col>
          <div className='jumbotron'>
            <h1>Boulder Paella</h1>
            <p className='lead'>
              We offer delicious catering services that specializes in providing fresh, locally sourced food for events
              and markets.
            </p>
            <hr className='my-4' />
            <p>Explore our services and book us for your next event.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
