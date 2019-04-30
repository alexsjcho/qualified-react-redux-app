import React from "react";
import Radio from "./components/Radio";
import { Input } from "reactstrap";
import Select from "./components/Select";
import { isResolvedObjection } from '../../../../../../../../shared/helpers'

export default class Question extends React.PureComponent {
  setQuestionValue = (userInput, scoreDifference) => {
    const { index, question, updateQuestion } = this.props;
    const newQuestion = { ...question };
    newQuestion.userInput = userInput;
    updateQuestion(index, newQuestion, scoreDifference);
  };

  setCommentValue = event => {
    const { index, question, updateQuestion } = this.props;
    const newQuestion = { ...question };
    newQuestion.comment = event.target.value;
    updateQuestion(index, newQuestion);
  };

  isInputDisabled () {
    const { isObjection, stageId, sectionId, index, question, resolvedObjections } = this.props

    if (isObjection) {
      // NICE_TO_HAVE: Create objection class
      const objection = {
        stageId,
        sectionId,
        questionIndex: index
      }
      return isResolvedObjection(objection, resolvedObjections)
    } else {
      return false
    }
  }

  render() {
    const { settings, question, sectionId, index } = this.props;
    const questionId = `${sectionId}-${index}`;
    return (
      <div>
        <span style={{ fontWeight: "bold" }}>{settings.question}</span>
        {settings.type === "radio" && (
          <Radio
            required={settings.required}
            questionId={questionId}
            settings={settings}
            userInput={question.userInput || {}}
            setQuestionValue={this.setQuestionValue}
            disabled={this.isInputDisabled()}
          />
        )}
        {settings.type === "select" && (
          <span>
            <Select />{" "}
          </span>
        )}
        {settings.type === "date" && <span>date input</span>}
        <Input
          type="textarea"
          placeholder={settings.commentPlaceholder}
          value={question.comment}
          onChange={this.setCommentValue}
          disabled={this.isInputDisabled()}
        />
      </div>
    );
  }
}
