import React from 'react';
import ProjectBox from './ProjectBox';
import ToDoImage from '../images/ToDoImage.png';
import TranslatekarImage from '../images/TranslatekarImage.png';
import ResumeBuilderImage from '../images/ResumeBuilderImage.png';
import SpeedCheckerImage from '../images/SpeedCheckerImage.png';
import OSaborImage from '../images/OSaborImage.png';
import ProjectImage from '../images/ProjectImage.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ResumeBuilderImage} projectName="ResumeBuilder" />
        <ProjectBox projectPhoto={OSaborImage} projectName="OSabor" />
        <ProjectBox projectPhoto={ProjectImage} projectName="TranslatekarBackend" />
        <ProjectBox projectPhoto={TranslatekarImage} projectName="Translatekar" />
        <ProjectBox projectPhoto={ToDoImage} projectName="ToDo" />
        <ProjectBox projectPhoto={SpeedCheckerImage} projectName="SpeedChecker" />
      </div>

    </div>
  )
}

export default Projects