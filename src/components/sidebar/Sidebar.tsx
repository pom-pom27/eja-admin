import {
  AccountCircle,
  CreditCard,
  Dashboard,
  ExitToApp,
  InsertChart,
  LocalShipping,
  NotificationsNone,
  Person,
  PsychologyOutlined,
  SettingsApplications,
  SettingsSystemDaydream,
  Store,
} from "@mui/icons-material";
import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./sidebar.module.scss";
interface ISidebar {
  isSidebarHidden: boolean;
}

const Sidebar = ({ isSidebarHidden }: ISidebar) => {
  return (
    <nav className={clsx(styles.sidebar, isSidebarHidden && styles.show)}>
      <div className={styles.center}>
        <SidebarItem title="MAIN">
          <SubItem svgIcon={<Dashboard />} title="Dashboard" />
        </SidebarItem>
        <SidebarItem title="LIST">
          <SubItem svgIcon={<Person />} title="Users" />
          <SubItem svgIcon={<Store />} title="Products" />
          <SubItem svgIcon={<CreditCard />} title="Orders" />
          <SubItem svgIcon={<LocalShipping />} title="Delivery" />
        </SidebarItem>
        <SidebarItem title="USEFUL">
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
        </SidebarItem>
      </div>
      <div className={styles.bottom}>
        <div className={styles.themetitel}>THEME</div>
        <div className={styles["theme-wrapper"]}>
          <div className={styles["theme-item"]}></div>
          <div className={styles["theme-item"]}></div>
        </div>
      </div>
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
const SubItem = ({ svgIcon, title }: { svgIcon: ReactNode; title: string }) => {
  return (
    <li className={styles["sub-item"]}>
      {svgIcon}
      <span>{title}</span>
    </li>
  );
};
