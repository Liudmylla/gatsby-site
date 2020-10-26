/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    // Links to your social networks:
    social: [
      {
        url: 'https://www.facebook.com/marina.dinmoukhametova/',
        name: 'Facebook'
      }
    ]
  },
 
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-theme-contact`,
      options: {
        contactPath: '/contact',
        successPath: '/thanks'
      }
    }
  ],
}
