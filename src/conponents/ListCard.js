import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  List, 
  ListItem, 
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// スタイル
const styles = theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  list: {
    width: "100%",
  },
  title: {
    fontSize: 12,
    color: "gray",
    margin: 0,
    width: 80,
  },
  text: {
    fontSize: 16,
    margin: 0,
    marginLeft: 8,
  },
});

// テスト用データ
const data = [
  {
    id: 1,
    name: '第1保険',
    data: [
      {
        title: '主な保証',
        text: '万が一'
      }, 
      {
        title: '期間',
        text: '~2020/01/01'
      },
      {
        title: '会社名',
        text: 'IB'
      },
      {
        title: '種類',
        text: '火災'
      },
      {
        title: 'メモ',
        text: 'ああああああああああああああいいいいいいいいいいいいううううううううえええええ'
      }
    ]
  },
  {
    id: 2,
    name: '第2保険',
    data: [
      {
        title: '主な保証',
        text: '万が一'
      }, 
      {
        title: '期間',
        text: '~2020/01/01'
      },
      {
        title: '会社名',
        text: 'IB'
      },
      {
        title: '種類',
        text: '火災'
      },
      {
        title: 'メモ',
        text: 'ああああああああああああああいいいいいいいいいいいいううううううううえええええ'
      }
    ]
  },
  {
    id: 3,
    name: '第3保険',
    data: [
      {
        title: '主な保証',
        text: '万が一'
      }, 
      {
        title: '期間',
        text: '~2020/01/01'
      },
      {
        title: '会社名',
        text: 'IB'
      },
      {
        title: '種類',
        text: '火災'
      },
      {
        title: 'メモ',
        text: 'ああああああああああああああいいいいいいいいいいいいううううううううえええええ'
      }
    ]
  },
]

function ListCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {data.map(d => {
        return (
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{d.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List
                dense
                disablePadding
                className={classes.list}
              >
                {d.data.map(data => {
                  return (
                    <ListItem
                      dense
                      disableGutters
                      divider
                    >
                      <p className={classes.title}>{data.title}</p>
                      <p className={classes.text}>{data.text}</p>
                    </ListItem>
                  );
                })}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
}

ListCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCard);