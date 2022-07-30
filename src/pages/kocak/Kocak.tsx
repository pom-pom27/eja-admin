import { useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { LineChart } from "recharts";
import Card, {
  blueIcon,
  greenIcon,
  orangeIcon,
} from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./kocak.module.scss";
interface IKocak {}

const Kocak = ({}: IKocak) => {
  const matches = useMediaQuery("(max-width: 1400px)");
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  useEffect(() => {
    setIsSidebarHidden(matches);
  }, [matches]);

  const handleSidebar = () =>
    setIsSidebarHidden((isSidebarHidden) => !isSidebarHidden);
  return (
    <div className={styles.kocak}>
      Kocak Web
      <Navbar onClick={handleSidebar} />
      <Sidebar isSidebarHidden={isSidebarHidden} />
      <main
        className={clsx(
          styles["home-container"],
          isSidebarHidden && styles["full-width"]
        )}
      >
        <div className={styles.left}>
          <div className={styles.widgets}>
            <Card value="145" title="Sales" iconColor={blueIcon} />
            <Card value="$3,264" title="Revenue" iconColor={greenIcon} />
            <Card value="1244" title="Costumer" iconColor={orangeIcon} />
          </div>
          <Card title="Reports">
            <LineChart />
          </Card>
          <Card title="Recent Sales" />
          <Card title="Top Selling" />
        </div>
        <div className={styles.right}>
          <Card
            title="Recent Activity"
            children={<div style={{ height: "300px" }}></div>}
          />
          <Card title="Bug Report" />
          <Card title="Website Traffic" />
          <Card title="News & Updates" />
        </div>
      </main>
    </div>
  );
};

export default Kocak;
