import React from "react";
import { FormGroup } from "reactstrap";

export default class Section extends React.Component {
  render() {
    const { section } = this.props;

    return (
      <FormGroup>
        <h2>{section.get("label")}</h2>
      </FormGroup>
    );
  }
}
