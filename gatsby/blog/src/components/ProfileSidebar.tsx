import * as React from "react";
import ExternalLink from "./atoms/ExternalLink";
import { StaticImage } from "gatsby-plugin-image";

const ProfileSidebar: React.FC = () => (
  <aside className="basis-1/4 lg:px-12 lg:pt-4">
    <section>
      <StaticImage
        className="hidden lg:block rounded-full mb-4"
        src="../images/icon.jpg"
        alt="pixel art portrait"
      />

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
