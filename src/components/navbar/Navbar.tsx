import {
  ArrowDropDownRounded,
  ChatBubbleOutlineRounded,
  DarkModeOutlined,
  Menu,
  NotificationsNoneRounded,
  Search,
} from "@mui/icons-material";
import { Avatar, Badge, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import appStore from "../../appState";
import styles from "./navbar.module.scss";
interface INavbar {}

const Navbar = ({}: INavbar) => {
  const matches = useMediaQuery("(max-width: 567px)");

  const [isSearchHidden, setSearchHidden] = useState(false);
  const toggleSidebar = appStore((state) => state.toggleSidebar);

  return (
    <nav className={styles.navbar}>
      {isSearchHidden && (
        <div className={styles["search-mobile-wrapper"]}>
          <form action="#" className={styles["search-mobile"]}>
            <input type="text" placeholder="Search" name="search" />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (matches) {
                  setSearchHidden((SearchHidden) => !SearchHidden);
                }
              }}
              className={styles["search-icon-mobile"]}
            >
              <Search fontSize="inherit" />
            </button>
          </form>
        </div>
      )}

      <div className={styles.logo}>
        <Link to={"/"}>
          <span className={styles["icon-logo"]}>EA</span>
          <span className={styles["text-logo"]}> Eja Admin</span>
        </Link>
        <div onClick={toggleSidebar} className={styles["collapse-button"]}>
          <Menu fontSize="inherit" />
        </div>
      </div>
      <form action="#" className={styles.search}>
        <input type="text" placeholder="Search" name="search" />
        <button
          onClick={(e) => {
            e.preventDefault();

            if (matches) {
              setSearchHidden((SearchHidden) => !SearchHidden);
            }
          }}
          className={styles["search-icon"]}
        >
          <Search fontSize="inherit" />
        </button>
      </form>
      <div className={styles.right}>
        <div className={`${styles["navbar-icon"]} ${styles.darkmode}`}>
          <DarkModeOutlined fontSize="inherit" />
        </div>
        <div className={styles["navbar-icon"]}>
          <NotificationsNoneRounded fontSize="inherit" />
          <Badge badgeContent={4} color="info" />
        </div>
        <div className={styles["navbar-icon"]}>
          <ChatBubbleOutlineRounded fontSize="inherit" />
          <Badge badgeContent={4} color="success" />
        </div>
        <div className={styles.profile}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.scdn.co/image/ab67706c0000bebb6e187466acef03892988f41b"
          />
          <div className={styles.name}>Selja Sampe Rante</div>

          <div className={styles.accordion}>
            <ArrowDropDownRounded fontSize="inherit" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
