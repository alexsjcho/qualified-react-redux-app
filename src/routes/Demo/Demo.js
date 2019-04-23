import React from "react";
import Opportunity from "../../opportunity/components";
import AppNavBar from "../../shared/components/AppNavBar";

export default class Demo extends React.Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <Opportunity />
      </div>
    );
  }
}

// Negotiation Stage  Summary UI Render
// {
//     "summary": [
//       {
//         "problem": {},
//         "implication": {},
//         "need": {},
//         "metrics": {},
//         "identifyPain": {}
//       }
//     ]
//   },

// Demo Stage  Summary UI Render
//    {
//     "summary": [
//       {
//         "problem": {},
//         "implication": {},
//         "need": {},
//         "metrics": {},
//         "identifyPain": {}
//       }
//     ]
//   },
