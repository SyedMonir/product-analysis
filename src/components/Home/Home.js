import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
  const [reviews] = useReviews();
  const recentReviews = reviews.slice(0, 3);
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
      </Container>
      <Container>
        <section className="my-5 text-center">
          <h3 className="title">MOST HELPFUL REVIEWS</h3>
          <hr className="hr" />
          <Row className="mb-4 justify-content-center">
            {recentReviews.map((review) => (
              <Review key={review.id} review={review}></Review>
            ))}
          </Row>
          <Link className="my-5 see-all-reviews-btn" to={`/reviews`}>
            See all reviews
          </Link>
        </section>
      </Container>
    </>
  );
};

export default Home;
