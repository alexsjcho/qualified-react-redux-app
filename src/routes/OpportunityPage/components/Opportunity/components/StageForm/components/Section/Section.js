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

  stageBadgeColorRender() {
    const { goalsAndPainPoints, objectionsInfo } = this.props;
    const isPainPointColor = goalsAndPainPoints.painPoints;
    const isGoalsColor = goalsAndPainPoints.goals;
    const isObjectionColors = objectionsInfo.objections;

    if (isPainPointColor) {
      return "danger";
    }
    if (isGoalsColor) {
      return "success";
    }

    if (isObjectionColors) {
      return "warning";
    } else {
      return "dark";
    }
  }

  render() {
    const { settings } = this.props;

    return (
      <FormGroup>
        <h3 className="text-center" style={{ marginTop: "2rem" }}>
          <Badge color="dark">{settings.label}</Badge>
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
            />
          );
        })}
      </FormGroup>
    );
  }
}
