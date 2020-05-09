/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/data/` } },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `vollkorn`,
          `open sans\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
  siteMetadata: {
    title: "Helen Anne Travis",
    titleTemplate: "%s · The Real Hero",
    description: "Helen Anne Travis is a writer in Tampa, FL.",
    url: "https://www.helenannetravis.com", // No trailing slash allowed!
    image: "/images/sarah-suits.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@helenanne",
    keywords: "writer, content-marketing",
  },
}
