import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addData } from '../actions/index'
import DataList from '../components/List'

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addData: bindActionCreators(addData, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DataList)