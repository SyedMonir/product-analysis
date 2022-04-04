import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const CustomerReviews = () => {
  const [reviews] = useReviews();
  // console.log(reviews);
  return (
    <Container>
      <h3 className="title text-center my-3">CUSTOMER REVIEWS</h3>
      <hr className="hr" />
      <Row className="mx-auto justify-content-center">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReviews;
