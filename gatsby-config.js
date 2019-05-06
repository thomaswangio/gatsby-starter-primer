module.exports = {
  siteMetadata: {
    title: `gatsby-starter-primer`,
    description: `Open Source Projects from Mona Lisa Octocat, the Github Mascot`,
    author: `@monatheoctocat`,
    keywords: `github, open-source, projects`,
    url: `https://gatsby-starter-primer.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/octoface.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
