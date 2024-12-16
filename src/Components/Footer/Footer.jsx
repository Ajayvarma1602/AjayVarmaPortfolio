import React, { useState } from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');  // State to track the name input
  const [error, setError] = useState('');

  // Email validation function using regex
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else if (name.trim() === '') {
      setError('Please enter your name.');  // Validate if name is empty
    } else {
      setIsSubscribed(true);
      setEmail('');
      setError('');
    }
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1><span className='logo'>Ajay</span></h1>
          <p>I am a frontend developer with 4 years of experience in companies like Coforge, Capgemini and Verizon.</p>
        </div>
        <div className="footer-top-right">
          {!isSubscribed && (
            <>
              <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}  // Update name state on input change
                />
              </div>
              <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input
                  type="email"
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
                />
              </div>
              {error && <p className="error-message">{error}</p>}  {/* Display error message */}
            </>
          )}
          <div
            className={`footer-subscribe ${isSubscribed ? 'subscribed' : ''}`}
            onClick={handleSubscribe}
          >
            {isSubscribed ? `Subscribed as ${name}` : 'Subscribe'}
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Ajay Tanniru. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
