import React from "react";
import styles from "./AnatomySection.module.css";
import { healthStatus } from "../../data/healthStatus";

const AnatomySection = () => {
  return (
    <div className={styles.container}>
      
      <img src="https://i.ibb.co/35b5MJ47/anatomy-png.jpg" alt="Human body" className={styles.image} />



      <div className={styles.statusList}>
        {healthStatus.map(({ label, color, description }) => (
          <div key={label} className={styles.statusItem}>
            <span className={styles.indicator} style={{ backgroundColor: color }} />
            <div className={styles.labelBlock}>
              <div className={styles.label}>{label}</div>
              <div className={styles.desc}>{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
