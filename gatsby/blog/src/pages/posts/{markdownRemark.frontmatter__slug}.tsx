import * as React from "react";
import { Link, PageProps, graphql } from "gatsby";
import Page from "../../components/Page";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { BlogPostFrontMatter } from "../../types";

export { Head } from "../../components/Head";

interface DataProps {
  markdownRemark: {
    html: string;
    frontmatter: BlogPostFrontMatter;
  };
}

// TODO alternative splash banner for posts vs home page.
const DEFAULT_SPLASH_IMAGE = (
  <StaticImage
    className="w-full"
    src="../../images/splash-banner.jpg"
    alt="splash image"
  />
);

export const BlogPostTemplate: React.FC<PageProps<DataProps>> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  console.log({ splash: frontmatter.splashImage });

  const splashImage = getImage(frontmatter.splashImage || null);

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

      <article className="p-3">
        <h1 className="text-3xl">{frontmatter.title}</h1>
        <p className="mb-4">{frontmatter.date.toLocaleString()}</p>
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
  query ($id: String!) {
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
