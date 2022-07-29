import { useMediaQuery } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Card, {
  blueIcon,
  greenIcon,
  orangeIcon,
} from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./home-page.module.scss";
interface IHomePage {}

const HomePage = ({}: IHomePage) => {
  const matches = useMediaQuery("(max-width: 1400px)");
  const [isSidebarShown, setIsSidebarShown] = useState(matches ? true : false);

  useEffect(() => {
    if (!matches) {
      setIsSidebarShown(false);
      console.log("mobile");

      return;
    }
    console.log("desktop");

    setIsSidebarShown(true);
  }, [matches]);

  console.log(isSidebarShown);

  const handleSidebar = () =>
    setIsSidebarShown((isSidebarHidden) => !isSidebarHidden);
  return (
    <div className={styles["home-page"]}>
      <Navbar onClick={handleSidebar} />
      <Sidebar isSidebarShown={isSidebarShown} />
      <main
        className={clsx(
          styles["home-container"],
          isSidebarShown && styles["full-width"]
        )}
      >
        <div className={styles.left}>
          <div className={styles.widgets}>
            <Card title="Sales" iconColor={blueIcon} />
            <Card title="Revenue" iconColor={greenIcon} />
            <Card title="Costumer" iconColor={orangeIcon} />
          </div>
          <Card title="Reports" />
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

export default HomePage;
