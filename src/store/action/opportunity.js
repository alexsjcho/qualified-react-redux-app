import { loadOpportunity, saveStage, writeObjectionResolvedToggle } from '../../shared/utils'

export const ACTION_TYPES = {
  SET_OPPORTUNITY: 'SET_OPPORTUNITY',
  SET_OPPORTUNITY_STAGE: 'SET_OPPORTUNITY_STAGE',
  SET_OPPORTUNITY_STAGE_IS_SAVING: 'SET_OPPORTUNITY_STAGE_IS_SAVING',
  SET_OPPORTUNITY_OBJECTION_RESOLVED: 'SET_OPPORTUNITY_OBJECTION_RESOLVED'
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

function setOpportunityStageIsSaving () {
  return {
    type: ACTION_TYPES.SET_OPPORTUNITY_STAGE_IS_SAVING
  }
}

export function saveOpportunityStage (opportunityId, stage) {
  return dispatch => {
    dispatch(setOpportunityStageIsSaving())
    saveStage(opportunityId, stage)
    setTimeout(() => dispatch(setOpportunityStage(stage)), 1000)
  }
}

function setOpportunityObjectionResolved (objection) {
  return {
    type: ACTION_TYPES.SET_OPPORTUNITY_OBJECTION_RESOLVED,
    payload: {
      objection
    }
  }
}

export function toggleOpportunityObjectionResolved (objection, opportunityId) {
  return dispatch => {
    writeObjectionResolvedToggle(objection, opportunityId)
    dispatch(setOpportunityObjectionResolved(objection))
  }
}
