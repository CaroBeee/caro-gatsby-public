import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';


const PortfolioImage =  (props) => {


    const data = useStaticQuery(graphql`
    query {
      images:
      allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "portfolio/projekte"}}) {
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
  `)
    return (
      <div className="columns is-multiline">     
      {data.images.edges
     
      .filter(({node}) => {
        return node.base.includes(props.project)
      })
          
      .map(({ node }, index) => (

        <div key={index} className="column" data-project={props.project}>
        <Img fluid={node.childImageSharp.fluid} alt={props.title}/>
        </div>
      ))}
      </div>
     
       
     
    )
  }

export default PortfolioImage;