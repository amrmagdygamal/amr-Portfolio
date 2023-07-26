import React from 'react';

import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'

const FindUs = () => (
  <div className='socials'>
    <a href="https://www.linkedin.com/in/amr-magdy-658298247" rel="noreferrer" target="_blank" ><BsLinkedin /></a>
    <a href="https://github.com/amrmagdygamal" target="_blank" rel="noreferrer" ><AiFillGithub /></a>
    <a href="https://www.facebook.com/profile.php?id=100035881681593&mibextid=ZbWKwL" rel="noreferrer" target="_blank" ><BsFacebook /></a>
  </div>
);

export default FindUs;
