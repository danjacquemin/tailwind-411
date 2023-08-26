import * as React from "react";

const Header = ({ siteTitle }) => (
  <>
    <header className="bg-emerald-800 p-4 text-white">
      <p>{siteTitle}</p>
    </header>
    <hr />
  </>
);

export default Header;
