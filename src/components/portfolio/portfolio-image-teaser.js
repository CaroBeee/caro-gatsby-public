import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';


function renderImage(file) {

  return (
     <Img fluid={file.node.childImageSharp.fluid} />
   
  )
}

const PortfolioImageTeaser = function (props) {

  return <StaticQuery
    query={graphql`
    query ImageTeaser {
        images:
        allFile(filter: { relativeDirectory: {eq: "portfolio/teaser"}}) {
          edges {
            node {
              base
              relativePath
              childImageSharp {
                fluid {
                  aspectRatio
                  base64
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find(
        image => image.node.base === props.img
      )
      return(renderImage(image))
    }}
  />
}

export default PortfolioImageTeaser;