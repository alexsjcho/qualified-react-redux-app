import { fromJS } from 'immutable'
import ACTION_TYPES from '../../action/settings'

let reducer = {}

reducer[ACTION_TYPES.SUBMIT_STAGE] = (state, { stage }) => {
  const stageIndex = state.get('stages').findIndex(currStage => currStage.get('stageId') === stage.stageId)
  return state.setIn(['stages', stageIndex], fromJS(stage))
}

export default reducer
