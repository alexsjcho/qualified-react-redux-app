import React from "react";

import Table from "react-bootstrap/Table";

export default class AllOppDash extends React.PureComponent {
  render() {
    return (
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Opportunity</th>
            <th>Company</th>
            <th>Close Date</th>
            <th>Dollar Value</th>
            <th>Stage</th>
            <th>Qualified Status</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sales Start-Up Q3 2018</td>
            <td>Salesloft</td>
            <td>9/12/2018</td>
            <td>$23,000</td>
            <td>Negotiation</td>
            <td>3/5</td>
            <td>122/200</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Fintech Start Up Q4 2018</td>
            <td>Salesloft</td>
            <td>11/23/2018</td>
            <td>$123,000</td>
            <td>Handle Obstacles</td>
            <td>4/5</td>
            <td>144/200</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
