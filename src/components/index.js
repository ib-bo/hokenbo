import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';

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
});

class Bo extends Component {
    constructor(props) {
            super(props)
            this.classes = props.classes
            this.state = {
                value: 0
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

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                {/* ヘッダー */}
                <div class='header'>
                    <Header />
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                            scrollable
                        >
                            {this.props.list.map(d => {
                                return (
                                    <Tab label={d.name} />
                                )
                            })}
                        </Tabs>
                    </AppBar>
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
                                <DataList
                                    dataList={d.data}
                                />
                            </TabContainer>
                        )
                    })}
                </SwipeableViews>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Bo);

