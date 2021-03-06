import React from "react";

const SkillDotsItem = (props) => {

  let arr = Array.apply(null, {length: props.score}).map(Number.call, Number);
  let rest = Array.apply(null, {length: 10 - props.score}).map(Number.call, Number); 
 
      return ( 
        
       
            <li className="skill">
              <span className="skill-title">{props.title}</span>
              <div className="skill-progress">
              {arr.map(index =>  {
                return  <i key= {Math.random()} className="dot active"></i>
                
            })}
             
              {rest.map(item => {
                return  <i key= {Math.random()} className="dot"></i>
            })}
            
              </div>
            </li>
      
       
   
        )
    
};
  
  export default SkillDotsItem