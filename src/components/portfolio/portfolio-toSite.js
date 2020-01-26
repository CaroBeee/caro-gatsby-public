import React, { Component } from "react"
import { Link, navigate} from "gatsby"

import { getUser, isLoggedIn, logout } from "../../services/auth"

class PortfolioToSite extends Component {

 
  render() {

    const content = { message: "", login: true }
    if (isLoggedIn()) {
      content.message = `Hello, ${getUser().name}`
    } else {
      content.message = "You are not logged in"
    }

    return (
      <section id="portfolio">
        <div className="column is-10 is-offset-1">
          <h2 className="title">PORTFOLIO</h2>
          <hr />
          <div className="columns is-centered">
          <p>{content.message}</p>
         <Link to="/portfolio/" className="button" >Zum Portfolio</Link>
          {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/`))
            }}
          >
            Logout
          </a>
        ) : null}
          </div>
         
        </div>
      </section>
    )
  }
}

export default PortfolioToSite
