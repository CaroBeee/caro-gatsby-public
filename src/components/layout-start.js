/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link, animateScroll as scroll } from "react-scroll"
import Header from "./header"
import NavMobile from "./nav-mobile"
import NavVert from "./nav-vertical"
import AboutMe from "./aboutMe"
import Skills from "./skills/skills"
import Work from "./work"
import Portfolio from "./portfolio/portfolio"
import Contact from "./contact"
import Footer from "./footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)



const LayoutStart = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
   
    <>
     <NavMobile/>
    <NavVert/>
      
     
        <main id="main">
        <div className="main-container container">
        <Header />
        <AboutMe/>
         <Skills/>
         <Work/>
         <Portfolio/>
         <Contact/>
        
          </div>
          <Footer/>
        </main>
      
     
    </>
  )
}



export default LayoutStart
