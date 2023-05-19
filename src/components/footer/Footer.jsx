import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Rubinaldo</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              about
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer_link">
              contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
        <a href="https://www.instagram.com/rubinaldomingos/" className="home_social_icon" target="_blank">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="https://github.com/Rubinaldod" className="home_social_icon" target="_blank">
        <i className="uil uil-github-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/rubinaldo-domingos-965487125/" className="home_social_icon" target="_blank">
        <i className="uil uil-linkedin"></i>
        </a>
        </div>

        <div className="footer_copy">
            &#169; Rubinaldomingos.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
