import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaNpm, FaBootstrap, FaAngular, FaVuejs} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress,  SiPostman, SiVercel, SiMysql, SiTypescript, SiRedux, SiTensorflow} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Python: <FaPython />,
        React: <FaReact/>,
        Angular: <FaAngular />,
        Vue: <FaVuejs />,
        Redux: <SiRedux />,
        Node : <DiNodejs/>,
        Postman: <SiPostman/>,
        Javascript: <DiJavascript1/>,
        MySQL: <SiMysql />,
        Typescript: <SiTypescript />,
        Tensorflow: <SiTensorflow />,
        Express : <SiExpress/>,
        Git : <FaGitAlt/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
