import React from "react";
import Section from "./components/Section";
import { Container, Form } from "reactstrap";

export default class Settings extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { stage } = this.props;
    const stageLabel = stage.get("stageLabel") || "yo";
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h1>{stageLabel}</h1>

          {stage
            .get("sections")
            .toArray()
            .map(section => (
              <Section section={section} key={section.get("sectionId")} />
            ))}
        </Form>
      </Container>
    );
  }
}
