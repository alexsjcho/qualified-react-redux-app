import { fromJS } from 'immutable'
import { ACTION_TYPES } from '../../action/opportunity'

let reducer = {}

reducer[ACTION_TYPES.SET_OPPORTUNITY] = (state, { opportunity }) => {
  return state.set('data', fromJS(opportunity))
}

reducer[ACTION_TYPES.SET_OPPORTUNITY_STAGE_IS_SAVING] = (state) => {
  return state.set('isSavingStage', true)
}

reducer[ACTION_TYPES.SET_OPPORTUNITY_STAGE] = (state, { stage }) => {
  const stages = state.getIn(['data', 'stages'])
  const stageIndex = stages.findIndex(currStage => currStage.get('stageId') === stage.stageId)
  if (stageIndex === -1) {
    // insert a new stage
    let newStages = stages.push(fromJS(stage))
    return state.withMutations(state => {
      state.setIn(['data', 'stages'], newStages)
      state.set('isSavingStage', false)
      state.setIn(['data', 'currentStage'], stage.stageId)
    })
  } else {
    return state.withMutations(state => {
      state.setIn(['data', 'stages', stageIndex], fromJS(stage)) // updates an existing stage
      state.set('isSavingStage', false)
      state.setIn(['data', 'currentStage'], stage.stageId)
    })
  }
}

reducer[ACTION_TYPES.SET_OPPORTUNITY_OBJECTION_RESOLVED] = (state, { objection }) => {
  const resolvedObjections = state.getIn(['data', 'resolvedObjections'])
  const objectionIndex = resolvedObjections.findIndex(currObjection => {
    return currObjection.get('stageId') === objection.stageId
        && currObjection.get('sectionId') === objection.sectionId
        && currObjection.get('questionIndex') === objection.questionIndex
  })
  if (objectionIndex === -1) {
    // We're gonna add it there
    const newResolvedObjections = resolvedObjections.push(fromJS(objection))
    return state.setIn(['data', 'resolvedObjections'], newResolvedObjections)
  } else {
    // We're gonna take it out
    // Normal JS equivalent of the path = state.data.resolvedObjection[objectionIndex]
    return state.deleteIn(['data', 'resolvedObjections', objectionIndex])
  }
}

export default reducer
