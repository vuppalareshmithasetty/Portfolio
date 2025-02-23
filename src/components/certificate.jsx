import React from "react";
import { FaAward } from "react-icons/fa"; 
import styles from "./Certificate.module.css"; 

const certificates = [
  {
    title: "IT Specialist in Python",
    issuer: "Pearson Vue",
    issuedDate: "May, 2023",
  },
  {
    title: "IT Specialist in HTML and CSS",
    issuer: "Pearson Vue",
    issuedDate: "May, 2023",
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    issuedDate: "Jan, 2023",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle",
    issuedDate: "Nov, 2023",
  },
  {
    title: "System Administrator",
    issuer: "Red Hat",
    issuedDate: "June, 2024",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issuedDate: "July, 2024",
  },
];

const Certificate = () => {
  return (
    <div className={styles.certificateContainer}>
      <h2 className={styles.heading}>Certificates</h2>
      <div className={styles.certificateGrid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.certificateCard}>
            <div className={styles.iconContainer}>
              <FaAward className={styles.icon} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.title}>{cert.title}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <p className={styles.issued}>
                <span>Issued:</span> {cert.issuedDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
