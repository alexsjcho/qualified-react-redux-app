export const ACTION_TYPES = {
  SUBMIT_STAGE: "SUBMIT_STAGE",
  UPDATE_STAGE_SCORE: "UPDATE_STAGE_SCORE"
};

export function submitStage(stage) {
  return {
    type: ACTION_TYPES.SUBMIT_STAGE,
    payload: {
      stage
    }
  };
}

export function updateStageScore(stageId, totalScore) {
  return {
    type: ACTION_TYPES.UPDATE_STAGE_SCORE,
    payload: {
      stageId,
      totalScore
    }
  };
}
