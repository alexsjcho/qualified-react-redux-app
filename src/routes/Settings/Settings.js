import React from "react";

export default class Settings extends React.Component {
  componentDidMount() {
    console.log(this.props.stage);
  }
  render() {
    return (
      <div>
        <h1>yo</h1>
      </div>
    );
  }
}
