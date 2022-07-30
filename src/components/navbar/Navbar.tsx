import {
  ArrowDropDownRounded,
  ChatBubbleOutlineRounded,
  DarkModeOutlined,
  Menu,
  NotificationsNoneRounded,
  Search,
} from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import appStore from "../../appState";
import styles from "./navbar.module.scss";
interface INavbar {}

const Navbar = ({}: INavbar) => {
  const toggleSidebar = appStore((state) => state.toggleSidebar);

  return (
    <nav className={styles.navbar}>
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
        <button className={styles["search-icon"]}>
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
            src="https://mui.com//static/images/avatar/1.jpg"
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
