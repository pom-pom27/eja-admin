import { useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import appStore, { AppState } from "../../appState";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home-page.module.scss";
interface IHomePage {}

const isSidebarHiddenSelector = (state: AppState) => state.isSidebarHidden;
const isToggleSidebarHiddenSelector = (state: AppState) => state.toggleSidebar;

const HomePage = ({}: IHomePage) => {
  const isSidebarHidden = appStore(isSidebarHiddenSelector);
  const toggleSidebar = appStore(isToggleSidebarHiddenSelector);
  const matches = useMediaQuery("(max-width: 1400px)");

  const handleClick = () => {
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

export default HomePage;
