import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Task Manager</h3>
          <p>Organize your work and boost productivity with our simple task management solution.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/register">Register Now</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@taskmanager.com</li>
            <li>Phone: (123) 987-654-3210</li>
            <li>Address: 123 Task St, Productivity City</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;