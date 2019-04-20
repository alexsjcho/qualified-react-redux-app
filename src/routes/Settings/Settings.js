import React from "react";
import Section from "./components/Section";
import { Container, Form } from "reactstrap";

export default class Settings extends React.PureComponent {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { stage } = this.props;
    const stageLabel = stage.stageLabel || "yo";
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1>{stageLabel}</h1>

          {stage.sections
            .map(section => (
              <Section section={section} key={section.sectionId} />
            ))}
        </Form>
      </Container>
    );
  }
}
