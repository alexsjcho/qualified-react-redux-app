import React, { Component } from "react";
import "./App.css";
import Settings from "./routes/Settings";
import Accounts from "./routes/Accounts";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Demo from "./routes/Demo/Demo";
import Navbar from "react-bootstrap/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/accounts" exact component={Accounts} />
          <Route path="/demo" exact component={Demo} />
          <Route path="/settings/:stageId" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
