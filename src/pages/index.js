import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../sass/styles.scss"

class IndexPage extends Component {




  render() {
    return (

  <Layout>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>



)
}



}
export default IndexPage
