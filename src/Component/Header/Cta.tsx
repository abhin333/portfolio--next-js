"use client";
const CV_PATH = '/assets/cv.pdf'; 

const Cta = () => {
  return (
    <div className="cta">
      <a 
        href={CV_PATH} 
        download 
        className='btn'
      >
        Download CV
      </a>
      <a 
        href="#contact" 
        className='btn btn-primary'
      >
        Let's Talk
      </a>
    </div>
  );
}

export default Cta;