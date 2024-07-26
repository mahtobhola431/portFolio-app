import React from 'react';
import './Hero.css';
import pro_Pic_user from '../../assets/pf-pic-1.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resumefile.pdf'; 
    link.download = 'resumefile.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
      <img src={pro_Pic_user} alt="" className='profile-img' />
      <h1><span>I'm Mahto Bhola,</span> Full Stack Web Developer.</h1>

      <div className="hero-action">
       
        <div className="hero-resume">
          <button onClick={handleDownload} className="resume-button">
            My resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;






