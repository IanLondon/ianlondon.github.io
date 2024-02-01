import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  date: string; // already formatted
  slug: string;
  title: string;
  summary: string;
  splashImage?: IGatsbyImageData;
}

const BlogPostSummaryCard: React.FC<Props> = (props) => {
  const { date, slug, title, splashImage, summary } = props;
  return (
    <Link to={`/posts/${slug}`}>
      <section className="bg-amber-900 hover:bg-amber-800 rounded-md my-2 flex flex-col content-center border-amber-600 border">
        <div className="p-4">
          <p className="text-xl pb-1">{title}</p>
          <p className="text-xl font-light">{summary}</p>
          <p className="text-amber-500">{date.toLocaleString()}</p>
        </div>
        {splashImage ? (
          <GatsbyImage
            className="rounded-b-md"
            image={splashImage}
            alt="splash image"
          />
        ) : null}
      </section>
    </Link>
  );
};

export default BlogPostSummaryCard;
