import { insertOpportunity, getAllOpportunities } from "../../shared/utils";

export const ACTION_TYPES = {
  CREATE_OPPORTUNITY: "CREATE_OPPORTUNITY",
  LOAD_ALL_OPPORTUNITIES: "LOAD_ALL_OPPORTUNITIES"
};

export function createOpportunity(initialOpportunityValues) {
  const opportunityId = insertOpportunity({
    ...initialOpportunityValues,
    currentStage: "Qualification"
  });

  return {
    type: ACTION_TYPES.CREATE_OPPORTUNITY,
    payload: {
      opportunityId
    }
  };
}

export function loadAllOpportunities() {
  const allOpportunities = getAllOpportunities();

  return {
    type: ACTION_TYPES.LOAD_ALL_OPPORTUNITIES,
    payload: {
      allOpportunities
    }
  };
}
