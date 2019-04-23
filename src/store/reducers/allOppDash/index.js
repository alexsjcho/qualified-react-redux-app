import { fromJS } from 'immutable'
import reducer from './reducer'

const initialState = fromJS({
  createdOpportunityId: undefined
})

export default function (state = initialState, action) {
  return reducer[action.type]
    ? reducer[action.type](state, action.payload)
    : state
}
