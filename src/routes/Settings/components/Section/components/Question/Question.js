import React from "react";
import { Container, Input, Label } from "reactstrap";

export default class Question extends React.Component {
  onChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const { sectionId, index, setQuestionText } = this.props;
    setQuestionText(value, sectionId, index);
  };
  render() {
    const { sectionId, question, index, supportedInput } = this.props;
    const questionId = `${sectionId}-${index}`;
    return (
      <Container>
        <Label for={`${questionId}-question`}>Text Area</Label>
        <Input
          onChange={onChange}
          type="textarea"
          name="text"
          id={`${questionId}-question`}
          value={question.get("question")}
        />
        <Input type="select" id={`${questionId}-input-type`}>
          {supportedInput.toArray().map(inputType => {
            return (
              <option
                key={inputType}
                selected={question.get("type") === inputType}>
                {inputType}
              </option>
            );
          })}
        </Input>
      </Container>
    );
  }
}
