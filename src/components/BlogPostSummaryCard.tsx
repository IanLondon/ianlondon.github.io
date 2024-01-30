import * as React from "react";
import { Link } from "gatsby";

interface Props {
  date: string; // already formatted
  slug: string;
  title: string;
  summary: string;
}

const BlogPostSummaryCard: React.FC<Props> = (props) => {
  const { date, slug, title, summary } = props;
  return (
    <Link to={`/posts/${slug}`}>
      <section className="bg-amber-900 hover:bg-amber-800 rounded-md my-2 p-4">
        <p className="text-xl pb-1">{title}</p>
        <p className="text-xl font-light">{summary}</p>
        <p className="text-amber-500">{date.toLocaleString()}</p>
      </section>
    </Link>
  );
};

export default BlogPostSummaryCard;
