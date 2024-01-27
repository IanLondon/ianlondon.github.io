import * as React from "react";
import ExternalLink from "./atoms/ExternalLink";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ProfileSidebar: React.FC = () => (
  <aside className="basis-1/4 lg:px-12 lg:pt-4 relative">
    <section className="sticky top-4">
      <Link to="/">
        <StaticImage
          className="hidden lg:block rounded-full mb-4"
          src="../images/icon.jpg"
          alt="pixel art portrait"
        />
      </Link>

      <ul className="flex justify-between">
        <li>
          <ExternalLink href="mailto:ianlondondu@gmail.com">Email</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://linkedin.com/ianlondon">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/IanLondon">
            GitHub
          </ExternalLink>
        </li>
      </ul>
    </section>
  </aside>
);

export default ProfileSidebar;
