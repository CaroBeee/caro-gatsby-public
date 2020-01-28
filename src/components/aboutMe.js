import React, { Component } from "react";
import Image from "../components/image"
import svgVSC from '../img/icons/Visual_Studio_Code_1.18_icon.svg';
import svgPhpstorm from '../img/icons/phpstorm.svg';
import svgAtom from '../img/icons/Atom_editor_logo.svg';
import svgPS from '../img/icons/Adobe_Photoshop_CC_icon.svg';
import svgAI from '../img/icons/Adobe_Illustrator_CC_icon.svg';
import svgPR from '../img/icons/Adobe_Premiere_Pro_Logo.svg';
import svgAE from '../img/icons/Adobe_After_Effects_CC_icon.svg';
import svgSketch from '../img/icons/sketch.svg';
import svgInvision from '../img/icons/invision.svg';
import svgSlack from '../img/icons/slack_notext.svg';
import svgActiveCollab from '../img/icons/ActiveCollab_notext.svg';
import svgChromeDevTool from '../img/icons/devtools-logo.svg';
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

            
                <ul className="profile-information">
                  <li>
                  <FontAwesomeIcon className="profile-information_icon" icon={[ 'fas', 'paperclip']}></FontAwesomeIcon>
                  </li>
                  <li>
                    <p>
                      <span>Beruf</span><br />
                      Frontend-Entwicklerin
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Geburtsdatum</span><br />
                      25. März 1981
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>E-Mail</span><br />
                      hello@carobehler.de
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Freizeit</span><br />
                      Haus, Garten, Kochen, Schlagzeug
                    </p>
                  </li>
                </ul>
            
            </div>
          </div>
        </div>
        <div className="column is-5 is-offset-1">
          <h2 className="title">Über mich</h2>
          <hr />
          <div className="content">
            <p>
            Ich bin seit mehreren Jahren Frontend-Entwicklerin und lebe in der Nähe von Frankfurt am Main. 
            </p>
            <p>
            Zum <strong>Coden</strong> kam ich erst später, meine Wege führten mich erst zum <strong>Ton</strong> (Frankfurt/ Berlin), dann zum <strong>Bild</strong> (Berlin), dann zum <strong>technischen Part</strong> von beidem im Bachelorstudium (Düsseldorf) bis ich dann meinen Master in Medieninformatik (auch in Düsseldorf) absolvierte und mich in meinem Developer-Dasein richtig zu Hause fühle. Sitze ich nicht am Rechner, bin ich im Keller - am Schlagzeug.😊 Aber ganz weit oben steht meine kleine Familie.😍
            </p>
            <p>Schon früh habe ich gemerkt und dazu gedrängt, dass alle Teammitglieder (Konzepter, Designer, Entwickler) von Anfang an im Projekt gleichermaßen miteingebunden werden sollten. 
Die Zeit, dass der Entwickler darauf wartet bis der Designer das Layout auf den Tisch legt und sagt: „So, jetzt kannst du loslegen.“ ist vorbei. Das Verständnis sowohl in der Ideenentwicklung, der Konzeption, das Design und schlussendlich die Umsetzung des Designs auf technischer Ebene muss bei allen Projektteams gleichermaßen sein.
</p>
<p>Eine effektive Vorgehensweise der Ideengenerierung wäre <strong>Design-Thinking</strong>. Diese kann neue Denkanstöße im gesamten Team fördern.
Für mich ist eine enge Verzahnung zwischen Design und Entwicklung eine Selbstverständlichkeit.

</p>
<p><a href="https://bradfrost.com/blog/post/atomic-web-design/" title="Link zu atomic design"><strong>Atomic Design System</strong></a> (Brad Forst) kann schon im Design-Prozess angewendet und anschließend in der Entwicklung übernommen werden. Das spart Zeit und Aufwand bei Erneuerungen oder Ergänzungen.</p>
          </div>
         
          <h3 className="">Was ich anbiete</h3>        
          <div className="content">
            <div className="tags">
              <span className="tag is-rounded">Web Development</span>
              <span className="tag is-rounded">Mobile First</span>
              <span className="tag is-rounded">Design System</span>
              <span className="tag is-rounded">Clean Code</span>
              <span className="tag is-rounded">SASS</span>
              <span className="tag is-rounded">Wordpress</span>
              <span className="tag is-rounded">ReactJS</span>
              <span className="tag is-rounded">GatsbyJS</span>
              <span className="tag is-rounded">Grunt</span>
              <span className="tag is-rounded">Gulp</span>
              <span className="tag is-rounded">Bootstrap</span>
              <span className="tag is-rounded">Bulma</span>
              <span className="tag is-rounded">Web Performance</span>
              <span className="tag is-rounded">Static HTML Generator</span>
              <span className="tag is-rounded">Headless CMS</span> 
              <span className="tag is-rounded">Design Thinking</span>                              
            </div>
          </div>
            <h3 className="">Damit arbeite ich</h3>       
            <div className="content">
             <div className="columns is-multiline">
             <div className="sw-icons">
              <img className="sw-icon" src={svgVSC} alt="Visual Studio Code" title="Visual Studio Code"/>
              <img className="sw-icon" src={svgPhpstorm} alt="PHP Storm" title="PHP Storm"/> 
              <img className="sw-icon" src={svgAtom} alt="Atom" title="Atom"/> 
              <img className="sw-icon" src={svgChromeDevTool} alt="Chrome Developer Tool" title="Chrome Developer Tool"/> 
              <img className="sw-icon" src={svgInvision} alt="InVision" title="InVision"/> 
              <img className="sw-icon" src={svgPS} alt="Adobe Photoshop" title="Adobe Photoshop"/>
              <img className="sw-icon" src={svgAI} alt="Adobe Illustrator" title="Adobe Illustrator"/>
              <img className="sw-icon" src={svgPR} alt="Adobe Premiere Pro" title="Adobe Premiere Pro"/> 
              <img className="sw-icon" src={svgAE} alt="Adobe After Effects" title="Adobe After Effects"/>  
              <img className="sw-icon" src={svgSketch} alt="Sketch" title="Sketch"/>      
              <img className="sw-icon" src={svgSlack} alt="Slack" title="Slack"/> 
              <img className="sw-icon" src={svgActiveCollab} alt="ActiveCollab" title="ActiveCollab"/>
            
              </div>
             </div>
             
          </div>
          </div>
     </section>
     
        )
    }
};
  
  export default AboutMe