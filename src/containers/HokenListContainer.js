import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {PullToRefresh} from "react-js-pull-to-refresh";
import {PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";

import * as actions from '../actions';

import List from '../conponents/List';
import Slick from '../conponents/Slick';
import Header from '../conponents/Header';

import '../HokenList.css';

class HokenListContainer extends Component {

  handleRefresh() {
    // do some async code here
    return(true)
  };

  render() {
    const { hokenList, actions } = this.props;

    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className="hokenList">
            <Slick config={hokenList.config} slides={hokenList.slides} list={<List handleRefresh={this.handleRefresh}/>}/>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  hokenList: state.hokenList,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(HokenListContainer);