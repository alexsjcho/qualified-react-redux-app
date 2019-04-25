import { loadOpportunity, saveStage } from '../../shared/utils'

export const ACTION_TYPES = {
  SET_OPPORTUNITY: 'SET_OPPORTUNITY',
  SET_OPPORTUNITY_STAGE: 'SET_OPPORTUNITY_STAGE'
}

export function setOpportunity (opportunity) {
  return {
    type: ACTION_TYPES.SET_OPPORTUNITY,
    payload: {
      opportunity
    }
  }
}

export function loadOpportunityData (opportunityId) {
  return dispatch => {
    const opportunity = loadOpportunity(opportunityId)
    dispatch(setOpportunity(opportunity))
  }
}

function setOpportunityStage (stage) {
  return {
    type: ACTION_TYPES.SET_OPPORTUNITY_STAGE,
    payload: {
      stage
    }
  }
}

export function saveOpportunityStage (opportunityId, stage) {
  return dispatch => {
    saveStage(opportunityId, stage)
    dispatch(setOpportunityStage)
  }
}
