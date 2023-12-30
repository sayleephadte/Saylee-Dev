import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Saylee Phadte</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sayleephadte" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/saylee-phadte-6470341b3/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sayleephadte06@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer