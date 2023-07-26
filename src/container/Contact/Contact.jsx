import React from 'react';
import { SubHeading } from '../../components';
import {MdOutlineEmail} from 'react-icons/md'
import './Contact.css';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => (
  <section id='contact'>
    <SubHeading subTitle='Get in Touch' title='Contact Me' />

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact-option">
          <MdOutlineEmail className='icon' />
          <h4>Email</h4>
          <h5>amroraker@gmail.com</h5>
          <a href="mailto:amroraker@gamil.com">Send a Message</a>
        </article>
        <article className="contact-option">
          <RiMessengerLine className='icon' />
          <h4>Messenger</h4>
          <h5>Amr Magdy</h5>
          <a href="https://m.me/amrMagdy25.200" target='_blank'>Send a Message</a>
        </article>
        <article className="contact-option">
          <BsWhatsapp className='icon'/>
          <h4>WhatsApp</h4>
          <h5>+201095330155</h5>
          <a href="https://api.whatsapp.com/send?phone=201095330155" target='_blank'>Send a Message</a>
        </article>
      </div>

      <form action="">
        <input type="text" name="name" placeholder='You Full Name' required />
        <input type="email" name="email" placeholder='You Email' required />
        <textarea name="message"placeholder='Your Message' required rows="7"></textarea>
        <button type='submit' className='button primary-button'>Send Message</button>
      </form>
    </div>

  </section>
);

export default Contact;
