import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { currencyFormatter } from "../../components/tables/Tables";
import { dataSpending, tableRows } from "../../util/dummyData";
import styles from "./user.module.scss";
interface IUser {}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", minWidth: 90, flex: 1 },
  {
    field: "product",
    headerName: "Product",
    minWidth: 150,
    flex: 1,
  },
  {
    field: "amount",
    headerName: "Price",
    minWidth: 120,
    valueFormatter: ({ value }) => currencyFormatter.format(value),
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 100,
    cellClassName: ({ value }) => `${value}`,
  },
];

const User = ({}: IUser) => {
  let { userId } = useParams();

  return (
    <div className={styles.user}>
      <div className={styles.top}>
        <div className={styles.information}>
          <div className={styles.img}>
            <img
              src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg"
              alt="avatar"
            />
          </div>
          <div className={styles.data}>
            <div className={styles.name}>
              <span>Name:</span> jondoe@gmail.com
            </div>
            <div className={styles.name}>
              <span>Phone:</span> 089273722
            </div>
            <div className={styles.name}>
              <span>Address:</span> Jl. Ayam Raya No 3A
            </div>
            <div className={styles.name}>
              <span>Country:</span> Indonesia
            </div>
          </div>
        </div>
        <div className={styles.spending}>
          <h2>User Spending</h2>

          <ResponsiveContainer width="98%" height={400}>
            <AreaChart data={dataSpending}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4154F1" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#4154F1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <CartesianGrid strokeDasharray="4" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#4154F1"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>List Transactions</h2>
        <DataGrid
          className={styles.table}
          componentsProps={{
            pagination: {
              sx: {
                "& .MuiTablePagination-displayedRows": {
                  color: "#444444",
                  fontFamily: "Nunito",
                  fontSize: "initial",
                },
              },
            },
          }}
          rows={tableRows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default User;
