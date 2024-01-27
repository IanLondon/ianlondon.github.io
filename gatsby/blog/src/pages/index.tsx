import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import BlogPostSummaryCard from "../components/BlogPostSummaryCard";
import { StaticImage } from "gatsby-plugin-image";
import ExternalLink from "../components/atoms/ExternalLink";
import Page from "../components/Page";
import ProfileSidebar from "../components/ProfileSidebar";

export { Head } from "../components/Head";

const SplashBanner = () => (
  <StaticImage
    src="../images/splash-banner.jpg"
    alt="splash"
    className="w-full"
  />
);

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const blogPosts = data.allMarkdownRemark.nodes;

  return (
    <Page>
      <SplashBanner />

      <section className="flex flex-col lg:flex-row">
        <ProfileSidebar />

        <article className="w-full lg:basis-3/4 p-3">
          <h1 className="text-3xl">Posts</h1>
          {blogPosts.map((post) => (
            <BlogPostSummaryCard
              key={post.frontmatter.slug}
              {...post.frontmatter}
            />
          ))}
        </article>
      </section>
    </Page>
  );
};

export default IndexPage;

type DataProps = {
  allMarkdownRemark: {
    nodes: Array<{
      frontmatter: {
        date: Date;
        slug: string;
        title: string;
        summary: string;
      };
    }>;
  };
};

export const postsQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          summary
        }
      }
    }
  }
`;
