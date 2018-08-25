import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab, Typography, IconButton } from '@material-ui/core';
import { DesktopWindows, Smartphone } from '@material-ui/icons';
import DataTable from '../containers/Table'
import DataList from '../containers/List';
import Header from '../components/Header';

import '../Bo.css';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 4 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    marginTop: 110,
  },
  tableButton: {
    float: 'right'
  },
  tabsRoot: {
  },
  tabsIndicator: {
    backgroundColor: 'white',
  },
  tabRoot: {
    backgroundColor: '#000000cf',
    opacity: 1,
    margin: 0,
    color: 'white',
  },
  tabSelected: {
    color: '#000000cf',
    backgroundColor: 'white',
  },
});

class Bo extends Component {
  constructor(props) {
    super(props)
    this.classes = props.classes
    this.state = {
      value: 0,
      tableFlg: false
    }
  }

  /**
   * タブ変更時の処理
   * @param event
   * @param value
   */
  handleChange = (event, value) => {
    this.setState({ value });
  };

  /**
   * スワイプ時の処理
   * @param index
   */
  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  /**
   * テーブルフラグボタンを押下した時の処理
   */
  changeTableFlg() {
    this.setState({ tableFlg: !this.state.tableFlg });
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        {/* ヘッダー */}
        <div class='header'>
          {/* ヘッダー */}
          <Header />
          {/* タブ */}
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              scrollable
              classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            >
              {this.props.list.map(d => {
                return (
                  <Tab
                    label={d.name}
                    classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                    disableRipple
                  />
                )
              })}
            </Tabs>
          </AppBar>
          {/* テーブルボタン */}
          <IconButton
            className={classes.tableButton}
            onClick={() => this.changeTableFlg()}
            color="default"
          >
            {this.state.tableFlg ?
              <Smartphone />
              :
              <DesktopWindows />
            }
          </IconButton>
        </div>

        {/* リストエリア */}
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
          className={classes.root}
        >
          {this.props.list.map(d => {
            return (
              <TabContainer dir={theme.direction}>
                {this.state.tableFlg ?
                  <DataTable
                    id={d.id}
                    dataList={d.data}
                  />
                  :
                  <DataList
                    dataList={d.data}
                    id={d.id}
                  />
                }
              </TabContainer>
            )
          })}
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Bo);

