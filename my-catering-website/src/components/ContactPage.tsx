import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
