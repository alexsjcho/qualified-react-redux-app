import React from "react";
import { Button, Form } from "reactstrap";
import Section from "./components/Section";

export default class StageForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stage: props.stage || { stageId: props.stageSettings.stageId, score: 0 }
    };
  }

  updateSection = (sectionIndex, section, scoreDifference = 0) => {
    this.setState(prevState => {
      const nextStage = { ...prevState.stage };
      nextStage.sections = nextStage.sections || [];
      nextStage.sections[sectionIndex] = section;
      nextStage.score += scoreDifference;
      return {
        stage: nextStage
      };
    });
  };

  getSectionValues(index) {
    const sections = this.state.stage.sections || [];
    return sections[index] || {};
  }

  handleSubmit = event => {
    event.preventDefault();
    const { saveOpportunityStage } = this.props;
    saveOpportunityStage(this.state.stage);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.stage !== this.props.stage) {
      this.setState({
        stage: this.props.stage || {
          stageId: this.props.stageSettings.stageId,
          score: 0
        }
      });
    }
    // If isSavingStage went from true to false
    if (prevProps.isSavingStage && !this.props.isSavingStage) {
      alert("Stage saved successfully");
      if (this.props.stageSettings.nextStageId) {
        this.props.history.push(this.props.stageSettings.nextStageId);
      } else {
        this.props.history.push("/accounts");
      }
    }
  }

  render() {
    const { stageSettings } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {stageSettings.sections.map((sectionSetting, index) => {
          return (
            <Section
              settings={sectionSetting}
              section={this.getSectionValues(index)}
              sectionIndex={index}
              key={sectionSetting.sectionId}
              updateSection={this.updateSection}
            />
          );
        })}
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
