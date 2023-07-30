import React from 'react';
import { SubHeading } from '../../components/index';
import './AboutMe.css';

import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

import Me from '../../assets/[removal.ai]_432c174e-1ac1-43c8-9a2a-12cc98c8adfb_M8GMP7.png';
import { FaAward } from 'react-icons/fa';

const AboutMe = () => (
  <section id='aboutme'>
    <SubHeading subTitle='Get To Know' title='About Me' />

    <div className="container about__container">
      <div className="about__me-image">
        <div className="image">
          <img src={Me} alt="Amror Image" />
        </div>
      </div>

      <div className="about__me-content">
        <div className="about__me-content_cards">
          <article className="card">
            <FaAward className='icon'/>
            <h5>Experience</h5>
            <small>11+ Months Working With myself</small>
          </article>
          <article className="card">
            <FiUsers className='icon'/>
            <h5>Clients</h5>
            <small>I got 1 client, And now I'm working for him</small>
          </article>
          <article className="card">
            <VscFolderLibrary className='icon'/>
            <h5>Projects</h5>
            <small>7+ Completed</small>
          </article>
        </div>
        
        <p>• Hi there, my name is Amr Magdy and I am a full-stack
developer with expertise in the MERN stack and a
strong knowledge of JavaScript. I specialize in building scalable and efficient web applications using modern web technologies.
<br />• I have built several websites with extensive functionality, including an e-commerce site, admin panels, a
restaurant website, and much more.</p>
        
        <a href="#contact" className='button primary-button'>Hire me </a>
      </div>
    </div>
  </section>
);

export default AboutMe;
