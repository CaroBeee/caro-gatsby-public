import { hot } from 'react-hot-loader/root';
import React from "react"
import SEO from "../components/seo"
import LayoutStart from "../components/layout-start"


import "../sass/styles.scss"

const IndexPage = () => (


  <LayoutStart>
    <SEO title="Caro Behler" />

  
  </LayoutStart>


)
export default hot(IndexPage)
