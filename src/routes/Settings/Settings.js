import React from "react";
import Section from "./components/Section";

export default class Settings extends React.Component {
  render() {
    const { stage } = this.props;
    const stageLabel = stage.get("stageLabel") || "yo";
    return (
      <div>
        <h1>{stageLabel}</h1>
        {stage
          .get("sections")
          .toArray()
          .map(section => (
            <Section section={section} key={section.get("sectionId")} />
          ))}
      </div>
    );
  }
}
