import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

class NavVert extends React.Component {
    
  render() {
    return (
      <nav className="nav-container  is-hidden-mobile" id="indicator">
        <ul className="nav">
          <li className="page-scroll">
            <Link
             
              to="introduction"
              spy={true}
              smooth={true}
              offset={-50}
              activeClass="active"
          
            >
              Intro
            </Link>
          </li>
          <li className="page-scroll">
          <Link
           
              to="skillset"
              spy={true}
              smooth={true}
              offset={-50}
              activeClass="active"
            
            >
              Skills
            </Link>
          </li>
          <li className="page-scroll">
          <Link
           
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              activeClass="active"
           
            >
              Erfahrungen
            </Link>
         
          </li>
          <li className="page-scroll">
          <Link
        
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-50}
              activeClass="active"
             
            >
              portfolio
            </Link>
          
          </li>
          <li className="page-scroll">
          <Link
            
              to="connect"
              spy={true}
              smooth={true}
              offset={-150}
              activeClass="active"
          
            >
              Kontakt
            </Link>
          
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavVert
