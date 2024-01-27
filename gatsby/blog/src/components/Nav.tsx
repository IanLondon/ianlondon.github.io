import { Link } from "gatsby";
import * as React from "react";

const Nav: React.FC = () => (
  <nav className="flex fixed top-0 left-0 w-full z-30 bg-opacity-50 bg-amber-950">
    <Link className="mx-4 hover:font-bold" to="/">
      Home
    </Link>
  </nav>
);

export default Nav;
