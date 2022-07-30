import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./line-chart.module.scss";

interface ILineChart {}

const data = [
  {
    name: "00:00",
    sales: 31,
    revenue: 11,
    costumers: 15,
  },
  {
    name: "00:10",
    sales: 40,
    revenue: 31,
    costumers: 11,
  },
  {
    name: "00:20",
    sales: 28,
    revenue: 45,
    costumers: 32,
  },
  {
    name: "00:30",
    sales: 51,
    revenue: 32,
    costumers: 18,
  },
  {
    name: "00:40",
    sales: 42,
    revenue: 34,
    costumers: 9,
  },
  {
    name: "00:50",
    sales: 82,
    revenue: 52,
    costumers: 25,
  },
  {
    name: "00:60",
    sales: 56,
    revenue: 41,
    costumers: 11,
  },
];

const LineChart = ({}: ILineChart) => {
  return (
    <div className={styles["line-chart"]}>
      <ResponsiveContainer>
        <AreaChart data={data}>
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

export default LineChart;
