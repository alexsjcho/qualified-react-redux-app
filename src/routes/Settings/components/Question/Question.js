import React from "react";
import { Container, Input, Label } from "reactstrap";
import { SUPPORTED_INPUTS } from '../../../../shared/utils'

export default class Question extends React.PureComponent {
  
  onQuestionChange = event => {
    const { updateQuestion, index, question } = this.props
    const value = event.target.value;
    const newQuestion = { ...question }
    newQuestion.question = value
    updateQuestion(index, newQuestion)
  };

  onLabelChange = event => {
    const { updateQuestion, index, question } = this.props
    const value = event.target.value;
    const newQuestion = { ...question }
    newQuestion.label = value
    updateQuestion(index, newQuestion)
  };

  onInputTypeChange = event => {
    const { updateQuestion, index, question } = this.props
    const value = event.target.value;
    const newQuestion = { ...question }
    newQuestion.type = value
    updateQuestion(index, newQuestion)
  };

  onCommentPlaceholderChange = event => {
    const { updateQuestion, index, question } = this.props
    const value = event.target.value;
    const newQuestion = { ...question }
    newQuestion.commentPlaceholder = value
    updateQuestion(index, newQuestion)
  };

  onIsRequiredChange = event => {
    const { updateQuestion, index, question } = this.props
    const newQuestion = { ...question }
    newQuestion.required = !question.required
    updateQuestion(index, newQuestion)
  };

  onHasPersonaChange = event => {
    const { updateQuestion, index, question } = this.props
    const newQuestion = { ...question }
    newQuestion.hasPersonas = !question.hasPersonas
    updateQuestion(index, newQuestion)
  };

  onOptionValueChange = event => {
    const { updateQuestion, index, question } = this.props
    const value = event.target.value;
    const optionIndex = parseInt(event.target.dataset.index);
    const newQuestion = { ...question }
    newQuestion.options[optionIndex].value = value
    updateQuestion(index, newQuestion)
  };

  onOptionPointChange = event => {
    const { updateQuestion, index, question } = this.props
    const value = event.target.value;
    const optionIndex = parseInt(event.target.dataset.index);
    const newQuestion = { ...question }
    newQuestion.options[optionIndex].points = parseInt(value) || 0
    updateQuestion(index, newQuestion)
  };

  render() {
    const { sectionId, index, question } = this.props;
    const questionId = `${sectionId}-${index}`;
    return (
      <Container>
        <Label for={`${questionId}-question`}>Question label</Label>
        <Input
          onChange={this.onQuestionChange}
          type="text"
          name="question"
          id={`${questionId}-question`}
          value={question.question}
        />

        <Label for={`${questionId}-input-label`}>Input label</Label>
        <Input
          onChange={this.onLabelChange}
          type="text"
          name="inputlabel"
          id={`${questionId}-input-label`}
          value={question.label}
        />

        <Input
          type="select"
          id={`${questionId}-input-type`}
          onChange={this.onInputTypeChange}
          value={question.type}>
          {SUPPORTED_INPUTS.map(inputType => {
            return <option key={inputType}>{inputType}</option>;
          })}
        </Input>

        {(question.type === "radio" || question.type === "select") && (
          <ul>
            {question.options.map((option, optionIndex) => {
              return (
                <li key={optionIndex}>
                  <Label for={`${questionId}-${optionIndex}-value`}>
                    Set option value
                  </Label>
                  <Input
                    onChange={this.onOptionValueChange}
                    type="text"
                    name="optionvalue"
                    id={`${questionId}-${optionIndex}-value`}
                    value={option.value}
                    data-index={optionIndex}
                  />
                  <Label for={`${questionId}-${optionIndex}-points`}>
                    Set point value
                  </Label>
                  <Input
                    onChange={this.onOptionPointChange}
                    type="text"
                    name="optionpoints"
                    id={`${questionId}-${optionIndex}-points`}
                    value={option.points}
                    data-index={optionIndex}
                  />
                </li>
              );
            })}
          </ul>
        )}

        <div>
          <Input
            onChange={this.onIsRequiredChange}
            type="checkbox"
            name={`${questionId}-is-required`}
            id={`${questionId}-is-required`}
            checked={question.required}
          />
          <Label for={`${questionId}-is-required`}>Is it required?</Label>
        </div>

        <div>
          <Input
            onChange={this.onHasPersonaChange}
            type="checkbox"
            name={`${questionId}-has-personas`}
            id={`${questionId}-has-personas`}
            checked={question.hasPersonas}
          />
          <Label for={`${questionId}-has-personas`}>Are there personas?</Label>
        </div>

        <Label for={`${questionId}-commentPlaceholder-label`}>Comment Placeholder label</Label>
        <Input
          onChange={this.onCommentPlaceholderChange}
          type="text"
          name="commentPlaceholder"
          id={`${questionId}-commentPlaceholder-label`}
          value={question.commentPlaceholder}
        />
      </Container>
    );
  }
}
