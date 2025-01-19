import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Tanniru Ajay Varma,</span> frontend developer.</h1>
      <p>I am a frontend developer with 5 years of experience in multiple companies like Coforge, Capgemini and Verizon.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href=''className='my-resume' download>My resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
