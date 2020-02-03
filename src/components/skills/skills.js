import React, { Component } from "react";
import SkillBar from "./skill-bar"
import SkillDots from "./skill-dots"

class Skills extends Component {
    
    render() {
      return ( 
        <section
        id="skillset"
        className="columns reverse-row-order"
      
      >
         <SkillDots/>
        <SkillBar/>
       
      </section>
        )
    }
};
  
  export default Skills