import React, { memo } from "react";

import "../styles/portfolio.scss";
import note from "../images/note.gif";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <img id="picture" src={note} alt="amsterdam." />
            
           
            <div className="contents">
              <h1>Amsterdamse Musea</h1>
              <br />
              <br />
             <p> Amsterdam comes alive when the sun is out, and the last thing most people want to do is be indoors.We've listed the museums with <br />the most beautiful outdoor spaces in the city so you can get your arty fix and some Vitamin D in the process.</p>
           
              <div className="gitlink">
              <button className="herf-g" href="https://github.com/fatima1324/Amsterdamse-Musea">

              github link
              </button>
            </div>
            </div>
            </div>
            </div>
        </div>    
    </section>
  );
});

export default Portfolio;
