import * as CONST from '../utils/ActionTypes'
import * as DEMO from '../utils/demoData'

const initialState = {
    list: DEMO.list
}

function bo(state = initialState, action) {
    switch (action.type) {
        // -------------------------------------------------------------------------
        // データの追加
        // -------------------------------------------------------------------------
        case CONST.ADD_DATA:
            return Object.assign(
                {},
                state,
                {
                }
            )
        default:
            return state
    }
}

export default bo