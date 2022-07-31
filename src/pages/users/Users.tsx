import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { userRows } from "../../util/dummyData";
import styles from "./users.module.scss";
interface IUsers {}

export const userColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    minWidth: 180,
    flex: 1,
    renderCell: (params) => {
      return (
        <div className={styles["cell-with-img"]}>
          <img
            className={styles["cell-img"]}
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 180,
    flex: 1,
  },

  {
    field: "age",
    headerName: "Age",
    minWidth: 90,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 90,
    flex: 1,
    renderCell: ({ row }) => {
      const capitalizeStatus =
        row.status[0].toUpperCase() + row.status.substring(1);
      return (
        <div className={`${styles["cell-with-status"]} ${styles[row.status]}`}>
          {capitalizeStatus}
        </div>
      );
    },
  },
];

const Users = ({}: IUsers) => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn: GridColDef[] = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles["cell-acton"]}>
            <Link to={`/users/${params.row.id}`}>
              <div className={styles["view-button"]}>View</div>
            </Link>
            <div
              className={styles["delete-button"]}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.users}>
      <div className={styles.title}>
        Add New User
        <Link to="/users/new" className={styles.link}>
          Add New
        </Link>
      </div>
      <DataGrid
        autoHeight
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
        className={styles.table}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Users;
