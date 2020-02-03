import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
   
      <div className="box has-text-centered">
      <h1 className="title has-text-centered">LEIDER NICHTS DA</h1>
        <p className="has-text-centered">Wahrscheinlich vertippt.. :(</p>
      <Link to="/" className="button is-link ">Zurück zur Startseite</Link>
   
      </div>
   

  </Layout>
)

export default NotFoundPage
