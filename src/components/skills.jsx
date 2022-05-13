import React, { memo } from "react";

import "../styles/skills.scss";

import {
  ReactJs,
 
  Javascript,
  Html5,
  CssThree,
  Nodedotjs,
  

  
} from "@icons-pack/react-simple-icons";

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">
        <h3 className="skill-title">frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
          <div className="skill">
              <Nodedotjs color="#339933" size={50} />
            </div>
            <p className="skill-info">Node.js</p>
          </div>
           
          </div>
          
        </div>

         
            
      
     
     </section>

  );
});
export default Skills;
