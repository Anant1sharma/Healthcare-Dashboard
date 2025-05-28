import React from "react";
import styles from "./Header.module.css";
import { Bell, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>

      <div className={styles.searchWrapper}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>

      <div className={styles.rightSection}>
        <Bell className={styles.icon} size={20} />

        <div className={styles.profile}>
          <img
            src="https://i.pravatar.cc/32?img=12"
            alt="User Avatar"
            className={styles.avatar}
          />
          <span className={styles.username}>Dr. Smith</span>
        </div>

        <button className={styles.addButton}>
          <Plus size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
