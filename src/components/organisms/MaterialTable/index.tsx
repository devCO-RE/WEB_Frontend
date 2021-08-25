import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, Link, Button } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Title } from "../../atoms";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  isApprove: string,
  amount: number
) {
  return { id, date, name, shipTo, isApprove, amount };
}

const rows = [
  createData(0, "16 Mar, 2019", "Elvis Presley", "https://everytime.com", "no", 312.44),
  createData(1, "16 Mar, 2019", "Paul McCartney", "https://google.com", "yes", 866.99),
  createData(2, "16 Mar, 2019", "Tom Scholz", "https://everytime.com", "yes", 100.81),
  createData(3, "16 Mar, 2019", "Michael Jackson", "https://testtest.com", "no", 654.39),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "https://platform.com",
    "yes",
    212.79
  ),
];

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function MaterialTable(props: any) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Received Reports</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Sender</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>is Approve</TableCell>
            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.isApprove}</TableCell>
              <TableCell align="right">
                {row.isApprove === "no" ? (
                  <Button variant="outlined" color="primary">
                    Approve
                  </Button>
                ) : (
                  <Button variant="outlined" color="secondary">
                    get file!
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
