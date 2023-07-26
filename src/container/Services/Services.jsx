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
          <li>
            <BiCheck className='list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
