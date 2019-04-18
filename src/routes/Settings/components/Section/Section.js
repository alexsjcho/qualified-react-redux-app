import React from "react";

export default class Section extends React.Component {
  render() {
    const { section } = this.props;

    return (
      <div>
        <h2>{section.get("label")}</h2>
      </div>
    );
  }
}
