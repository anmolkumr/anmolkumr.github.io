import "./portfolio.css";

import IMG1 from "../../assets/codeitor.png";
import IMG2 from "../../assets/Election.png";
import IMG3 from "../../assets/medical.png";
import IMG4 from "../../assets/Educational.png";
import IMG5 from "../../assets/TerraSafe.png";
import IMG6 from "../../assets/Blith.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Collaborative Code Editor with React.js",
      img: IMG1,
      description:
        "A Collaborative Code Editor for IITGN Developers made Under a Metis Project(Dev Club, IITGN)",
      technologies: "React JS |Node JS | Socket.io | Firebase",
      link: "https://github.com/anmolkumr/Collaborative-Editor-IITGN",
      github: "https://github.com/anmolkumr/Collaborative-Editor-IITGN",
    },
    {
      id: 2,
      title: "Educational Website",
      img: IMG4,
      description:
        "A Eductaional website Front-end Made using HTML, CSS, Bootstrap and Javascript",
      technologies: "Bootstrap | WOW.JS",
      link: "https://main--zesty-puppy-fb98ef.netlify.app/",
      github: "",
    },
    {
      id: 3,
      title: "Student Election Commission Website, IITGN",
      img: IMG2,
      description: "Being Technical Officer, Developed a new Website for Student Election Commission from Scratch",
      technologies: "",
      link: "https://students.iitgn.ac.in/Election_Commission/",
      github: "",
    },
    {
      id: 4,
      title: "Medical Clinic Website",
      img: IMG3,
      description:
        "A Full Stack Medical Clinic Website in PHP (Made in 2018)",
      technologies: "Html | CSS | JavaScript | PHP | MySQL",
      link: "http://anmol-demo.c1.biz/",
      github: "",
    },
    {
      id: 5,
      title: "Product Landing Page",
      img: IMG5,
      description:
        " TerraSafe | Helping Save lives",
      technologies: "HTML | SCSS | Bootstrap",
      link: "https://anmolkumr.github.io/TerraSafe-1/",
      github: "",
    },
    {
      id: 6,
      title: "Blithchron '23 Official Website",
      img: IMG6,
      description:
        "Developed the Website for Gujrat's Biggest Student-run Cultural Fest",
      technologies: "Html | Scss | Javascript",
      link: "https://blithchron.iitgn.ac.in",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
