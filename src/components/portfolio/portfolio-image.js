import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

function renderImage(file) {
  console.log(file);
  return (
     <Img fluid={file.node.childImageSharp.fluid} />
   
  )
}


const PortfolioImage =  (props) => {


    const data = useStaticQuery(graphql`
    query {
      images:
      allFile(filter: { relativeDirectory: {eq: "portfolio/projekte"}}) {
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
  `)
    return (
      <div className="columns">     
      {data.images.edges
      
      .filter(({node}) => {
        return node.base.includes(props.project)
      })
      
      .map(({ node }, index) => (

        <div className="column" data-project={props.project}>
        <Img fluid={node.childImageSharp.fluid} />
        </div>
      ))}
      </div>
     
       
     
    )
  }

export default PortfolioImage;