import * as CONST from '../utils/ActionTypes'

/**
 * dataの追加
 */
export const addData = (id) => {
  return {
    type: CONST.ADD_DATA,
    payload: id
  }
}