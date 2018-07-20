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
            let tempList = []
            state.list.map(d => {
                let temp = d.data.slice(0)
                temp.push(
                    {
                        name: '',
                        item: [
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
                    }
                )
                tempList.push(
                    {
                        id: d.id,
                        name: d.name,
                        data: temp
                    }
                )
            })
            console.log(tempList)
            console.log(state.list)
            return Object.assign(
                {},
                state,
                {
                    list: tempList
                }
            )
        default:
            return state
    }
}

export default bo