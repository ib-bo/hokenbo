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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'stretch',
    overflow: 'hidden',
  },
  card: {
    marginTop: 16,
    flexWrap: 'nowrap',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function List(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {props.lists.map(n => {
        return(
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary">
                
              </Typography>
              <Typography component="p">
                
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">もっと見る</Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);