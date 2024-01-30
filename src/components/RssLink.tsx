import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

interface Props {
  className?: string;
}

const RssLink: React.FC<Props> = (props) => (
  <Link to="/rss.xml" className={props.className}>
    <StaticImage
      src="../images/rss.png"
      alt="rss icon"
      className="w-6 inline-block mr-2"
    />
    <span>RSS</span>
  </Link>
);

export default RssLink;
