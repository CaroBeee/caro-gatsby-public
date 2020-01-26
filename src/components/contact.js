import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends React.Component {
    
    render() {
      return ( 
        <section
        id="connect"     
        className="connect"
      
      >
        <div className="columns">
        <div className="column is-10 is-offset-1 ">
          <h2 className="title">Kontakt</h2>
          <hr />
          <p>Ich bin über LinkedIn und Xing erreichbar, aber auch gerne über E-Mail.</p>
          </div>
          </div>
          <div className="columns is-centered">
          <div className="column is-one-quarter ">
          <ul className="social-links social-border">
          <li className="linkdin">
           
            <a href="https://www.linkedin.com/in/carolin-behler-26b2b9a3/" title="Zu LinkedIn"> <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'linkedin']} ></FontAwesomeIcon></a>
            </li>
            <li className="xing">
            <a href="https://www.xing.com/profile/Carolin_Behler/cv" title="Zu Xing"><FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'xing']} ></FontAwesomeIcon></a>
             
            </li>
            {/* <li className="google-plus">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'google-plus-g']} ></FontAwesomeIcon>
             
            </li>
            <li className="facebook">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'facebook-f']} ></FontAwesomeIcon>
             
            </li>
            <li className="dribbble">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'dribbble']} ></FontAwesomeIcon>
            
            </li>
            <li className="behance">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'behance']} ></FontAwesomeIcon>
            
            </li>
            
            <li className="twitter">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'twitter']} ></FontAwesomeIcon>
             
            </li>
            <li className="instagram">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'instagram']} ></FontAwesomeIcon>
              
            </li>
            <li className="vimeo">
            <FontAwesomeIcon className="sm-icon" icon={[ 'fab', 'vimeo']} ></FontAwesomeIcon>
             
            </li> */}
            
          </ul>
        
          <a className="button mail-button" href="mailto:hello@carobehler.de">E-Mail schreiben</a>
          </div>
          
        </div>
        
       
      </section>
        )
    }
};
  
  export default Contact