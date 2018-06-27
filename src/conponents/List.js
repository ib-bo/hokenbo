import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button } from '@material-ui/core';
import ListCard from './ListCard';
import {PullToRefresh} from "react-js-pull-to-refresh";
import {PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";

const styles = {
  scrollArea: {
    height:'70vh',
    flexWrap: 'nowrap',
    flex: 1,
    overflow: 'scroll',
  },
  title: {
    fontSize: 14,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginLeft: 16,
  },
  btn: {
    marginTop: 8,
    marginBottom: 8,
    flexWrap: 'nowrap',
    flex: 1,
  },
};

function List(props) {
  const { classes } = props;

  return (
          
    <div className={classes.scrollArea}>保険
          <ListCard />
          <Button
            className={classes.btn}
          >
            リストを追加する
          </Button>  
    </div>
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);