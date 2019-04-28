import React from "react";

import AppNavBar from "../../shared/components/AppNavBar";
import Info from "./components/Info";
import Intro from "./components/Intro";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <br />
        <Intro />
        <Problem />
        <Solution />
        <Info />
      </div>
    );
  }
}
