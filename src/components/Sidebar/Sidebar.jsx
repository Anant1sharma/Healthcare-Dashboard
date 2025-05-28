import React from "react";
import styles from "./Sidebar.module.css";
import { sidebarLinks } from "../../data/navigation";
import * as Icons from "lucide-react";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>General</h2>
      <nav className={styles.nav}>
        {sidebarLinks.map(({ label, icon }) => {
          const LucideIcon = Icons[icon] || Icons.Circle;
          return (
            <div key={label} className={styles.navItem}>
              <LucideIcon size={20} className={styles.icon} />
              <span>{label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
