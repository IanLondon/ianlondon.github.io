import * as React from "react";
import Footer from "./Footer";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

deckDeckGoHighlightElement();

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = (props) => (
  <main>
    {props.children}
    <Footer />
  </main>
);

export default Page;
