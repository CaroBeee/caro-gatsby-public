module.exports = {
  siteMetadata: {
    title: `Caro Behler`,
    description: `Caro Behler ist Webentwicklerin (Web-Developer). Die Fähigkeiten und das Portfolio findet man hier. `,
    author: `Caro Behler`,
    url:"https://carobehler.de",
    image:"/img/cubephoto.jpg"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
   /*  {
      resolve: `gatsby-plugin-remove-serviceworker`,
      options: {
        filename: `runtime-service-worker.js`,
      },
    }, */
  
   /*    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["Raleway:100,200,300,400,500,600,700,800,900"],
          urls: ["fonts.css"]
        }
      }
    }, */
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Raleway",
              variants: ["900", "100", "200","300", "400", "500", "600", "700", "800"],
              strategy: 'selfHosted' ,
              fontDisplay: 'swap'
            },
          ],
        },
     
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
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
     `gatsby-plugin-minify`,
    /*  {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Caro Behler Site`,
        short_name: `CB Site`,
        start_url: `/`,
        background_color: `#fff21e`,
        theme_color: `#fff21e`,
        display: `minimal-ui`,
        icon: `img/svg/Logo_CB.svg`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },  
     */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`, 
    
  ],
  pathPrefix: "/caro-gatsby"
}
