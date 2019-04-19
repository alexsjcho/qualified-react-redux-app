//Create const actions, types

export const ACTION_TYPES = {
    SET_LABEL_TEXT = " SET_LABEL_TEXT",
    SET_QUESTION_TEXT = "SET_QUESTION_TEXT",
    SET_PERSONAS = "SET_PERSONAS",
    SET_COMMENT = " SET_COMMENT"

  }


export function setLabelText(params) {
    return {
        type: ACTION_TYPES.SET_LABEL_TEXT
    }
}


export function setQuestionText(params) {
    return {
        type: ACTION_TYPES.SET_QUESTION_TEXT
    }
}

export function setPersonas(params) {
    return {
        type: ACTION_TYPES.SET_PERSONAS
    }
}

export function setComment(params) {
    return {
        type: ACTION_TYPES.SET_COMMENT
    }
}