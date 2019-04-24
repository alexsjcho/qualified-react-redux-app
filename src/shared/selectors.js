import { createSelector } from "reselect";

const getSettingStages = state => state.get("settings").get("stages");
const getStageId = (state, props) =>
  props.stageId || (props.match && props.match.params.stageId);

export const getSettings = state => state.get("settings");

export const getCreatedOpportunityId = state =>
  state.get("allOppDash").get("createdOpportunityId");

export const getOpportunitiesList = state =>
  state.get("allOppDash").get("opportunitiesList");

export const getCurrentStageSettings = createSelector(
  [getSettingStages, getStageId],
  (stages, stageId) => {
    return stages.find(stage => stage.get("stageId") === stageId);
  }
);

export const getMaxPossibleStageScore = createSelector(
  [getCurrentStageSettings],
  stage => {
    return stage.get("sections").reduce((accumulator, section) => {
      return (
        accumulator +
        section.get("questions").reduce((accumulator, question) => {
          if (
            question.get("type") === "radio" ||
            question.get("type") === "select"
          ) {
            return (
              accumulator +
              question.get("options").reduce((accumulator, option) => {
                return Math.max(accumulator, option.get("points"));
              }, 0)
            );
          } else {
            return accumulator;
          }
        }, 0)
      );
    }, 0);
  }
);

export const getAllStageTotalScore = createSelector(
  [getSettingStages],
  stages => {
    return stages.reduce((accumulator, stage) => {
      return (
        accumulator + (parseInt(stage.get("score").get("totalScore")) || 0)
      );
    }, 0);
  }
);
