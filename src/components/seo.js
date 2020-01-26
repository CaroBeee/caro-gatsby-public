/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {Helmet} from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../img/favicon.ico"

const SEO = ({ description, lang, meta, title }) => {
  const  {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
        description
        title
        image
        url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title

  return (
    <>
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: site.siteMetadata.image,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `robots`,
          content: "nofollow",
        },
      
       
      ].concat(meta)}
    >
       <link rel="icon" href={favicon} />
      

    </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `de`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,

}

export default SEO
