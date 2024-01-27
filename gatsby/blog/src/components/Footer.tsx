import * as React from "react";

const Footer: React.FC = () => (
  <footer className="text-center italic">
    ©{new Date().getFullYear()} Ian London
  </footer>
);

export default Footer;
