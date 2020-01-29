import React from 'react';
import { Link} from "react-scroll"
import logo from "../img/svg/Logo_CB.svg"

class NavMobile extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
        {addClass: false
        
        }
      }
      toggle() {
        this.setState({addClass: !this.state.addClass});
      }
      hideMenu() {
    
        this.setState({addClass: !this.state.addClass});
      }
     
      render() {
       
       

        return ( 
       
        
            <nav
      className="top-navbar navbar is-fixed-top is-hidden-desktop"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#introduction">
        <img src={logo} alt=" Carolin Behler"/>
        </a>
           
        <a
          role="button"
          onClick={ this.toggle.bind(this) }  onKeyDown={this.toggle.bind(this)}
          className= {this.state.addClass ? "navbar-burger burger is-active" : "navbar-burger burger"}
          aria-label="menu"
          tabIndex={0}
          aria-expanded="false"
          data-target="navbarBasicExample"
         
         
        >
             {}
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className= {this.state.addClass ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
                   <Link
            className="navbar-item"
            to="introduction"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.hideMenu.bind(this) }
            onKeyDown={this.hideMenu.bind(this)}
           
          >
           Intro
          </Link>
          <Link
            className="navbar-item"
            to="skillset"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.hideMenu.bind(this) }
            onKeyDown={this.hideMenu.bind(this)}
          >
           Skills
          </Link>
         
            <Link
            className="navbar-item"
            to="experience"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.hideMenu.bind(this) }
            onKeyDown={this.hideMenu.bind(this)}
          >
            Erfahrungen
          </Link>
          
              <Link
            className="navbar-item"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.hideMenu.bind(this) }
            onKeyDown={this.hideMenu.bind(this)}
          >
            Portfolio
          </Link>

          <Link
            className="navbar-item"
            to="connect"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={this.hideMenu.bind(this) }
            onKeyDown={this.hideMenu.bind(this)}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>

        
       )    
  }
};



  export default NavMobile;