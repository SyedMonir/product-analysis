import React from 'react';
import './Review.css';

const Review = ({ review }) => {
  const { name, description, image, rating } = review;
  return (
    <div className="review col-md-4">
      <h1>{name}</h1>
    </div>
  );
};

export default Review;
