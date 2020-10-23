/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Prasun's Starter",
    titleTemplate: "%s · Prasun's Starter",
    description: "A simplistic Gatsby starter using TailwindCSS and Sass!",
    url: "https://www.gatsbyjs.com", // No trailing slash allowed!
    image: "", // Path to your image you placed in the 'static' folder
    twitterUsername: "@PrasunKar_",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Inter var", "Inter"],
          urls: ["./fonts/inter.css"],
        },
      },
    },
  ],
}
