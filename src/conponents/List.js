import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';

const styles = {
  card: {
    marginTop: 16,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 16,
    flexWrap: 'nowrap',
    flex: 1,
    backgroundColor: '#998d8652',
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginLeft: 16,
  },
  miniCard: {
    marginTop: 8,
    marginBottom: 8,
    flexWrap: 'nowrap',
    flex: 1,
  },
};

function List(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
          生命保険
          <Card className={classes.miniCard}>
            <Typography className={classes.title} color="textSecondary">
              主な保証
            </Typography>
            <Typography component="p" className={classes.text}>
              万が一
            </Typography>
          </Card>
          <Card className={classes.miniCard}>
            <Typography className={classes.title} color="textSecondary">
              期間
            </Typography>
            <Typography component="p" className={classes.text}>
              2018/04~2020/03
            </Typography>
          </Card>
          <Card className={classes.miniCard}>
            <Typography className={classes.title} color="textSecondary">
              証券番号
            </Typography>
            <Typography component="p" className={classes.text}>
              1234567890
            </Typography>
          </Card>
          <Card className={classes.miniCard}>
            <Typography className={classes.title} color="textSecondary">
              会社名
            </Typography>
            <Typography component="p" className={classes.text}>
              井藤保険
            </Typography>
          </Card>
          <Card className={classes.miniCard}>
            <Typography className={classes.title} color="textSecondary">
              会社名
            </Typography>
            <Typography component="p" className={classes.text}>
              井藤保険
            </Typography>
          </Card>
          
      </CardContent>
    </Card>
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);