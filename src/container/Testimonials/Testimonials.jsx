import { SubHeading } from '../../components';
import './Testimonials.css'
import AVATR1 from '../../assets/Sunrise.jpg';
import AVATR2 from '../../assets/Smartangle.jpg';
import AVATR3 from '../../assets/mgt.jpg';
import AVATR4 from '../../assets/reda.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVATR1, 
    name: 'SUNRISE SDS',
    review: "I am pleased to write this letter of recommendation for Amr Magdy, who has been an integral part of our web programming team at Sunrise Digital Solutions. During the three months tenure with us, Amro Ahmad has consistently demonstrated exceptional skills and commitment, making a significant impact on our projects and client satisfaction."
  },
  {
    avatar: AVATR4, 
    name: 'Reda Gamal',
    review: 'Amr magdy built an app for me which helped me alot, he was able to achieve my requires and create a very helpful app for saving my work, I expect him a good future as a software developer. best wishes for him.',
  },
  {
    avatar: AVATR2, 
    name: 'Smart Angle Group',
    review: "Amr Magdy is a true professional who adheres to the highest standards of work ethics. They have been committed to their work hours and willingly taken on additional responsibilities when required, displaying a commendable level of dedication and reliability.",

  },
  {
    avatar: AVATR3, 
    name: 'Wissam Nehme',
    review: "Ich freue mich, dieses Empfehlungsschreiben für Amr Magdi Gamal zu verfassen, der für mich als Softwareentwickler für ein privates Projekt gearbeitet hat. Während der gesamten Zeit, die er bei mir verbracht hat, hat Amr Magdi Gamal außergewöhnliches technisches Fachwissen und ein starkes Engagement für die Erbringung qualitativ hochwertiger Arbeit in verschiedenen Projekten bewiesen.",

  },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <SubHeading subTitle='Review from clients' title='Testimonials' />

      <Swiper className="container testimonials__container"
        modules={[Pagination]} spaceBetween={40}
        slidePerView={1}
        pagination={{ clickable: true}}>
        
        {
          data.map(({avatar, name, review}, index) => {

            return (

            
            <SwiperSlide key={index} className="testimonial">
            <div className="client-image">
              <img src={avatar} alt="Avatar one" />
            </div>

            <h5 className="client-name">{name}</h5>
              <small className='client-review'>
              {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  );
}

export default Testimonials;
