import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const CustomerReviews = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <Container>
      <Row>
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReviews;
