import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Loadable from 'react-loadable'
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrivateRoute from "../components/portfolio/privateRoute"
import Login from "../components/portfolio/login"
import Portfolio from "../components/portfolio/portfolio"

const LoadableComponent = Loadable({
  loader: () => import("../components/portfolio/portfolio"),
  loading() {
    return <div>Loading... (rendered from the server)</div>;
  },
});

const PagePortfolio = () => (
  <Layout>
      <SEO title="Portfolio" />
      <div className="columns is-centered">
        <div className="column is-4">
        <h1 className="title has-text-centered">Hallo {isLoggedIn() ? getUser().name : "Nutzer"}!</h1>
      
      <p className="has-text-centered">
      {isLoggedIn() ? (
        <>
          Du bist jetzt angemeldet. Hier ist mein Portfolio.
          {/* <Link to="/portfolio/portfolio">Portfolio</Link> */}
        </>
      ) : (
        <>
          
          Du musst <Link to="/portfolio/login">angemeldet</Link> sein, um mein Portfolio anzuschauen. 
        </>
      )}
        <Link to="/" > Zurück zur Startseite.</Link>
    </p>
   
  
        </div>
     
      </div>
     
   
  
    <Router>
  <PrivateRoute path="/portfolio/portfolio" component={Portfolio} />
      <Login path="/portfolio/login" />
    </Router>
    <div className="columns is-centered">
      <div className="column is-4">
    <Link to="/" className="button">Zurück zur Startseite</Link>
    </div>
    </div>
  </Layout>
)

export default PagePortfolio

