import {
  insertOpportunity,
  getAllOpportunities,
  removeOpportunity
} from '../../shared/utils'

export const ACTION_TYPES = {
  CREATE_OPPORTUNITY: 'CREATE_OPPORTUNITY',
  LOAD_ALL_OPPORTUNITIES: 'LOAD_ALL_OPPORTUNITIES',
  DELETE_OPPORTUNITY: 'DELETE_OPPORTUNITY'
}

export function createOpportunity (initialOpportunityValues) {
  const opportunityId = insertOpportunity({
    ...initialOpportunityValues,
    currentStage: 'qualification',
    stages: [],
    resolvedObjections: []
  })

  return {
    type: ACTION_TYPES.CREATE_OPPORTUNITY,
    payload: {
      opportunityId
    }
  }
}

export function loadAllOpportunities () {
  const allOpportunities = getAllOpportunities()

  return {
    type: ACTION_TYPES.LOAD_ALL_OPPORTUNITIES,
    payload: {
      allOpportunities
    }
  }
}

function deleteOpportunityFromState (opportunityId) {
  return {
    type: ACTION_TYPES.DELETE_OPPORTUNITY,
    payload: {
      opportunityId
    }
  }
}

export function deleteOpportunity (opportunityId) {
  return dispatch => {
    if (removeOpportunity(opportunityId)) {
      dispatch(deleteOpportunityFromState(opportunityId))
    } else {
      console.error(new Error('Failed to delete opportunity with id: ' + opportunityId))
    }
  }
}
