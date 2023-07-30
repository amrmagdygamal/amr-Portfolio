
import './Experience.css'

import {BsPatchCheckFill} from 'react-icons/bs';
import { SubHeading } from '../../components/index';
const Experience = () => {
  return (
    <section id='experience'>
      <SubHeading subTitle="What Skills I have" title="My Skills" />

      <div className="container experience">
        <div className="experience__frontend">
          <h4 className="experience__heading">
            Front-End Development
          </h4>
          <div className="skills__box">
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>javaScript</h4>
              <small className='text-light'>intermediate</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>SASS</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Git & Github</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Typescript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Redux</h4>
              <small className='text-light'>Experienced</small>
            </div>
            
          </div>
        </div>
        
        <div className="experience__backend">
          <h4 className="experience__heading">
            Back-End Development
          </h4>
          <div className="skills__box">
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Node.js</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Express</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>Typescript</h4>
              <small className='text-light'>Experienced</small>
            </div>
            <div className="skill-box">
              <BsPatchCheckFill className='iconCheck' />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
