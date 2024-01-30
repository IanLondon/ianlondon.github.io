import * as React from "react";
import { Link, PageProps } from "gatsby";
import Page from "../components/Page";

export { Head } from "../components/Head";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="text-center text-xl pt-16 pb-4">
      <h1>Page not found.</h1>
      <p className="p-4 text-3xl">😔</p>
      <p className="text-amber-500 text-3xl underline">
        <Link to="/">Back to home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
