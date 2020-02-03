import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import downloadFile from '../data/CV_CaroBehler_.pdf'

const Header = ({ siteTitle }) => (
  
  <header className="header">
  <div className="column  is-offset-1">
    <a className="btn btn-transparent with-icon" href={downloadFile} download>
      <FontAwesomeIcon icon={[ 'fas', 'file-pdf']}></FontAwesomeIcon>
      Lebenslauf als PDF
    </a>
    <div className="resume-title">
<h2>{siteTitle}</h2>
   
      <div className="resume-designation">
        <span className="border"></span>
        <span>Creative UI Developer</span>
      </div>
    </div>
  </div>
{/*   <div className="header-overlay"></div> */}
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
