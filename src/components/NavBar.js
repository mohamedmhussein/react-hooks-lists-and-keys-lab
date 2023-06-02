import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const elements = links.map(element => <a key={element} href={`#${element}`}>{element}</a>)

  return (<nav>
    {elements}
  </nav>
  )
}

export default NavBar;
