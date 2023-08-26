/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tailwind CSS 411 :: danjacquemin.com`,
    description: `Tailwind CSS test drive.`,
    author: `@danjacquemin`,
    siteUrl: `https://danjacquemin.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `async`,
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            // https://fonts.google.com/specimen/Roboto+Flex?query=roboto+flex
            // and we using 'Roboto Flex' because they offer 12 axes
            // -- 'axes' ??
            // --  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide
            name: `Roboto Flex`,
            file: `https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
  ],
}
