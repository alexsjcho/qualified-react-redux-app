import { fromJS } from 'immutable'
import { ACTION_TYPES } from '../../action/opportunity'

let reducer = {}

reducer[ACTION_TYPES.SET_OPPORTUNITY] = (state, { opportunity }) => {
  return state.set('data', fromJS(opportunity))
}

reducer[ACTION_TYPES.SET_OPPORTUNITY_STAGE] = (state, { stage }) => {
  const stages = state.getIn(['data', 'stages'])
  const stageIndex = stages.findIndex(currStage => currStage.get('stageId') === stage.stageId)
  if (stageIndex === -1) {
    // insert a new stage
    let newStages = stages.push(fromJS(stage))
    return state.setIn(['data', 'stages'], newStages)
  } else {
    return state.setIn(['data', 'stages', stageIndex], fromJS(stage)) // updates an existing stage
  }
}

export default reducer
