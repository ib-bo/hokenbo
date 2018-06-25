import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button } from '@material-ui/core';
import ListCard from './ListCard';
import {PullToRefresh} from "react-js-pull-to-refresh";
import {PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";

const styles = {
  card: {
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8,
    marginBottom:'100vh',
    maxHeight:'70vh',
    flexWrap: 'nowrap',
    flex: 1,
    overflow: 'scroll',
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
    <Card className={classes.card}>
    <PullToRefresh
  pullDownContent={<PullDownContent />}
  releaseContent={<ReleaseContent />}
  refreshContent={<RefreshContent />}
  pullDownThreshold={200}
>
      <CardContent>
          保険
          <ListCard className={classes.miniCard}/>
          <Button
            className={classes.btn}
          >
            リストを追加する
          </Button>  
          
      </CardContent>
      </PullToRefresh>
    </Card>
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);