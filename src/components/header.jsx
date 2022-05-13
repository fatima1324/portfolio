import React, { memo } from "react";
import "../styles/header.scss";
import { IoLogoLinkedin } from "react-icons/io5";

import { Linkedin } from "@icons-pack/react-simple-icons";
const header= memo(({ handleScroll }) => {
  return (
    <header className="header-section">
      <div className="header-contents">
        <button onClick={() => handleScroll()} className="h-topButton">
          <IoLogoLinkedin/>
        </button>
        <a href="https://github.com/fatima1324">
          <Linkedin color="#000" size={30} />
        </a>
      </div>
    </header>
  );
});

export default header;
