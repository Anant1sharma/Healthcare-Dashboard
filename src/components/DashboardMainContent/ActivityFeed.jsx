import React from "react";
import styles from "./ActivityFeed.module.css";

const ActivityFeed = () => {
  // Static activity data for bar height
  const activityData = [30, 70, 50, 90, 60, 40, 80];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Activity</h3>
      <p className={styles.summary}>3 appointments this week</p>
      
      <div className={styles.chart}>
        {activityData.map((value, i) => (
          <div key={i} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{ height: `${value}%` }}
              title={`${value}%`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
