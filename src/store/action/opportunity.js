import { insertOpportunity } from "../../shared/utils";

export const ACTION_TYPES = {
  CREATE_OPPORTUNITY: "CREATE_OPPORTUNITY",
  SET_OPPORTUNITY: "SET_OPPORTUNITY"
};

export function setOpportunity(opportunity) {
  return {
    type: ACTION_TYPES.SET_OPPORTUNITY,
    payload: {
      opportunity
    }
  };
}

export function createOpportunity(initialOpportunityValues) {
  const opportunityId = insertOpportunity(initialOpportunityValues);

  return {
    type: ACTION_TYPES.CREATE_OPPORTUNITY,
    payload: {
      opportunityId
    }
  };
}

export function loadOpportunity(opportunityId) {
  return dispatch => {
    const opportunity = loadOpportunity(opportunityId);
    dispatch(setOpportunity(opportunity));
  };
}
