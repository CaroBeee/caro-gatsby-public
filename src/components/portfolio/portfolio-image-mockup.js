import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';


function renderImage(file, title) {

  return (
     <Img fluid={file.node.childImageSharp.fluid} alt={title} />
   
  )
}

const PortfolioImageMockup = function (props) {

  return <StaticQuery
    query={graphql`
    query ImageMockup {
        images:
        allFile(filter: { relativeDirectory: {eq: "portfolio/mockups"}}) {
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
                  srcWebp
                  srcSet
                  srcSetWebp
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
      const altText = "Mockup-"+props.title
      return(renderImage(image, altText))
    }}
  />
}

export default PortfolioImageMockup;