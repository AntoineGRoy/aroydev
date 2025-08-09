module.exports = {
  siteMetadata: {
    title: `Antoine Roy - Web Developer`,
    description: `Antoine Roy Portfolio`,
    author: `A-Roy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`, // ✅ modern image plugin
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antoine Roy Portfolio`,
        short_name: `a-roy.me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // ✅ relative to root
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/, // ✅ matches SVGs in /assets
        },
      },
    },
    // Optional: Enable this if you want offline/PWA support
    // `gatsby-plugin-offline`,
  ],
};
