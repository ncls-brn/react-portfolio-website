import React from "react";
import "./projets.css";
import IMG1 from "../../assets/projet1.png";
import IMG2 from "../../assets/panda-vs-trump.png";
import IMG7 from "../../assets/cinematch.png";
import IMG4 from "../../assets/travel1.png";
import IMG5 from "../../assets/meal2.png";
import IMG6 from "../../assets/netflix.png";

const Projets = () => {
  return (
    <section id="projets">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projets__container">
        <article className="projets__item">
          <div className="projets__item-image"></div>
          <img src={IMG1} alt="" className="size-image" />
          <h3>Dataviz</h3>
          <div className="projets__item-cta">
            <a
              href="https://github.com/ncls-brn/ncls-brn.github.io"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://ncls-brn.github.io/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              live projet
            </a>
          </div>
        </article>

        <article className="projets__item">
          <div className="projets__item-image"></div>
          <img src={IMG2} alt="" className="size-image" />
          <h3>Trump VS Panda</h3>
          <div className="projets__item-cta">
            <a
              href="https://github.com/ncls-brn/pico-8-panda-vs-trump"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://nclsbrn.itch.io/trump-vs-panda"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              live projet
            </a>
          </div>
        </article>

        <article className="projets__item">
          <div className="projets__item-image"></div>
          <img src={IMG4} alt="" className="size-image" />
          <h3>travel</h3>
          <div className="projets__item-cta">
            <a
              href="https://github.com/ncls-brn/travel"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://travel-life-app.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              live projet
            </a>
          </div>
        </article>

        <article className="projets__item">
          <div className="projets__item-image"></div>
          <img src={IMG5} alt="" className="size-image" />
          <h3>Meal App</h3>
          <div className="projets__item-cta">
            <a
              href="https://github.com/ncls-brn/meal-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://meals-by-name.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              live projet
            </a>
          </div>
        </article>

        <article className="projets__item">
          <div className="projets__item-image"></div>
          <img src={IMG6} alt="" className="size-image" />
          <h3>Netflix App</h3>
          <div className="projets__item-cta">
            <a
              href="https://github.com/ncls-brn/netflix"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://netflix-app-indol.vercel.app/auth"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              live projet
            </a>
          </div>
        </article>

        <article className="projets__item">
          <div className="projets__item-image"></div>
          <img src={IMG7} alt="" className="size-image" />
          <h3>CineMatch</h3>
          <div className="projets__item-cta">
            <a
              href="https://github.com/ncls-brn/movie-app-v4"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://cinematch-app.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              live projet
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projets;
