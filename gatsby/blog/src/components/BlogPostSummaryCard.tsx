import * as React from "react";
import { Link } from "gatsby";
import { BlogPostFrontMatter } from "../types";

const BlogPostSummaryCard: React.FC<BlogPostFrontMatter> = (props) => {
  const { date, slug, title, summary } = props;
  return (
    <Link to={`/posts${slug}`}>
      <section className="bg-amber-900 hover:bg-amber-800 rounded-md my-2 p-4">
        <p className="font-semibold">{title}</p>
        <p>{date.toLocaleString()}</p>
        <p>{summary}</p>
      </section>
    </Link>
  );
};

export default BlogPostSummaryCard;
