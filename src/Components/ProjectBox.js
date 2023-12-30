import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ResumeBuilderDesc : "This website allows users to easily create professional and personalized resumes. Its developed using React, Chakra UI and Bootstrap.",
    ResumeBuilderGithub : "https://github.com/sayleephadte/Resume-Builder",
    ResumeBuilderWebsite : "https://resume-builder-theta-blond.vercel.app/",

    OSaborDesc : "Developed a website a spice manufacturing brand called Osabor. Its developed using React, Tailwind Css and hosted on GoDaddy platform.",
    OSaborGithub : "",
    OSaborWebsite : "https://www.osaborfoods.com/",

    TranslatekarDesc : "The Translatekar Application is a web-based tool that allows users to translate text between different languages. It consists of a frontend, built with React and styled with Tailwind CSS, and a backend API.",
    TranslatekarGithub : "https://github.com/sayleephadte/translatekar-frontend",
    TranslatekarWebsite : "https://translatekar-frontend.vercel.app/",

    ToDoDesc:"ToDo is a React Task Management App which performs all the CRUD operations.",
    ToDoGithub:"https://github.com/sayleephadte/To-Do",
    ToDoWebsite:"https://to-do-eight-coral.vercel.app/",
    
    SpeedCheckerDesc:"Speed Checker is a web application where you can test your typing speed. This web application allows users to measure their typing speed by typing a given text and tracking their accuracy and words-per-minute (WPM) score.",
    SpeedCheckerGithub:"https://github.com/sayleephadte/speed-checker",
    SpeedCheckerWebsite:"https://speed-checker.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox