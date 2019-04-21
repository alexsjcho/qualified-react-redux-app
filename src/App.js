import React, { Component } from "react";
import "./App.css";
import Settings from "./routes/Settings";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./routes/Demo/Demo";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/demo" exact component={Demo} />
          <Route path="/settings/:stageId" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
