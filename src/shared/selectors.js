import { createSelector } from 'reselect'

export const getResolvedObjections = state => state.getIn(['opportunity', 'data', 'resolvedObjections'])

const getSettingStages = state => state.getIn(['settings', 'stages'])

export const getStageId = (state, props) =>
  props.stageId || (props.match && props.match.params.stageId)

export const getSettings = state => state.get('settings')

export const getCreatedOpportunityId = state =>
  state.getIn(['allOppDash', 'createdOpportunityId'])

export const getOpportunitiesList = state =>
  state.getIn(['allOppDash', 'opportunitiesList'])

export const getOpportunityData = state => state.getIn(['opportunity', 'data'])

const getAllOpportunityStages = state =>
  state.getIn(['opportunity', 'data', 'stages'])

export const getCurrentStageSettings = createSelector(
  [getSettingStages, getStageId],
  (stages, stageId) => {
    return stages.find(stage => stage.get('stageId') === stageId)
  }
)

export const getOpportunityStage = createSelector(
  [getStageId, getOpportunityData],
  (stageId, opportunity) => {
    if (opportunity && opportunity.get('stages')) {
      return opportunity.get('stages').find(stage => {
        return stage.get('stageId') === stageId
      })
    } else {
      return undefined
    }
  }
)

export const getMaxPossibleStageScore = createSelector(
  [getCurrentStageSettings],
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

export const getAllStageTotalScore = createSelector(
  [getSettingStages],
  stages => {
    return stages.reduce((accumulator, stage) => {
      return (
        accumulator + (parseInt(stage.get('score').get('totalScore')) || 0)
      )
    }, 0)
  }
)

export const getAllCurrentStageScore = createSelector(
  [getAllOpportunityStages],
  stages => {
    return stages.reduce((accumulator, stage) => {
      return accumulator + parseInt(stage.get('score'))
    }, 0)
  }
)

export const getGoalsAndPainPoints = createSelector(
  [getSettingStages, getAllOpportunityStages],
  (settingsStages, opportunityStages) => {
    const goalsAndPainPoints = {
      goals: [],
      painPoints: []
    }
    opportunityStages.forEach((stage, stageIndex) => {
      stage.get('sections').forEach((section, sectionIndex) => {
        let arrayName
        if (
          settingsStages.getIn([stageIndex, 'sections', sectionIndex, 'isGoal'])
        ) {
          arrayName = 'goals'
        } else if (
          settingsStages.getIn([
            stageIndex,
            'sections',
            sectionIndex,
            'isPainPoint'
          ])
        ) {
          arrayName = 'painPoints'
        }
        if (arrayName) {
          section.get('questions').forEach(question => {
            goalsAndPainPoints[arrayName].push(
              `${question.getIn(['userInput', 'value'])} [${question.getIn([
                'userInput',
                'points'
              ])}pts]\n${question.get('comment') || ''}`
            )
          })
        }
      })
    })
    return goalsAndPainPoints
  }
)

export const getObjectionsInfo = createSelector(
  [getSettingStages, getAllOpportunityStages],
  (settingsStages, opportunityStages) => {
    const objectionsInfo = {
      objections: []
    }
    opportunityStages.forEach((stage, stageIndex) => {
      stage.get('sections').forEach((section, sectionIndex) => {
        let arrayName
        if (
          settingsStages.getIn([
            stageIndex,
            'sections',
            sectionIndex,
            'isObjection'
          ])
        ) {
          arrayName = 'objections'
        }
        const sectionId = settingsStages.getIn([stageIndex, 'sections', sectionIndex, 'sectionId'])
        if (arrayName) {
          section.get('questions').forEach((question, questionIndex) => {
            objectionsInfo[arrayName].push({
              stageId: stage.get('stageId'),
              sectionId,
              questionIndex,
              text: `${question.getIn(['userInput', 'value'])} [${question.getIn(['userInput', 'points'])}pts]\n${question.get('comment') || ''}`,
              points: question.getIn(['userInput', 'points'])
            }
            )
          })
        }
      })
    })
    return objectionsInfo
  }
)

export const getResolvedObjectionsScore = createSelector(
  [getResolvedObjections],
  (resolvedObjections) => {
    return resolvedObjections.reduce((accumulator, objection) => {
      return accumulator + objection.get('questionPoints')
    }, 0)
  }
)
