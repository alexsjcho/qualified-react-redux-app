// import { fromJS } from "immutable";
import { ACTION_TYPES } from '../../action/alloppdash'

let reducer = {}

reducer[ACTION_TYPES.CREATE_OPPORTUNITY] = (state, { opportunityId }) => {
  return state.set('createdOpportunityId', opportunityId)
}

export default reducer
