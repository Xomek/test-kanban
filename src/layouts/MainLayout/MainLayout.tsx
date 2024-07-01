import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../components";

import styles from "./MainLayout.module.css";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
