import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <>
      <Container>
        <Row className="align-items-center my-5">
          <Col>
            <h1 className="title">CALL OF DUTY</h1>
            <p>
              Call of Duty is a first-person shooter video game franchise
              published by Activision. Starting out in 2003, it first focused on
              games set in World War II. Over time, the series has seen games
              set in the midst of the Cold War, futuristic worlds, and outer
              space.
            </p>
            <button className="trailer-btn">Watch Trailer</button>
          </Col>
          <Col className="d-flex justify-content-center">
            <img
              className="img-fluid "
              src="https://imgc.allpostersimages.com/img/posters/call-of-duty-skull_u-L-F9DGLU0.jpg"
              alt="CALL OF DUTY"
            />
          </Col>
        </Row>
        <section className="my-5 text-center">
          <h3>CUSTOMER REVIEWS</h3>
        </section>
      </Container>
    </>
  );
};

export default Home;
