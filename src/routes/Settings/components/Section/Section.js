import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import Question from "../Question";

export default class Section extends React.PureComponent {
  updateQuestion = (questionIndex, question) => {
    const { section, updateSection, sectionIndex } = this.props;
    const newSection = { ...section };
    newSection.questions[questionIndex] = question;
    updateSection(sectionIndex, newSection);
  };

  setIsGoal = event => {
    const { updateSection, sectionIndex, section } = this.props
    const newSection = { ...section }
    newSection.isGoal = !section.isGoal
    updateSection(sectionIndex, newSection)
  };

  setIsPainPoint = event => {
    const { updateSection, sectionIndex, section } = this.props
    const newSection = { ...section }
    newSection.isPainPoint = !section.isPainPoint
    updateSection(sectionIndex, newSection)
  };

  render() {
    const { section } = this.props;

    return (
      <FormGroup>
        <h2>{section.label}</h2>
        <div>
          <Input
            onChange={this.setIsGoal}
            type="checkbox"
            name={`${section.sectionId}-is-goal`}
            id={`${section.sectionId}-is-goal`}
            checked={section.isGoal}
          />
          <Label for={`${section.sectionId}-is-goal`}>Does this section refer to goals?</Label>
        </div>
        <div>
          <Input
            onChange={this.setIsPainPoint}
            type="checkbox"
            name={`${section.sectionId}-is-pain-point`}
            id={`${section.sectionId}-is-pain-point`}
            checked={section.isPainPoint}
          />
          <Label for={`${section.sectionId}-is-pain-point`}>Does this section refer to pain points?</Label>
        </div>
        {section.questions.map((question, index) => {
          return (
            <Question
              question={question}
              index={index}
              sectionId={section.sectionId}
              key={`${section.sectionId}-question-${index}`}
              updateQuestion={this.updateQuestion}
            />
          );
        })}
      </FormGroup>
    );
  }
}
