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

export const getTotalScore = createSelector(
  [getCurrentStage],
  stage => {
    return stage.get('sections').reduce((accumulator, section) => {
      return (
        accumulator +
        section.get('questions').reduce((accumulator, question) => {
          if (
            question.get('type') === 'radio' ||
            question.get('type') === 'select'
          ) {
            return (
              accumulator +
              question.get('options').reduce((accumulator, option) => {
                return Math.max(accumulator, option.get('points'))
              }, 0)
            )
          } else {
            return accumulator
          }
        }, 0)
      )
    }, 0)
  }
)
