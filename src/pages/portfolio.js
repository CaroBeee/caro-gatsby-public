import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Loadable from 'react-loadable'
import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrivateRoute from "../components/portfolio/privateRoute"
import Login from "../components/portfolio/login"
//import Portfolio from "../components/portfolio/portfolio"

const LoadableComponent = Loadable({
  loader: () => import("../components/portfolio/portfolio"),
  loading() {
    return <div>Loading... (rendered from the server)</div>;
  },
});

const PagePortfolio = () => (
  <Layout>
      <SEO title="Portfolio" />
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check my Portfolio.
          {/* <Link to="/portfolio/portfolio">Portfolio</Link> */}
        </>
      ) : (
        <>
          You should <Link to="/portfolio/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
    <Link to="/">Zurück zur Startseite</Link>
    <Router>
  <PrivateRoute path="/portfolio/portfolio" component={LoadableComponent} />
      <Login path="/portfolio/login" />
    </Router>
    
  </Layout>
)

export default PagePortfolio

