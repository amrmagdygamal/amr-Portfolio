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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
            <p>Providing customized web applications for clients based on their specific needs and requirements.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Front-end development services using HTML, CSS, and JavaScript, along with popular front-end frameworks like React</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Back-end development services using Node.js, Express.js</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Database design and management services for designing and managing databases, using MongoDB.</p>
          </li>
        </ul>
      </article>
      <article className='services'>
        <div className="services__heading">
          <h3>Content Creation</h3>
        </div>

        <ul className="services__list">
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
