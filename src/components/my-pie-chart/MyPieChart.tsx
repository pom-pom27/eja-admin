import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { pieData } from "../../util/dummyData";
import styles from "./my-pie-chart.module.scss";
interface IMyPieChart {}

const MyPieChart = ({}: IMyPieChart) => {
  return (
    <div className={styles["my-pie-chart"]}>
      <ResponsiveContainer width={"91%"}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            fill="#82ca9d"
            label
          >
            {pieData.map((entry, index: number) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPieChart;
