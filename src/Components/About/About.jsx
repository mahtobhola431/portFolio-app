import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import pic_user from '../../assets/pic-2.png'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={pic_user} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>  I am Mahto Bhola, a passionate web developer with a Bachelor of Engineering (B.E.) in Computer Engineering from Saraswati College of Engineering, Navi Mumbai. My interest lies in creating innovative and dynamic web applications. I am constantly exploring new technologies to enhance my skills and deliver exceptional web solutions..</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
              <h1>Skills</h1>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"85%"}} /></div>
                <div className="about-skill"><p>NodeJs</p><hr style={{width:"50%"}} /></div>
                <div>
                <h2>Language</h2>  
                <p>C,C++</p>
                </div>
                
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default About
