import MyAreaChart from "../../components/area-chart/MyAreaChart";
import BasicTable from "../../components/basic-table/BasicTable";
import Card, {
  blueIcon,
  greenIcon,
  orangeIcon,
} from "../../components/card/Card";
import MyPieChart from "../../components/my-pie-chart/MyPieChart";
import MyRadarChart from "../../components/my-radar-chart/MyRadarChart";
import News from "../../components/news/News";
import Tables from "../../components/tables/Tables";
import Timelines from "../../components/timelines/Timelines";

import styles from "./dashboard.module.scss";
interface IDashboard {}

const Dashboard = ({}: IDashboard) => {
  return (
    <main className={styles.dashboard}>
      <div className={styles.left}>
        <div className={styles.widgets}>
          <Card value="145" title="Sales" iconColor={blueIcon} />
          <Card value="$3,264" title="Revenue" iconColor={greenIcon} />
          <Card value="1244" title="Costumer" iconColor={orangeIcon} />
        </div>
        <Card isStretch={false} title="Reports">
          <MyAreaChart />
        </Card>
        <Card isStretch={false} title="Recent Sales">
          <Tables />
        </Card>
        <Card isStretch={false} title="Top Selling" time="This Month">
          <BasicTable />
        </Card>
      </div>
      <div className={styles.right}>
        <Card title="Recent Activity" children={<Timelines />} />
        <Card title="Budget Report">
          <MyRadarChart />
        </Card>
        <Card title="Website Traffic">
          <MyPieChart />
        </Card>
        <Card title="News & Updates">
          <News />
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
