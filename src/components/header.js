import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ siteTitle }) => (
  
  <header className="header">
  <div className="column  is-offset-1">
    <button className="btn btn-transparent">
      <FontAwesomeIcon icon={[ 'fas', 'file-pdf']}></FontAwesomeIcon>
      Lebenslauf als PDF
    </button>
    <div className="resume-title">
<h2>{siteTitle}</h2>
   
      <div className="resume-designation is-offset-1">
        <span className="border"></span>
        <span>Creative UI Developer</span>
      </div>
    </div>
  </div>
  <div className="header-overlay"></div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
