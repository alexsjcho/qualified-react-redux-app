import React from "react";
import { Container, Input, Label } from "reactstrap";

export default class Question extends React.Component {
  onChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const { sectionId, index, setQuestionText } = this.props;
    setQuestionText("question", value, sectionId, index);
  };

  onLabelChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const { sectionId, index, setLabelText } = this.props;
    setLabelText("label", value, sectionId, index);
  };

  onCheckChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const { sectionId, index, setPersonas } = this.props;
    setPersonas(value, sectionId, index);
  };

  onCommentChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const { sectionId, index, setPersonas } = this.props;
    setComment(value, sectionId, index);
  };

  render() {
    const { sectionId, question, index, supportedInput } = this.props;
    const questionId = `${sectionId}-${index}`;
    return (
      <Container>
        <Label for={`${questionId}-question`}>Question label</Label>
        <Input
          onChange={onChange}
          type="textarea"
          name="text"
          id={`${questionId}-question`}
          value={question.get("question")}
        />

        <Label for={`${questionId}-input-label`}>Input label</Label>
        <Input
          onChange={onLabelChange}
          type="textarea"
          name="text"
          id={`${questionId}-input-label`}
          value={question.get("label")}
        />

        <Input
          onChange={onCheckChange}
          type="checkbox"
          name={`${questionId}-is-required`}
          checked={question.get("required")}
        />
        <Label for={`${questionId}-is-required`}>Is it required?</Label>

        <Input
          onChange={onCheckChange}
          type="checkbox"
          name={`${questionId}-has-personas`}
          checked={question.get("hasPersonas")}
        />

        <Label for={`${questionId}-has-personas`}>Are there personas?</Label>
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

        {(question.get("type") === "radio" ||
          question.get("type") === "select") && (
          <ul>
            {question
              .get("options")
              .toArray()
              .map((option, optionIndex) => {
                return (
                  <li>
                    <Label for={`${questionId}-${optionIndex}-value`}>
                      Set option value
                    </Label>
                    <Input
                      onChange={onChange}
                      type="textarea"
                      name="text"
                      id={`${questionId}-${optionIndex}-value`}
                      value={option.get("value")}
                    />
                    <Label for={`${questionId}-${optionIndex}-points`}>
                      Set point value
                    </Label>
                    <Input
                      onChange={onChange}
                      type="textarea"
                      name="text"
                      id={`${questionId}-${optionIndex}-points`}
                      value={option.get("point")}
                    />
                  </li>
                );
              })}
          </ul>
        )}

        <Label for={`${questionId}-comment-label`}>Comment label</Label>
        <Input
          onChange={onCommentChange}
          type="textarea"
          name="text"
          id={`${questionId}-comment-label`}
          value={question.get("comment")}
        />
      </Container>
    );
  }
}
