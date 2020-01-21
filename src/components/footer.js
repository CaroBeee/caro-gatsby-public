
import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  
    <footer className="footer">
      <div className="content has-text-centered">
      <div
  className="navbar-start navbar-center">
  <Link to="/impressum/" className="navbar-item" activeClassName="is-active">Impressum</Link>
  <Link to="/datenschutz/" className="navbar-item" activeClassName="is-active">Datenschutz</Link>
</div>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
  )
  
  
  export default Footer
  

