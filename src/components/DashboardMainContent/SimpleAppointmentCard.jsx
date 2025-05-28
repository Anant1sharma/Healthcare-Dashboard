import React from "react";
import { Calendar } from "lucide-react";
import styles from "./SimpleAppointmentCard.module.css";

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className={styles.card}>
      <Calendar size={16} className={styles.icon} />
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
