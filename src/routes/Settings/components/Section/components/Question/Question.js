import React from "react";
import { Container, Input, Label } from "reactstrap";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.question.label,
      question: props.question.question,
      type: props.question.type,
      options: props.question.options,
      comment: props.question.comment,
      required: props.question.required,
      hasPersonas: props.question.hasPersonas
    };
  }

  onQuestionChange = event => {
    event.preventDefault();
    const value = event.target.value;
    // setQuestionText("question", value, sectionId, index);
    this.setState({
      question: value
    });
  };

  onLabelChange = event => {
    event.preventDefault();
    const value = event.target.value;
    // setLabelText("label", value, sectionId, index);
    this.setState({
      label: value
    });
  };

  onIsRequiredChange = event => {
    event.preventDefault();
    const isChecked = !!event.target.checked;
    // setPersonas(value, sectionId, index);
    this.setState({
      required: isChecked
    });
  };

  onHasPersonaChange = event => {
    event.preventDefault();
    const hasPersona = !!event.target.checked;
    // setPersonas(value, sectionId, index);
    this.setState({
      required: hasPersona
    });
  };

  onCommentChange = event => {
    event.preventDefault();
    const value = event.target.value;
    // setComment(value, sectionId, index);
    this.setState({
      comment: value
    });
  };

  onOptionValueChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const index = parseInt(event.target.dataset.index);
    this.setState(prevState => {
      const nextOptions = [...prevState.options];
      nextOptions[index].value = value;
      return { options: nextOptions };
    });
  };

  onOptionPointChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const index = parseInt(event.target.dataset.index);
    this.setState(prevState => {
      const nextOptions = [...prevState.options];
      nextOptions[index].points = parseInt(value);
      return {
        options: nextOptions
      };
    });
  };

  onInputTypeChange = event => {
    event.preventDefault();
    const value = event.target.value;
    // setLabelText("label", value, sectionId, index);
    this.setState({
      type: value
    });
  };

  render() {
    const { sectionId, index, supportedInput } = this.props;
    const questionId = `${sectionId}-${index}`;
    return (
      <Container>
        <Label for={`${questionId}-question`}>Question label</Label>
        <Input
          onChange={this.onQuestionChange}
          type="text"
          name="question"
          id={`${questionId}-question`}
          value={this.state.question}
        />

        <Label for={`${questionId}-input-label`}>Input label</Label>
        <Input
          onChange={this.onLabelChange}
          type="text"
          name="inputlabel"
          id={`${questionId}-input-label`}
          value={this.state.label}
        />

        <Input
          onChange={this.onIsRequiredChange}
          type="checkbox"
          name={`${questionId}-is-required`}
          checked={this.state.required}
        />
        <Label for={`${questionId}-is-required`}>Is it required?</Label>

        <Input
          onChange={this.onHasPersonaChange}
          type="checkbox"
          name={`${questionId}-has-personas`}
          checked={this.state.hasPersonas}
        />

        <Label for={`${questionId}-has-personas`}>Are there personas?</Label>
        <Input
          type="select"
          id={`${questionId}-input-type`}
          onChange={this.onInputTypeChange}
          value={this.state.type}>
          {supportedInput.map(inputType => {
            return <option key={inputType}>{inputType}</option>;
          })}
        </Input>

        {(this.state.type === "radio" || this.state.type === "select") && (
          <ul>
            {this.state.options.map((option, optionIndex) => {
              return (
                <li key={optionIndex}>
                  <Label for={`${questionId}-${optionIndex}-value`}>
                    Set option value
                  </Label>
                  <Input
                    onChange={this.onOptionValueChange}
                    type="textarea"
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
                    type="textarea"
                    name="optionpoints"
                    id={`${questionId}-${optionIndex}-points`}
                    value={option.point}
                  />
                </li>
              );
            })}
          </ul>
        )}

        <Label for={`${questionId}-comment-label`}>Comment label</Label>
        <Input
          onChange={this.onCommentChange}
          type="textarea"
          name="comment"
          id={`${questionId}-comment-label`}
          value={this.state.comment}
        />
      </Container>
    );
  }
}
