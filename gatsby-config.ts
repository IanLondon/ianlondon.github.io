import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Ian London's Projects Blog",
    siteUrl: `https://ianlondon.github.io/`,
    description: "A blog of software and other projects",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: (data: { query: Queries.AllBlogPostsQuery }) => {
              const { allMarkdownRemark } = data.query;
              return allMarkdownRemark.nodes.map((node) => {
                // TODO: extract from metadata
                const siteUrl = "https://ianlondon.github.io";
                const pageUrl = `${siteUrl}/posts/${node.frontmatter.slug}`;
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.summary,
                  date: node.frontmatter.date,
                  url: pageUrl,
                  guid: pageUrl,
                  // custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
                ) {
                  nodes {
                    frontmatter {
                      date
                      slug
                      title
                      summary
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Ian London's Blog: RSS Feed",
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.jpg",
        name: "Ian London's Project Blog",
        short_name: "Ian's Blog",
        // background_color: "#6b37bf",
        // theme_color: "#6b37bf",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "vscode",
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
      __key: "posts",
    },
  ],
};

export default config;
