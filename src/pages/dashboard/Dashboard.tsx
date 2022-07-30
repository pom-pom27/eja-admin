import Card, {
  blueIcon,
  greenIcon,
  orangeIcon,
} from "../../components/card/Card";
import LineChart from "../../components/line-chart/LineChart";
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
  );
};

export default Dashboard;
