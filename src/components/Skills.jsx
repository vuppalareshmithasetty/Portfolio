import React from 'react';
import styles from './skills.module.css'; 

import { FaReact, FaJava, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaServer, FaCode, FaCogs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.heading}>My Skills</h1>
      
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <FaCode className={styles.skillIcon} />
          <h3 className={styles.skillName}>C</h3>
        </div>

        <div className={styles.skillCard}>
          <FaJava className={styles.skillIcon} />
          <h3 className={styles.skillName}>Java</h3>
        </div>

        <div className={styles.skillCard}>
          <FaPython className={styles.skillIcon} />
          <h3 className={styles.skillName}>Python</h3>
        </div>

        <div className={styles.skillCard}>
          <FaReact className={styles.skillIcon} />
          <h3 className={styles.skillName}>React.js</h3>
        </div>

        <div className={styles.skillCard}>
          <FaNodeJs className={styles.skillIcon} />
          <h3 className={styles.skillName}>Node.js</h3>
        </div>

        <div className={styles.skillCard}>
          <FaServer className={styles.skillIcon} />
          <h3 className={styles.skillName}>Express.js</h3>
        </div>

        <div className={styles.skillCard}>
          <FaHtml5 className={styles.skillIcon} />
          <h3 className={styles.skillName}>HTML</h3>
        </div>

        <div className={styles.skillCard}>
          <FaCss3Alt className={styles.skillIcon} />
          <h3 className={styles.skillName}>CSS</h3>
        </div>

        <div className={styles.skillCard}>
          <FaJsSquare className={styles.skillIcon} />
          <h3 className={styles.skillName}>JavaScript</h3>
        </div>

        <div className={styles.skillCard}>
          <DiMongodb className={styles.skillIcon} />
          <h3 className={styles.skillName}>MongoDB</h3>
        </div>

        <div className={styles.skillCard}>
          <DiMysql className={styles.skillIcon} />
          <h3 className={styles.skillName}>MySQL</h3>
        </div>

        <div className={styles.skillCard}>
          <FaCogs className={styles.skillIcon} />
          <h3 className={styles.skillName}>ServiceNow</h3>
        </div>

        <div className={styles.skillCard}>
          <FaGitAlt className={styles.skillIcon} />
          <h3 className={styles.skillName}>Git</h3>
        </div>

        <div className={styles.skillCard}>
          <FaGithub className={styles.skillIcon} />
          <h3 className={styles.skillName}>GitHub</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
