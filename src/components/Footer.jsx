import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="brand-font">
            <img
              style={{ width: '20%', marginRight: '10px' }}
              src="https://cdn2.iconfinder.com/data/icons/audiovisual-production-filled-pixel-perfect/64/visual-production_clapper-512.png"
              alt="Movie Match Logo"
            />
            Movie Match
          </h2>
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Add movie</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">For you</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="#" className="social-icon">
            <img
              style={{ width: '50px' }}
              src="https://static.vecteezy.com/system/resources/previews/018/930/691/non_2x/instagram-logo-instagram-icon-transparent-free-png.png"
              alt="Instagram Icon"
            />
          </a>
          <a href="#" className="social-icon">
            <img
              style={{ width: '30px' }}
              src="https://cdn-icons-png.flaticon.com/256/174/174879.png"
              alt="Whatsapp Icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
