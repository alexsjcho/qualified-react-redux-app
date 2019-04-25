import React from "react";
import Radio from "./components/Radio";
import { Input } from "reactstrap";
import Select from "./components/Select";

export default class Question extends React.PureComponent {
  setQuestionValue = userInput => {
    const { index, question, updateQuestion } = this.props;
    const newQuestion = { ...question };
    newQuestion.userInput = userInput;
    updateQuestion(index, newQuestion);
  };

  setCommentValue = event => {
    const { index, question, updateQuestion } = this.props;
    const newQuestion = { ...question };
    newQuestion.comment = event.target.value;
    updateQuestion(index, newQuestion);
  };

  render() {
    const { settings, question, sectionId, index } = this.props;
    const questionId = `${sectionId}-${index}`;
    return (
      <div>
        <span>{settings.question}</span>
        {settings.type === "radio" && (
          <Radio
            required={settings.required}
            questionId={questionId}
            settings={settings}
            userInput={question.userInput || {}}
            setQuestionValue={this.setQuestionValue}
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
        />
      </div>
    );
  }
}
