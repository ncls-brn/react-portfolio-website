import React from "react"
import CV from "../../assets/CV_Nicolas_Baran_V2.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} target="_blank" rel="noreferrer" className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA