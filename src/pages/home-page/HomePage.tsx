import { useMediaQuery } from "@mui/material";
import { memo } from "react";
import { Outlet } from "react-router-dom";
import appStore, { AppState } from "../../appState";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home-page.module.scss";
interface IHomePage {}

//memoization state zustand
const isSidebarHiddenSelector = (state: AppState) => state.isSidebarHidden;
const isToggleSidebarHiddenSelector = (state: AppState) => state.toggleSidebar;

const HomePage = ({}: IHomePage) => {
  const matches = useMediaQuery("(max-width: 1400px)");
  const isSidebarHidden = appStore(isSidebarHiddenSelector);
  const toggleSidebar = appStore(isToggleSidebarHiddenSelector);

  const handleClick = () => {
    //On mobile, hide sidebar when touching at content
    if (matches && !isSidebarHidden) {
      toggleSidebar();
    }
  };

  return (
    <div className={styles["home-page"]}>
      <Navbar />

      <div className={styles.content}>
        <Sidebar />
        <div
          onClick={handleClick}
          className={`${styles.container} ${!isSidebarHidden && styles.full}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default memo(HomePage);
