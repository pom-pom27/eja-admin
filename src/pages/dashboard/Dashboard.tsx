import MyAreaChart from "../../components/area-chart/MyAreaChart";
import Card, {
  blueIcon,
  greenIcon,
  orangeIcon,
} from "../../components/card/Card";
import MyRadarChart from "../../components/my-radar-chart/MyRadarChart";
import Tables from "../../components/tables/Tables";
import Timelines from "../../components/timelines/Timelines";

import styles from "./dashboard.module.scss";
interface IDashboard {}

const Dashboard = ({}: IDashboard) => {
  return (
    <main className={styles["dashboard"]}>
      <div className={styles.left}>
        <div className={styles.widgets}>
          <Card value="145" title="Sales" iconColor={blueIcon} />
          <Card value="$3,264" title="Revenue" iconColor={greenIcon} />
          <Card value="1244" title="Costumer" iconColor={orangeIcon} />
        </div>
        <Card title="Reports">
          <MyAreaChart />
        </Card>
        <Card title="Recent Sales">
          <Tables />
        </Card>
        <Card title="Top Selling" />
      </div>
      <div className={styles.right}>
        <Card title="Recent Activity" children={<Timelines />} />
        <Card title="Budget Report">
          <MyRadarChart />
        </Card>
        <Card title="Website Traffic" />
        <Card title="News & Updates" />
      </div>
    </main>
  );
};

export default Dashboard;
