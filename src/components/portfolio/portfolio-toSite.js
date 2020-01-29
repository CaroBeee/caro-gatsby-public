import React, { Component } from "react"
import { Link, navigate} from "gatsby"

import { getUser, isLoggedIn, logout } from "../../services/auth"

class PortfolioToSite extends Component {

 
  render() {

    const content = { message: "", login: true }
    if (isLoggedIn()) {
      content.message = `Hallo, ${getUser().name}`
    } else {
      content.message = "Dies ist ein passwortgeschützter Bereich. Du bist aktuell nicht angemeldet."
    }

    return (
      <section id="portfolio">
        <div className="column is-10 is-offset-1">
          <h2 className="title">PORTFOLIO</h2>
          <hr />
          <div className="columns is-vcentered">
            <div className="column">
            <div className="notification is-primary">
 
 {content.message}
</div>
            </div>
            <div className="column">
            {isLoggedIn() ? (
           
           <a
              href="/"
              className="button is-link is-outlined is-small"
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
          <div className="columns">
         
              <div className="column">
         <Link to="/portfolio/" className="button" >Zum Portfolio</Link>
          {` `}
          </div>
         
     
          </div>
         
        </div>
      </section>
    )
  }
}

export default PortfolioToSite
