import React from "react";
import styles from "./DashboardOverview.module.css";
import { dashboardStats } from "../../data/dashboardStats";

const DashboardOverview = () => {
  return (
    <div className={styles.overviewGrid}>
      {dashboardStats.map((item) => (
        <div key={item.label} className={styles.card}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.value}>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
