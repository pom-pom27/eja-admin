import { memo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dataLineChart } from "../../util/dummyData";
import styles from "./line-chart.module.scss";

interface ILineChart {}
const MyAreaChart = ({}: ILineChart) => {
  return (
    <div className={styles["area-chart"]}>
      <ResponsiveContainer width={"98%"} height={"99%"}>
        <AreaChart data={dataLineChart}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4154F1" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#4154F1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2DCA69" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#2DCA69" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorCostumers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF771D" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#FF771D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#4154F1"
            fillOpacity={1}
            fill="url(#colorSales)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2DCA69"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="costumers"
            stroke="#FF771D"
            fillOpacity={1}
            fill="url(#colorCostumers)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(MyAreaChart);
