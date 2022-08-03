import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { topSellingData } from "../../util/dummyData";
import styles from "./basic-table.module.scss";
interface IBasicTable {}

const BasicTable = ({}: IBasicTable) => {
  return (
    <div className={styles["basic-table"]}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 400,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={styles.cell}>Preview</TableCell>
              <TableCell className={styles.cell}>Product</TableCell>
              <TableCell className={styles.cell}>Price</TableCell>
              <TableCell className={styles.cell}>Sold</TableCell>
              <TableCell className={styles.cell}>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topSellingData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.img} alt="product" />
                </TableCell>
                <TableCell className={styles.cell} component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell className={styles.cell}>{row.amount}</TableCell>
                <TableCell className={styles.cell}>{row.sold}</TableCell>
                <TableCell className={styles.cell}>{row.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
