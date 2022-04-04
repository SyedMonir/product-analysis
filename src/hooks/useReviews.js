import { useEffect, useState } from 'react';

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch('customer-reviews.json')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  return [reviews, setReviews, loading];
};

export default useReviews;
