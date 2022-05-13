import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/myficture.jpg";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="Failed to load."
        >

        </img>
        <div className="about-info">
          <b className="info-title">"Front end developer"</b>
          <div className="info">
            <br />
            A developer with a passion for continuous growth. I like to learn new features <br /> and do various developments with unique ideas.
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> Fatima HAj Yaya
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> Amsterdam
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> rizwfm@gmail.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" /> 1988.10.13
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
