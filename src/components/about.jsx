import React from "react";
import styles from "./about.module.css"; 

const About = () => {
  return (
    <section className={styles.aboutContainer}>
    <div className={styles.aboutContent}>
  <h4 className={styles.subheading}>ABOUT</h4>
  <h2 className={styles.heading}>Introduction.</h2>
  <p className={styles.description}>
    I am a Full-Stack Developer with experience in working on real-time projects.  
    I have built and designed responsive websites using technologies like React.js, Express.js, and MongoDB.  
    My focus is on creating user-friendly applications that work efficiently across different devices.
  </p>
  <p className={styles.description}>
    I am currently pursuing a B.Tech in Artificial Intelligence and Machine Learning  
    at Aditya Engineering College. As a student, I am constantly learning new technologies  
    and improving my problem-solving skills through projects and coursework.
  </p>
  <p className={styles.description}>
    I enjoy building projects, learning new technologies, and working on real-world applications.  
    I am keen on learning new technologies and gaining practical experience while continuing my studies.
  </p>
</div>


    </section>
  );
};

export default About;
