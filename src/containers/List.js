import React from 'react'
import { connect } from 'react-redux'
import { addData } from 'redux'
import List from '../components/List'

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addData: bindActionCreators(addData, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)