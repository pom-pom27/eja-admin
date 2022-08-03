import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { memo } from "react";
import { tableRows } from "../../util/dummyData";
import styles from "./tables.module.scss";
interface ITables {}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", minWidth: 90, flex: 1 },
  {
    field: "customer",
    headerName: "Costumer",
    minWidth: 150,
    flex: 1,
    cellClassName: "costumer",
  },
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

const Tables = ({}: ITables) => {
  return (
    <div className={styles.tables}>
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
  );
};

export default memo(Tables);
