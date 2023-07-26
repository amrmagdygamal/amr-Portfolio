import ME from '../../assets/[removal.ai]_432c174e-1ac1-43c8-9a2a-12cc98c8adfb_M8GMP7.png';
import FindUs from '../Findus/FindUs';
import CTA from './CV';

import './Header.css';



const Header = () => (
  <header>
    <div className="container header">
      <h5>Hello I'm</h5>
      <h1>Amr Magdy</h1>
      <h5>Full-Stack Developer</h5>
      <CTA />
      <FindUs />
      
      <div className="mePhoto">
        <img src={ME} alt="" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
  </header>
);

export default Header;
