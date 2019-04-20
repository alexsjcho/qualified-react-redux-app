// Create const actions, types

export const ACTION_TYPES = {
  SUBMIT_STAGE: 'SUBMIT_STAGE'
}

export function submitStage (stage) {
  return {
    type: ACTION_TYPES.SUBMIT_STAGE,
    payload: {
      stage
    }
  }
}

