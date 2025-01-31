import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Event Management</h2>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@eventmanagement.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Event Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
