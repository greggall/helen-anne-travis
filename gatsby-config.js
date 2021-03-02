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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166283610-1",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2276250,
        sv: 6,
      },
    },
  ],
  siteMetadata: {
    title: "Helen Anne Travis",
    titleTemplate: "%s · Helen Anne Travis",
    titleAlt: "Helen Anne Travis",
    headline: "Copywriting and Content Marketing by Helen Anne Travis",
    description:
      "Helen Anne Travis is a content marketer and copywriter in Tampa, FL.",
    url: "https://www.helenannetravis.com", // No trailing slash allowed!
    image: "/images/helen-anne-headshot.jpg", // Path to your image you placed in the 'static' folder
    siteLanguage: "en",
    ogLanguage: "en",
    logo: "/images/helen-anne-headshot.jpg",
    author: "Helen Anne Travis",
    owner: "Helen Anne Travis",
    twitter: "@helenanne",
    keywords: "writer, content-marketing",
    facebook: "helen-anne-travis",
    facebookAppID: "",
  },
}
