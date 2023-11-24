require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.PROJECT_ID,
        dataset: process.env.DATASET,
        token: process.env.SANITY_TOKEN,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-157951713-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Heebo: 900, 700', 'Lora: 400', 'Noto Sans: 400, 700'],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M6KZNS8',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: {platform: 'gatsby'},

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
  ],
}
