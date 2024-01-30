import * as React from "react";
import ExternalLink from "./atoms/ExternalLink";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import RssLink from "./RssLink";

const ProfileSidebar: React.FC = () => (
  <aside className="basis-1/4 lg:px-12 lg:pt-4 relative">
    <section className="sticky top-4 lg:p-0 p-4">
      <Link to="/" className="block w-full">
        <div className="m-auto w-32 lg:w-full">
          <StaticImage
            className="rounded-full mb-4"
            src="../images/icon.jpg"
            alt="pixel art portrait"
          />
        </div>
      </Link>

      <ul className="flex justify-between">
        <li>
          <ExternalLink href="mailto:ianlondondu@gmail.com">Email</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://linkedin.com/in/ianlondon">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/IanLondon">
            GitHub
          </ExternalLink>
        </li>
      </ul>

      <div className="w-full my-4">
        <RssLink className="mx-auto block w-20" />
      </div>
    </section>
  </aside>
);

export default ProfileSidebar;
