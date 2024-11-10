import React from 'react';
import './style.css'; // Create a separate CSS file for styling or add inline styles

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img 
            src="./WhatsApp_Image_2024-08-29_at_23.40.32_04afab5b-removebg-preview.png" 
            width="60%" 
            alt="Yuru Watch Logo" 
          />
          <br />
          <br />
          <h4><a href="/aboutus">About Us</a></h4>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: yuruwatch@gmail.com</p>
          <p>Phone: 9000060023</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/contact">Give us your feedback</a></li>
            <li><a href="#">DMCA Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3><center>Follow Us</center></h3>
          <div className="social-icons">
            <a href="#"><img src="discord-alt-logo-36.png" alt="Discord" /></a>
            <a href="#"><img src="./twitter-logo-36.png" alt="Twitter" /></a>
            <a href="https://www.instagram.com/kaemikun/"><img src="./instagram-logo-36.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p><center> Copyright &copy; 2024</center></p>
      </div>
    </footer>
  );
};

export default Footer;
