import React from "react";

const SkillBarItem = (props) => {
    
  
      return ( 
      
       
              <li>
                <p>{props.name}</p>
                <div className={"skill-bar skill-bar-"+ props.width}>
                  <span className="skill-tip">{props.width}%</span>
                </div>
              </li>
          
          
        
  
        )
    
};
  
  export default SkillBarItem