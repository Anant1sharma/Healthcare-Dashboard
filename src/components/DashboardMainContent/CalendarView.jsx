import React from "react";
import styles from "./CalendarView.module.css";
import { calendarDays, calendarAppointments, bottomAppointments } from "../../data/calendarData";

const CalendarView = () => {
  return (
    <div className={styles.calendarContainer}>
      <h3 className={styles.monthLabel}>October 2021</h3>

      <div className={styles.grid}>
        {calendarDays.map((day, index) => (
          <div key={index} className={styles.cell}>
            <div className={styles.day}>{day}</div>
            {calendarAppointments[day] &&
              calendarAppointments[day].map((time, i) => (
                <div key={i} className={styles.timeSlot}>{time}</div>
              ))}
          </div>
        ))}
      </div>

      <div className={styles.bottomAppointments}>
        {bottomAppointments.map((appt, i) => (
          <div key={i} className={styles.appointmentCard}>
            <div className={styles.title}>{appt.title}</div>
            <div className={styles.time}>{appt.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
