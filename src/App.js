import React, { Component } from "react";
import "./App.css";
import Settings from "./routes/Settings";
import Accounts from "./routes/Accounts";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OpportunityPage from "./routes/OpportunityPage/OpportunityPage";
import AppNavBar from "./shared/components/AppNavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <AppNavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/accounts" exact component={Accounts} />
          <Route
            path="/opportunity/:opportunityId"
            exact
            component={OpportunityPage}
          />
          <Route path="/settings/:stageId" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
