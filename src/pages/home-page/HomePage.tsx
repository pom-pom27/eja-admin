import clsx from "clsx";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home-page.module.scss";
interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const handleSidebar = () =>
    setIsSidebarHidden((isSidebarHidden) => !isSidebarHidden);
  return (
    <div className={styles["home-page"]}>
      <Sidebar isSidebarHidden={isSidebarHidden} />
      <main
        className={clsx(
          styles["home-container"],
          isSidebarHidden && styles["full-width"]
        )}
      >
        Dashboard
      </main>
    </div>
  );
};

export default HomePage;
