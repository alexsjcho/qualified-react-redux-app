import React from "react";
import AppNavBar from "../../shared/components/AppNavBar";
import Info from "./components/Info";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <h1>Home</h1>
        <Info />
      </div>
    );
  }
}
