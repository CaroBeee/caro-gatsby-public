import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';


function renderImage(file) {
  console.log(file);
  return (
     <Img fluid={file.node.childImageSharp.fluid} />
   
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

export default PortfolioImageMockup;