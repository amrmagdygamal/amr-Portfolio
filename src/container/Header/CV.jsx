
import CV from '../../assets/myCV.pdf'
const CTA = () => {
  return (
    <>
      <div className="cta">
        <a href={CV} download className='button'>Download CV</a>
        <a href="#contact" className=' button primary-button'>Let's Talk</a>
      </div>
    </>
  );
}

export default CTA;
