/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//   plugins: [],
// }

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["job", "project"],
  singleTypes: ["about"],
  remoteFileHeaders: {
    /**
     * Customized request headerss
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://your-site-domain/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
}

module.exports = {
  siteMetadata: {
    title: "PhilipSanM Portfolio",
    description: "Hi, nOtHiNg tO sEe hErE, just my portfolio. ;B",
    titleTemplate: "%s | phlpsnm Portfolio",
    url: "https://philipsanm.github.io",
    twitterUsername: "@PhilipSanM_",
    image: "/phlpsnm.png",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      // We need filesystem source plugin to add publicURL function to File nodes
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `placeholder`,
        // path is required param, so let's just point it to single file to not create
        // much unnecessary work for it
        path: `${__dirname}/gatsby-config.js`,
      },
    },
  ],
}
