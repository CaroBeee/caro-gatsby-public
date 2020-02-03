import React from "react"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ScrollToTop extends React.Component {
  render() {
    return (
      <Link
        className="btn-scrolltop"
        to="header"
        spy={true}
        smooth={true}
        duration={500}
      >
        <FontAwesomeIcon
                      
                      icon={["fas", "angle-double-up"]}
                    ></FontAwesomeIcon>

      </Link>
    )
  }
}

export default ScrollToTop
