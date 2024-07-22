import React from 'react'
import './Hero.css'
import pro_Pic_user from '../../assets/pf-pic-1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={pro_Pic_user} alt="" className='profile-img' />
      <h1><span>I'm Mahto Bhola,</span> Full Stck web Developer.</h1>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero;





