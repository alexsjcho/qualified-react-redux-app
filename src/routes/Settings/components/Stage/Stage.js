import React from "react";
import Section from "../Section";
import { Container, Form, Input } from "reactstrap";

export default class Stage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stage: props.stage
    };
  }

  handleSubmit = event => {
    const { submitStage } = this.props;
    event.preventDefault();
    submitStage(this.state.stage);
  };

  updateSection = (sectionIndex, section) => {
    this.setState(prevState => {
      const nextStage = { ...prevState.stage };
      nextStage.sections[sectionIndex] = section;
      return {
        stage: nextStage
      };
    });
  };

  componentDidUpdate(prevProps) {
    const { stage } = this.props;
    if (prevProps.stage !== stage) {
      this.setState({
        stage
      });
    }
  }

  render() {
    const { stage } = this.state;
    const stageLabel = stage.stageLabel;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1>{stageLabel}</h1>

          {stage.sections.map((section, index) => (
            <Section
              section={section}
              sectionIndex={index}
              key={section.sectionId}
              updateSection={this.updateSection}
            />
          ))}

          <Input type="submit" value="Save Stage" />
        </Form>
      </Container>
    );
  }
}
