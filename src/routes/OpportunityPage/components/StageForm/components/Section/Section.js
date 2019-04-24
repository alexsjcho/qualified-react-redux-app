import React from 'react'
import { FormGroup } from "reactstrap";
import Question from "../Question";

export default class Section extends React.PureComponent {
  updateQuestion = (questionIndex, question) => {
    const { section, updateSection, sectionIndex } = this.props;
    const newSection = { ...section };
    newSection.questions[questionIndex] = question;
    updateSection(sectionIndex, newSection);
  };

  render() {
    const { settings } = this.props;

    return (
      <FormGroup>
        <h2>{settings.label}</h2>
        {settings.questions.map((question, index) => {
          return (
            <Question
              question={question}
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
