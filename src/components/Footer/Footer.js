import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <small>
        &copy;2022 <strong>Games Breakdown</strong>, All Rights Reserved
      </small>
      <nav className="footer-nav">
        <button onClick={handleBackToTop}>Back to Top</button>
        <Link to="/about">Terms of Use</Link>
        <Link to="/about">Privacy</Link>
      </nav>
    </footer>
  );
};

export default Footer;
