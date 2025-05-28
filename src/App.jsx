import React from "react"
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import styles from "../src/styles/App.module.css";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
function App() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header />
        <DashboardMainContent />
        
      </main>
    </div>
  );
}

export default App;
