import * as React from "react";
import { type HeadFC } from "gatsby";

// TODO: from query??
const TITLE = "Ian's Projects Blog";

export const Head: HeadFC = () => (
  <>
    <title>{TITLE}</title>
    <body className="bg-stone-900 text-amber-100 static h-full" />;
  </>
);
