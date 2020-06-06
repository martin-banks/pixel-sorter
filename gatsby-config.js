require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Project template`,
    description: `-- Template for personal projects --`,
    author: `Martin Banks. @anotherbanksy`,
    siteUrl: 'https://www.martinbanks.com.au',
  },
  plugins: [
    {
      // ? https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-158548765-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: true,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: [],
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/files`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Banks; Design & Dev`,
        short_name: `Martin Banks`,
        lang: 'en',
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/files/images/martinbanks-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,

    // ! NOT IN USE
    // ? This will enable cloudinary image server when complete
    // {
    //   resolve:`gatsby-source-cloudinary`,
    //   options:{
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     // type: `upload`,
    //     // maxResults: `Max result`,
    //     // tags:`fetch image tags?`,
    //     // prefix: `abc-xyz/`
    //   }
    // },

  ],
}
