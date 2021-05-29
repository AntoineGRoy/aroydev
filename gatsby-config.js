module.exports = {
  siteMetadata: {
    title: `Antoine Roy - Web Developer`,
    description: ` Antoine Roy PortFolio`,
    author: `A-Roy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
    resolve: `gatsby-source-wordpress`,
    options: {
      /*
       * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
       * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
       */
      baseUrl: `https://roy-a.name/gatsby/wordpress/`,
      protocol: `https`,
      hostingWPCOM: false,
      useACF: false,
    }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antoine Roy PortFolio`,
        short_name: `a-roy.me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ 
        },
        options: {
          tag: "symbol",
          name: "logo",
          props: {
            className: "logoSVG",
            title: "logo"}
      }
    }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
