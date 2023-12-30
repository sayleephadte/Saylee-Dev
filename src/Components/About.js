import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import Avatar from '../images/Avatar.png';


const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Saylee Phadte</b> and I am from Goa, India.
            I'm a <b>Full Stack developer</b> and a recent college graduate in <b>Bachelor of Computer Engineering</b>. <br/><br/>
            My journey in the realm of technology has equipped me with a robust skill set, encompassing languages such as Python, JavaScript, and Typescript, along with proficiency in various frameworks and libraries like React, Angular, and Quasar.<br/><br/>
            I've also contributed to academic research, having published a research paper titled "TranslateKar: An Efficient Transformer-Based Konkani Translator." You can check it out <a href=''>here</a>.<br/><br/>
            Join me in exploring my portfolio, and let's connect to discuss how my skills and experiences can contribute to your next project or initiative.
          </p>
        </div>

        <div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Python' />
        <Skills skill='React' />
        <Skills skill='Angular' />
        <Skills skill='Vue' />
        <Skills skill='Redux' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MySQL' />
        <Skills skill='Javascript' />
        <Skills skill='Typescript' />
        <Skills skill='Tensorflow' />
        <Skills skill='Git' />
        <Skills skill='Postman' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Vercel'/>

        
      </div>
    </>
  )
}

export default About