import { insertOpportunity } from '../../shared/utils'

export const ACTION_TYPES = {
  CREATE_OPPORTUNITY: 'CREATE_OPPORTUNITY'
}

export function createOpportunity (initialOpportunityValues) {
  const opportunityId = insertOpportunity(initialOpportunityValues)

  return {
    type: ACTION_TYPES.CREATE_OPPORTUNITY,
    payload: {
      opportunityId
    }
  }
}
