import { SubHeading } from '../../components';
import './Portfolio.css';

import IMG1 from '../../assets/WhatsApp Image 2023-03-01 at 18.47.14.jpg';
import IMG12 from '../../assets/363253988_825610235949377_2456458227010679654_n.png';
import IMG3 from '../../assets/WhatsApp Image 2023-03-01 at 19.30.19.jpg';
import IMG4 from '../../assets/WhatsApp Image 2023-03-01 at 19.30.06.png';
import IMG5 from '../../assets/WhatsApp Image 2023-03-01 at 18.47.20.jpg';
import IMG6 from '../../assets/WhatsApp Image 2023-03-01 at 17.53.17.jpg';
import IMG7 from '../../assets/363242187_1268276250464426_7454928125000052974_n.png';
import IMG8 from '../../assets/363047590_6254964887963371_928288441250650524_n.png';
import IMG9 from '../../assets/WhatsApp Image 2023-03-05 at 13.54.49.png';
import IMG2 from '../../assets/363303239_1294662291168264_5232086488660585747_n.png';


const data = [
  {
    id: 8,
    image: IMG9,
    title: 'Amazon Clone Userside',
    github: 'https://github.com/amrmagdygamal?tab=repositories/',
    demo: 'https://superstore-frontend.netlify.app/',
  },
  {
    id: 0,
    image: IMG1,
    title: 'Awesome Restaurant website',
    github: 'https://github.com/amrmagdygamal/awesome-gert-resturant',
    demo: 'https://amrmagdygamal.github.io/bondi_Design/',
  },
  {
    id: 1,
    image: IMG12,
    title: 'Awesome Bondi Design ',
    github: 'https://github.com/amrmagdygamal/awesome-gert-resturant',
    demo: 'https://awesome-restaurant-app.netlify.app/',
  },
  {
    id: 2,
    image: IMG3,
    title: 'creative Landding Page ',
    github: 'https://github.com/amrmagdygamal/creative-agency',
    demo: 'https://amrmagdygamal.github.io/creative-agency/',
  },
  {
    id: 3,
    image: IMG4,
    title: 'Store Admin Panel',
    github: 'https://github.com/amrmagdygamal?tab=repositories',
    demo: 'https://adminpanel-store.netlify.app/admin',
  },
  {
    id: 4,
    image: IMG5,
    title: 'Awesome GPT3 Design',
    github: 'https://github.com/amrmagdygamal/Advaced-GPT',
    demo: 'https://gpt3-design-amr.netlify.app/',
  },
  {
    id: 5,
    image: IMG6,
    title: 'My First Portfolio',
    github: 'https://github.com/amrmagdygamal/My-Simple_portfolio-withJavaS',
    demo: 'https://amrmagdygamal.github.io/My-Simple_portfolio-withJavaS/',
  },
  {
    id: 6,
    image: IMG7,
    title: 'Dr.Nayer-Dashboard',
    github: 'https://github.com/amrmagdygamal?tab=repositories',
    demo: 'https://nayer-adminpanel.netlify.app/',
  },
  {
    id: 7,
    image: IMG8,
    title: 'Notes App',
    github: 'https://github.com/amrmagdygamal?tab=repositories',
    demo: 'https://my-simplenotesapp.netlify.app/',
  },
  {
    id: 9,
    image: IMG2,
    title: 'Finance DashBoard',
    github: 'https://github.com/amrmagdygamal/Finance-Dashboard',
    demo: 'https://finance-adminpanel.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <SubHeading subTitle="My Recent Work" title="Portfolio" />
      <div className="container">
        <article
          className="portfolio"
          style={{
            textAlign: 'center',
            padding: '.6rem .9rem',
            marginBottom: '3rem',
          }}
        >
          <p className='sec_h2' style={{ marginBottom: ".3rem" }}>
            I deployed my servers on free host so you might not get the data at
            once in the websites. If so reload the page or close it and open it
            again.
          </p>
          <p style={{ marginBottom: '0' }}>
            <span style={{ fontWeight: 'bold' }} className='sec_h2'>Note :</span> Some Repositories
            are Private So I You want to see the code contact me and I will make
            you Collaborator.
          </p>
        </article>
      </div>
      <div className="container portfolio__container">
        <article className="portfolio">
          <div className="portfolio-image">
            <img src="/floors.jpg" alt="Floors" />
          </div>
          <h3>Floors Platform (the most important one!)</h3>
          <div className="portfolio-cta">
            <a href="https://floorsplatform.com" className="button" rel="noreferrer" target="_blank">
              Demo
            </a>
            <a
              href="https://youtu.be/ThEpHvO5kG0?si=oCJKwPGOap9ye3yn"
              className="button primary-button"
              target="_blank"
              rel="noreferrer"
            >
              Preview
            </a>
          </div>
        </article>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio">
              <div className="portfolio-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-cta">
                <a href={github} className="button" rel="noreferrer" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="button primary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
