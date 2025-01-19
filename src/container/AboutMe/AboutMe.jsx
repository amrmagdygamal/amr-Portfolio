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
            <small>2.5+ Years as a full-stack </small>
          </article>
          <article className="card">
            <FiUsers className='icon'/>
            <h5>Clients</h5>
            <small>7 clients, 9 different projects.</small>
          </article>
          <article className="card">
            <VscFolderLibrary className='icon'/>
            <h5>Projects</h5>
            <small>30 Completed</small>
          </article>
        </div>
        
        <p>My name is Amr Magdy Gamal, I am a full-stack developer with expertise in building advanced and multifunctional web applications, complex desktop applications, and mobile apps.      I work as:
1- Web frontend: 
Long Experience in building responsive and user-friendly interfaces with React.js, Tailwind CSS, Bootstrap, and Material UI.
Real Skillful working with Redux Toolkit and Zustand. 
I have some knowledge about next.js like: File-Based Routing - SSR - Static Site Generation - Client-Side Rendering - Hybrid Approach. 
2-Mobile frontend: good Knowledge of React Native. 
3-Backend: 
-Expertise in developing robust server-side applications with Node.js, TypeScript, and Express.js. 
Working with MongoDB and SQL. 
Experience of using Socket.io. 
Creating RESTful APIs tailored to client needs. 
4-Electron.js for desktop with frontend and backend technologies.
</p>
        
        <a href="#contact" className='button primary-button'>Hire me </a>
      </div>
    </div>
  </section>
);

export default AboutMe;
