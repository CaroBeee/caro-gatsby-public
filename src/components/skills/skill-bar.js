import React, { Component } from "react";
import SkillBarItem from "./skill-bar-item";

const SkillBar = (props) => {
    
  
      return ( 
      
        <div className="column is-5 is-offset-1  offset-lt">
          <h2 className="title">Soft Skills</h2>
          <hr />
          <p>
            Was mir wichtig ist und was mich ausmacht.
          </p>
          <div className="skill-wrapper">
           
            <ul className="skill" id="skills">
             <SkillBarItem name="Kommunikation" width="80"/>
             <SkillBarItem name="Team work" width="95"/>
             <SkillBarItem name="Kreativität" width="80"/>
             <SkillBarItem name="Eigeninitiative" width="85"/>
             <SkillBarItem name="Zuverlässigkeit" width="95"/>
            </ul>
          </div>
        </div>
        
  
        )
    
};
  
  export default SkillBar