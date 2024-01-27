import * as React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<Props> = (props) => (
  <a className="hover:underline" href={props.href}>
    {props.children}
  </a>
);

export default ExternalLink;
