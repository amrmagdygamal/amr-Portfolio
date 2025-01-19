import React from 'react'; 
import { BiCheck } from 'react-icons/bi'; 
import { SubHeading } from '../../components'; 

import './Services.css';

const Services = () => (
  <section id='services'>
    <SubHeading subTitle='What I Offer' title='Services' />

    <div className="container services__container">
      <article className='services'>
        <div className="services__heading">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="services__list">
          <li>
            <BiCheck className='list-icon'/>
            <p>Designing responsive and user-friendly interfaces with a focus on great user experience.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Creating pixel-perfect designs using modern design tools like Figma and Sketch.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Wireframing and prototyping to visualize the user flow and layout of applications.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Collaborating with clients to ensure the design meets their requirements and brand guidelines.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Developing interactive elements that enhance the user experience using React.js and Tailwind CSS.</p>
          </li>
        </ul>
      </article>
      <article className='services'>
        <div className="services__heading">
          <h3>Web Development</h3>
        </div>

        <ul className="services__list">
          <li>
            <BiCheck className='list-icon'/>
            <p>Full stack web development: End-to-end solutions for web development projects.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Providing customized web applications tailored to client-specific needs and requirements.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Front-end development using React.js, Redux Toolkit, Tailwind CSS, Bootstrap, and Material UI.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Back-end development using Node.js, Express.js, and TypeScript for scalable server-side applications.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Designing and managing databases with MongoDB, SQL, and integrating RESTful APIs.</p>
          </li>
        </ul>
      </article>
      <article className='services'>
        <div className="services__heading">
          <h3>Mobile Development</h3>
        </div>

        <ul className="services__list">
          <li>
            <BiCheck className='list-icon'/>
            <p>Developing cross-platform mobile apps using React Native, with a focus on performance and usability.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Integrating mobile apps with backend APIs and real-time data using technologies like Socket.io.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Optimizing mobile apps for smooth performance across iOS and Android platforms.</p>
          </li>
        </ul>
      </article>
      <article className='services'>
        <div className="services__heading">
          <h3>Desktop Applications</h3>
        </div>

        <ul className="services__list">
          <li>
            <BiCheck className='list-icon'/>
            <p>Developing cross-platform desktop applications using Electron.js, combining frontend and backend technologies.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Providing offline-first solutions with local storage and seamless syncing when online.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Packaging and distributing desktop apps for Windows, Mac, and Linux.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
