import { insertOpportunity, loadOpportunity } from '../../shared/utils'

export const ACTION_TYPES = {
  SET_OPPORTUNITY: 'SET_OPPORTUNITY'
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
