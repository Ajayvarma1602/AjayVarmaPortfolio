import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an Experienced FullStack Web Developer with over a five years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for Full Stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>




                <div className="about-skill"><p>Java</p><hr style={{width:"85%"}} /></div>
               <div className="about-skill"><p>Springboot</p><hr style={{width:"85%"}} /></div>

                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>TypeScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"80%"}} /></div>
                           

                <div className="about-skill"><p>MYSQL</p><hr style={{width:"80%"}} /></div>
                 <div className="about-skill"><p>TailwindCSS</p><hr style={{width:"50%"}} /></div>
                             
                <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Django</p><hr style={{width:"60%"}} /></div>
                                            <div className="about-skill"><p>Wordpress</p><hr style={{width:"70%"}} /></div>
               <div className="about-skill"><p>Shopify</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About









