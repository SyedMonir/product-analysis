import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <Container className="mx-auto text-center">
      <h1 className="title my-3">About Us</h1>
      <hr className="hr" />
      <section className="my-4">
        <Link className="toggle-btn" to="terms-and-condition">
          Terms And Condition
        </Link>{' '}
        <Link className="toggle-btn" to="privacy">
          Privacy
        </Link>
        <Link className="toggle-btn" to="license">
          License
        </Link>
      </section>
      <Outlet />
    </Container>
  );
};

export default About;
