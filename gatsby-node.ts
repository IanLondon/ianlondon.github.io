import { type GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions, schema }) => {
    const { createTypes } = actions;
    const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter!
      }

      type Frontmatter {
        category: Category!
        comments: Boolean
        date: Date! @dateformat(formatString: "YYYY-MM-DD")
        slug: String!
        tags: [String]!
        splashImage: File @fileByRelativePath
        summary: String
        title: String!
      }

      enum Category {
        blog
        project
      }
    `;
    createTypes(typeDefs);
  };
