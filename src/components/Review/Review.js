import React from 'react';
import Rating from 'react-rating';
import './Review.css';
import { FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
  const { name, description, image, rating } = review;
  return (
    <div className="review col-md-5 mx-4 my-3 p-4 shadow">
      <div className="d-flex justify-content-between align-items-center  border-bottom pb-2">
        <div className="d-flex align-items-center ">
          <img src={image} alt={name} width={50} className="me-3" />
          <h6>{name}</h6>
        </div>
        {/* <span>Rating: {rating}</span> */}
        <span>
          <Rating
            initialRating={rating}
            emptySymbol={<FaStar />}
            fullSymbol={<FaStar style={{ color: 'goldenrod' }} />}
            readonly
          ></Rating>
          ({rating})
        </span>
      </div>
      <p className="pt-2">{description}</p>
    </div>
  );
};

export default Review;
