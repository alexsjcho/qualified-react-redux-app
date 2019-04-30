import React from "react";
import { FormGroup } from "reactstrap";
import Question from "../Question";
import { Badge } from "reactstrap";

export default class Section extends React.PureComponent {
  updateQuestion = (questionIndex, question, scoreDifference = 0) => {
    const { section, updateSection, sectionIndex } = this.props;
    const newSection = { ...section };
    const questions = newSection.question || [];
    newSection.questions = questions;
    newSection.questions[questionIndex] = question;
    updateSection(sectionIndex, newSection, scoreDifference);
  };

  getQuestionValue(index) {
    const { section } = this.props;
    const questions = section.questions || [];
    return questions[index] || {};
  }

  stageBadgeColorRender(settings) {
    if (settings.isPainPoint) {
      return "danger";
    } else if (settings.isGoal) {
      return "success";
    } else if (settings.isObjection) {
      return "warning";
    } else {
      return "dark";
    }
  }

  render() {
    const { settings, resolvedObjections, stageId } = this.props;

    return (
      <FormGroup>
        <h3 className="text-center" style={{ marginTop: "2rem" }}>
          <Badge color={this.stageBadgeColorRender(settings)}>
            {settings.label}
          </Badge>
        </h3>

        {settings.questions.map((questionSettings, index) => {
          return (
            <Question
              settings={questionSettings}
              question={this.getQuestionValue(index)}
              index={index}
              sectionId={settings.sectionId}
              key={`${settings.sectionId}-question-${index}`}
              updateQuestion={this.updateQuestion}
              resolvedObjections={resolvedObjections}
              isObjection={settings.isObjection}
              stageId={stageId}
            />
          );
        })}
      </FormGroup>
    );
  }
}
