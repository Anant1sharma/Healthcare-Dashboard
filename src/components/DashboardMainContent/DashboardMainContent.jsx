import React from "react";
import styles from "./DashboardMainContent.module.css";
import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

const DashboardMainContent = () => {
  return (
    <div className={styles.dashboardGrid}>
      <div className={styles.leftColumn}>
        <DashboardOverview />
        <AnatomySection />
        <UpcomingSchedule />
        <ActivityFeed />
        
      </div>
      <div className={styles.rightColumn}>
        <CalendarView />
      </div>
    </div>
  );
};

export default DashboardMainContent;
