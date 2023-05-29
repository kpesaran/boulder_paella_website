import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/homePage.scss';
import paellaImage from '../assets/images/paella-1.jpg';

const HomePage: React.FC = () => {
  return (
    <div className='hero'>
      <Container>
        <Row>
          <Col md={6}>
            <h1>Boulder Paella</h1>
            <h3>
              Welcome to Boulder Paella, your gateway to the vibrant flavors of
              Spain, right here in Colorado! Visit us at the Boulder Farmers
              Market every Saturday (9am-2pm) and Wednesday (4pm-8pm) to indulge
              in our authentic, locally-inspired paellas, tapas, and beverages.
              We also offer catering services and participate in special events
              across the state.
            </h3>
            <p>
              Our signature paellas are crafted using the finest ingredients,
              such as saffron, paprika, and bomba rice. We take pride in
              incorporating fresh, local mushrooms and seasonal ingredients like
              onions, asparagus, and tomatoes to create a truly unique culinary
              experience. Alongside paella, we serve a variety of tapas and
              refreshing drinks to elevate your dining adventure.{' '}
            </p>
            <Button variant='primary' size='lg'>
              View Menu
            </Button>
          </Col>
          <Col md={6}>
            <img src={paellaImage} alt='Paella' className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
