import { Dashboard, Person } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { ReactNode, useEffect } from "react";
import { NavLink } from "react-router-dom";
import appStore, { AppState } from "../../appState";
import styles from "./sidebar.module.scss";
interface ISidebar {}

//memoization
const isSidebarHiddenSelector = (state: AppState) => state.isSidebarHidden;
const setSidebarHiddenSelector = (state: AppState) => state.setIsSideBarHidden;

const Sidebar = ({}: ISidebar) => {
  const matches = useMediaQuery("(max-width: 1400px)");
  const isSidebarHidden = appStore(isSidebarHiddenSelector);
  const setSidebarHidden = appStore(setSidebarHiddenSelector);

  useEffect(() => {
    setSidebarHidden(matches);
  }, [matches]);

  return (
    <nav className={clsx(styles.sidebar, isSidebarHidden && styles.show)}>
      <div className={styles.center}>
        <SidebarItem title="MAIN">
          <SubItem
            to="/"
            svgIcon={<Dashboard color="inherit" />}
            title="Dashboard"
          />
        </SidebarItem>
        <SidebarItem title="LIST">
          <SubItem to="users" svgIcon={<Person />} title="Users" />
          {/* <SubItem svgIcon={<Store />} title="Products" />
          <SubItem svgIcon={<CreditCard />} title="Orders" />
          <SubItem svgIcon={<LocalShipping />} title="Delivery" /> */}
        </SidebarItem>
        {/* <SidebarItem title="USEFUL">
          <SubItem svgIcon={<InsertChart />} title="Stats" />
          <SubItem svgIcon={<NotificationsNone />} title="Notifications" />
        </SidebarItem>
        <SidebarItem title="SERVICE">
          <SubItem svgIcon={<SettingsSystemDaydream />} title="System" />
          <SubItem svgIcon={<PsychologyOutlined />} title="Logs" />
          <SubItem svgIcon={<SettingsApplications />} title="Settings" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem>
        <SidebarItem title="USER">
          <SubItem svgIcon={<AccountCircle />} title="Profile" />
          <SubItem svgIcon={<ExitToApp />} title="Logout" />
        </SidebarItem> */}
      </div>
      {/* <div className={styles.bottom}>
        <div className={styles.themetitel}>THEME</div>
        <div className={styles["theme-wrapper"]}>
          <div className={styles["theme-item"]}></div>
          <div className={styles["theme-item"]}></div>
        </div>
      </div> */}
    </nav>
  );
};

export default Sidebar;

const SidebarItem = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles["sidebar-item"]}>
      <div className={styles.header}>{title}</div>
      <ul>{children}</ul>
    </div>
  );
};

interface ISubItem {
  title: string;
  svgIcon: ReactNode;
  to: string;
}
const SubItem = ({ svgIcon, title, to }: ISubItem) => {
  return (
    <li>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "#4154f1",
                backgroundColor: "#f6f9ff",
              }
            : { color: "#012970", backgroundColor: "inherit" }
        }
        className={styles["sub-item"]}
        to={to}
      >
        {svgIcon}
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
