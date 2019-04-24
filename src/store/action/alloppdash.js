import {
  insertOpportunity,
  getAllOpportunities
  // removeOpportunity
} from "../../shared/utils";

export const ACTION_TYPES = {
  CREATE_OPPORTUNITY: "CREATE_OPPORTUNITY",
  LOAD_ALL_OPPORTUNITIES: "LOAD_ALL_OPPORTUNITIES",
  DELETE_OPPORTUNITY: "DELETE_OPPORTUNITY"
};

export function createOpportunity(initialOpportunityValues) {
  const opportunityId = insertOpportunity({
    ...initialOpportunityValues,
    currentStage: "qualification"
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

  // export function deleteOpportunity() {
  //   const remainingOpportunities = removeOpportunity();

  //   return {
  //     type: ACTION_TYPES.DELETE_OPPORTUNITY,
  //     payload: {
  //       remainingOpportunities
  //     }
  //   };
}
