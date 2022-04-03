import React from 'react';
import { Link } from 'react-router-dom';
import './NoRoute.css';

const NoRoute = () => {
  return (
    <figure className="text-center">
      <div className="my-3">
        <Link className="go-to-home-btn shadow" to={'/'}>
          Go to home
        </Link>
      </div>
      <img
        src="https://www.impactbnd.com/hubfs/404-error-page-examples-best.jpg"
        alt="404"
        width={'100%'}
        height={'100%'}
      />
    </figure>
  );
};

export default NoRoute;
