import * as React from "react";
import { graphql, type PageProps } from "gatsby";
import BlogPostSummaryCard from "../components/BlogPostSummaryCard";
import { StaticImage } from "gatsby-plugin-image";
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

const IndexPage: React.FC<PageProps<Queries.AllBlogPostsQuery>> = ({
  data,
}) => {
  const blogPosts = data.allMarkdownRemark.nodes;

  return (
    <Page>
      <SplashBanner />

      <section className="flex flex-col lg:flex-row">
        <ProfileSidebar />

        <article className="w-full p-3 lg:basis-3/4 lg:m-auto lg:max-w-4xl">
          <h1 className="text-3xl">Posts</h1>
          {blogPosts.map((post) => (
            <BlogPostSummaryCard
              key={post.frontmatter.slug}
              date={post.frontmatter.date}
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
              // TODO: auto-generate summary first N characters
              summary={post.frontmatter.summary || ""}
            />
          ))}
        </article>
      </section>
    </Page>
  );
};

export default IndexPage;

export const postsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(
      sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: ASC } }]
    ) {
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
