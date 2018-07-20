import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  } from '../actions/index'
import Bo from '../components/index'

const mapStateToProps = (state, props) => {
    return {
        list: state.bo.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bo)