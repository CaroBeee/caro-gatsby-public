import React, { Component } from "react";
import Image from "../components/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AboutMe extends React.Component {
    
    render() {
      return ( 
       
        <section id="introduction" className="columns" >
        <div className="column is-4 is-offset-1 ">
          <div className="card profile">
            <div className="card-image">
              <Image />
            </div>
            <div className="card-content">
              <div className="media">
               
              </div>

              <div className="content">
                <ul className="profile-information">
                  <li>
                  <FontAwesomeIcon className="profile-information_icon" icon={[ 'fas', 'paperclip']}></FontAwesomeIcon>
                  </li>
                  <li>
                    <p>
                      <span>Beruf:</span><br />
                      Frontend-Entwicklerin
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Geburtsdatum:</span><br />
                      25. März 1981
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>E-Mail:</span><br />
                      hello@carobehler.de
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Freizeit:</span><br />
                      Haus, Garten, Kochen, Schlagzeug
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-5 is-offset-1">
          <h2 className="title">Über mich</h2>
          <hr />
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              volutpat nec tortor a eleifend. Proin nec ligula vel sem luctus
              porttitor. Cras at interdum libero. Donec nec mauris velit.
            </p>
            <p>
              Vestibulum eu eros tortor. Aliquam cursus nunc mauris, nec congue
              tortor pretium et. Pellentesque feugiat justo in metus laoreet
              consectetur. Mauris at tempor ipsum, sit amet etae posuere. Nunc
              auctor sollicitudin sem ut molestie. Pellentesque ligula sapien,
              ullamcorper et tempor id, congue ac sapien.
            </p>
          </div>
         
          <h3 className="">Was ich anbiete</h3>        
          <div className="content">
            <div className="tags">
              <span className="tag outline">Web Development</span>
              <span className="tag outline">Mobile First</span>
              <span className="tag outline">Design System</span>
              <span className="tag outline">Clean Code</span>
              <span className="tag outline">SASS</span>
              <span className="tag outline">Wordpress</span>
              <span className="tag outline">ReactJS</span>
              <span className="tag outline">GatsbyJS</span>
              <span className="tag outline">Grunt</span>
              <span className="tag outline">Gulp</span>
              <span className="tag outline">Bootstrap</span>
              <span className="tag outline">Bulma</span>
              <span className="tag outline">Web Performance</span>
              <span className="tag outline">Static HTML Generator</span>
              <span className="tag outline">Headless CMS</span> 
              <span className="tag outline">Design Thinking</span>                              
            </div>
          </div>
            <h3 className="">Damit arbeite ich</h3>       
            <div className="content">
              <ul>
              <li>Visual Studio Code</li>
                <li>PHP Storm</li>
                <li>Atom</li>               
                <li>Adobe Programme wie Ps, Ai, Pr, Ae</li>
                <li>InVision Inspect</li>
                <li>Slack</li>
                <li>ActiveCollapse</li>
                <li>Chrome Developer Tool</li>
              </ul>
          </div>
          </div>
     </section>
     
        )
    }
};
  
  export default AboutMe