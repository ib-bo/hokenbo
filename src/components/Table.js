import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class DataTable extends React.Component {
  constructor(props) {
    super(props)
    this.classes = props.classes
    this.state = {
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell></CustomTableCell>
              {this.props.dataList[1].item.map(data => {
                return (
                  <CustomTableCell numeric>{data.title}</CustomTableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.dataList.map((d, index) => {
              return (
                <TableRow className={classes.row} key={index}>
                  <CustomTableCell component="th" scope="row">
                    {d.name}
                  </CustomTableCell>
                  {d.item.map(data => {
                    return (
                      <CustomTableCell numeric>{data.text}</CustomTableCell>
                    )
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(DataTable);