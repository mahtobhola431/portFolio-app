// import React from 'react';
// import './Hero.css';
// import pro_Pic_user from '../../assets/pf-pic-1.png';
// import header_file from '../../assets/header_file.jpg'


// const Hero = () => {
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = 'E:\pf\portfolio-website\src\assets\Bhola_Mahto(resume).pdf'; 
//     link.download ='Bhola_Mahto(resume).pdf'; 
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div id='home' className='hero'>


//      <div>
//        <h1><span>I'm Mahto Bhola,</span>A Full Stack Web Developer.</h1>
       

//       <div className="hero-action">
       
//        <div className="hero-resume">
//          <button onClick={handleDownload} className="resume-button">
//            My resume
//          </button>
//        </div>
//      </div>
//      </div>
     
//       <div>
//       <img src={header_file} alt="" className='profile-img' />
//      </div>

     

//     </div>
//   );
// }

// export default Hero;




import React from 'react';
import './Hero.css';
import pro_Pic_user from '../../assets/pf-pic-1.png';
import header_file from '../../assets/header_file.jpg';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Mahto_Bhola(resume).pdf'; 
    link.download = 'Mahto_Bhola(resume).pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
      <div className='hero-text'>
        <h1>
          <span>I'm Mahto Bhola,</span>
          <br />
          A Full Stack Web Developer.
        </h1>
        <p>I build and design web applications with modern technologies.</p>
        <div className='hero-action'>
          <button onClick={handleDownload} className="hero-resume-button">
            My Resume
          </button>
        </div>
      </div>
      <div className='hero-image'>
        <img src={header_file} alt="Profile" className='profile-img' />
      </div>
    </div>
  );
};

export default Hero;




