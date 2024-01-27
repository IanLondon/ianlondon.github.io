import * as React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

interface Props {
  children: React.ReactNode;
}

const Page: React.FC<Props> = (props) => (
  <main>
    <Nav />
    {props.children}

    <Footer />
  </main>
);

export default Page;
