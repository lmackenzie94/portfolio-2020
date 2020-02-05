require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        // find in sanity.json of studio codebase
        projectId: process.env.PROJECT_ID,
        dataset: process.env.DATASET,
        token: process.env.SANITY_TOKEN,
        // the below enabled watch mode (get token from manage.sanity.io > Settings > API > create new Read token)
        overlayDrafts: true,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@lmack/sanity-heroku-preview`,
      options: {
        herokuAppName: `lukemackenzie-portfolio`,
        datasetToUse: process.env.DATASET,
      },
    },
    {
      resolve: `@lmack/core`,
      options: {
        siteMapConfig: {
          siteMetadata: {
            siteUrl: `https://lukemackenzie.ca`,
            title: `Luke MacKenzie`,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Heebo`,
            variants: [`900`, `700`],
          },
          {
            family: `Lora`,
            variants: [`400`],
          },
          {
            family: `Noto Sans`,
            variants: [400, 700],
          },
        ],
      },
    },
    // `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-156009404-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    //   options: {
    //     // production: true,
    //     defaultSizes: `gzip`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
