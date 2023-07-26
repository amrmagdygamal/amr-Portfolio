/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import './Footer.css';

const Footer = () => (
  <footer>
    <a href="#" className='footer__logo'>Amr Magdy</a>

    <ul className="my-links">
      <li><a href="#">Home</a></li>
      <li><a href="#aboutme">About</a></li>
      <li><a href="#experience">Experiense</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/amr-magdy-658298247" rel="noreferrer" target='_blank'><BsLinkedin /></a>
      <a href="https://github.com/amrmagdygamal" rel="noreferrer" target='_blank'><BsGithub /></a>
      <a href="https://www.facebook.com/profile.php?id=100035881681593&mibextid=ZbWKwL" rel="noreferrer" target='_blank'><FaFacebook /></a>
    </div>

    <div className="copyright">
      <small>&copy; Amr Magdy. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
