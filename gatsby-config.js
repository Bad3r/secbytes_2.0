const siteMetadata = {
    title: `SecBytes`,
    name: `SecBytes`,
    siteUrl: `https://secbytes.net`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
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
        mailchimp: true,
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
  ];
  
  module.exports = {
    pathPrefix: "/secbytes_2.0",
    siteMetadata,
    plugins,
  };