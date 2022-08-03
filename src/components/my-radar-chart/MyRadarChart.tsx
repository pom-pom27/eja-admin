import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { dataRadar } from "../../util/dummyData";
import styles from "./my-radar-chart.module.scss";
interface IMyRadarChart {}

const MyRadarChart = ({}: IMyRadarChart) => {
  return (
    <div className={styles["my-radar-chart"]}>
      <ResponsiveContainer width={"91%"}>
        <RadarChart outerRadius={90} data={dataRadar}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Allocated Budget"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Actual Spending"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyRadarChart;
