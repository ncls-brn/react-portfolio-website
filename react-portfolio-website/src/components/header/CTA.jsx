import React from "react";
import CV from "../../assets/CV-FR-Nicolas-BARAN.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noreferrer" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
