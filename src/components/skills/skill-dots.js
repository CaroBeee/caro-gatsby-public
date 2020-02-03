import React from "react";
import SkillDotsItem from "./skill-dots-item";

class SkillDots extends React.Component {
    
    render() {
      return ( 
        
          <div className="column is-6">
          <h2 className="title">Fähigkeiten</h2>
          <hr />
          <p>
           Was ich besonders gut kann und mir das Herz aufgeht.
          </p>
          <ul className="skill-dots" id="skill-dots">
          <SkillDotsItem title="Responsive Web-Development" score="9"/>
           <SkillDotsItem title="HTML5/CSS" score="9"/>
           <SkillDotsItem title="JS/jQuery" score="8"/>
           <SkillDotsItem title="PHP/MySQL" score="7"/>        
           <SkillDotsItem title="CSS/JS Frameworks" score="8"/>
           <SkillDotsItem title="CSS-Preprozessor" score="8"/>
           <SkillDotsItem title="CMS" score="8"/>
           <SkillDotsItem title="Version Control/GIT" score="5"/>
           <SkillDotsItem title="Photoshop/ Illustrator/ Sketch" score="7"/>
           

       
          
          </ul>
        </div>
   
        )
    }
};
  
  export default SkillDots