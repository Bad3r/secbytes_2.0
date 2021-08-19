const siteMetadata = {
    title: `HackLog`,
    name: `HackLog`,
    siteUrl: `https://hacklog.sh`,
    description: `❯ ~/hacklog.sh`,
    hero: {
      heading: `<a href="https://hacklog.sh"><img src="https://raw.githubusercontent.com/Bad3r/badScripts/master/secbytes.png" alt="SecBytes" border="0"></a>`,
      maxWidth: 652,
    },
    social: [
      {
        name: 'twitter',
        url: `https://twitter.com/0xBad3r`,
      },
      {

        url: `https://github.com/Bad3r/`,
      },
    ],
  };
  
  const plugins = [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        authorsPage: true,
        mailchimp: false,
        sources: {
          local: true,
          contentful: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/tux.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140432254-1",
      },
    },
  ];
  
  module.exports = {
    pathPrefix: "/",
    siteMetadata,
    plugins,
  };