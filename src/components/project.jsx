import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Project.module.css"; 

const projects = [
  {
    title: "Bus In And Out",
    description: "Built with React.js, Node.js, and Express.js. Integrated Stripe for payments.",
    tech: ["React JS", "Express.js", "MongoDB"],
    link: "http://app.technicalhub.io:5567",
    image: "https://pics.craiyon.com/2024-09-13/MOXDCaHlQ26pLtsHOwKMrA.webp", 
  },
  {
    title: "Treks and Travels",
    description: "Implemented real-time messaging using Socket.io and MongoDB.",
    tech: ["HTML", "CSS", "JavaScript"],
    // link: "https://example.com",
    image: "https://pics.craiyon.com/2024-09-21/QZf2ZjtxTGe_tZ7TXMojiQ.webp", 
  },
  {
    title: "Leaderboard",
    description: "Created an admin dashboard with charts and API integration.",
    tech: ["MySQL", "Java"],
    // link: "https://example.com",
    image: "https://pics.craiyon.com/2024-09-25/82q--MsvTbGj98uEC7_AAw.webp", 
  },
];

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                <FaExternalLinkAlt />
              </a>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <div className={styles.techStack}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.techItem}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
