import React from "react";
import styles from "./UpcomingSchedule.module.css";
import { upcomingAppointments } from "../../data/upcomingApponitments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, i) => (
        <div key={i} className={styles.dayGroup}>
          <div className={styles.day}>{group.day}</div>
          <div className={styles.cards}>
            {group.items.map((item, j) => (
              <SimpleAppointmentCard key={j} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
