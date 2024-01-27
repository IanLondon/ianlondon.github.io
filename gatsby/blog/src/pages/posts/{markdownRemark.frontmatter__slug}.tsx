import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Page from "../../components/Page";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

export { Head } from "../../components/Head";

// TODO alternative splash banner for posts vs home page.
const DEFAULT_SPLASH_IMAGE = (
  <StaticImage
    className="w-full"
    src="../../images/splash-banner.jpg"
    alt="splash image"
  />
);

export const BlogPostTemplate: React.FC<
  PageProps<Queries.SingleBlogPostQuery>
> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  // TODO: how to make graphqlTypegen correctly infer non-null fields?
  if (
    markdownRemark == null ||
    markdownRemark.frontmatter == null ||
    markdownRemark.html == null
  ) {
    console.error("missing data for AllBlogPostsQuery", markdownRemark);
    return <Page>Post not found...</Page>;
  }

  const { frontmatter, html } = markdownRemark;

  // TODO no 'any' here
  const splashImage = getImage(frontmatter.splashImage as any);

  return (
    <Page>
      {splashImage ? (
        <GatsbyImage
          className="w-full"
          image={splashImage}
          alt="splash image"
        />
      ) : (
        DEFAULT_SPLASH_IMAGE
      )}

      <article className="p-3 max-w-4xl m-auto">
        <h1 className="text-3xl">{frontmatter.title}</h1>
        <p className="mb-4">{frontmatter.date}</p>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <Link to="/">
        <p className="text-center w-full my-4 py-2 bg-amber-950 hover:bg-amber-900 hover:font-bold">
          Back
        </p>
      </Link>
    </Page>
  );
};

export const pageQuery = graphql`
  query SingleBlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        splashImage {
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
