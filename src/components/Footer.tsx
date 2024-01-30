import * as React from "react";
import RssLink from "./RssLink";

const Footer: React.FC = () => (
  <footer className="text-center">
    <div>
      <span className="italic text-lg">
        That's all folks! If you have read this far, why don't you follow my
        blog's RSS?
      </span>
      <RssLink className="block mx-auto py-4 w-20" />
    </div>
    <div className="pb-8">©{new Date().getFullYear()} Ian London</div>
  </footer>
);

export default Footer;
