import { createSelector } from 'reselect'

const getStages = state => state.get('settings').get('stages')
const getStageId = (state, props) => props.match.params.stageId

export const getSettings = state => state.get('settings')
export const getCurrentStage = createSelector(
  [getStages, getStageId],
  (stages, stageId) => {
    return stages.find(stage => stage.get('stageId') === stageId)
  }
)
