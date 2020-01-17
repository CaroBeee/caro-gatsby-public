module.exports = {
  siteMetadata: {
    title: `Caro Behler`,
    description: `Hallo, ich bin Caro(lin) Behler und Webentwicklerin. Alles über mich findet sich hier.`,
    author: `Caro Behler`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
   /*  {
      resolve: `gatsby-plugin-remove-serviceworker`,
      options: {
        filename: `runtime-service-worker.js`,
      },
    }, */
  
      {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["Raleway:100,200,300,400,500,600,700,800,900"],
          urls: ["fonts.css"]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
  
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  
  
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
   /*   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caro Behler Site`,
        short_name: `CB Site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/svg/icons.svg`, // This path is relative to the root of the site.
      },
    },  */
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    /*  `gatsby-plugin-offline`, */
    
  ],
  pathPrefix: "/caro-gatsby"
}
