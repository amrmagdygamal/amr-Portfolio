import { SubHeading } from '../../components';
import './Testimonials.css'
import AVATR1 from '../../assets/1396092991.webp';
import AVATR2 from '../../assets/professional-man-portrait_4460x4460-1280x720.jpg';
import AVATR3 from '../../assets/92713904.webp';
import AVATR4 from '../../assets/andre-tavares-about.webp';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
    avatar: AVATR1, 
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minima voluptatibus. Eos, enim soluta, et vel, perferendis sed veritatis repellat eaque atque illum quaerat amet architecto! Dolorem laborum deleniti rerum.'
  },
  {
    avatar: AVATR2, 
    name: 'Achiever',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minima voluptatibus. Eos, enim soluta, et vel, perferendis sed veritatis repellat eaque atque illum quaerat amet architecto! Dolorem laborum deleniti rerum.',

  },
  {
    avatar: AVATR3, 
    name: 'Shatta Wale',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minima voluptatibus. Eos, enim soluta, et vel, perferendis sed veritatis repellat eaque atque illum quaerat amet architecto! Dolorem laborum deleniti rerum.',

  },
  {
    avatar: AVATR4, 
    name: 'Shatta Wale',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, minima voluptatibus. Eos, enim soluta, et vel, perferendis sed veritatis repellat eaque atque illum quaerat amet architecto! Dolorem laborum deleniti rerum.',

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
