import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import OpportunityRow from "../OpportunityRow";

export default class AllOppDash extends React.PureComponent {
  render() {
    return (
      <Container>
        <h1>All Accounts</h1>
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Opportunity</th>
              <th>Company</th>
              <th>Close Date</th>
              <th>Dollar Value</th>
              <th>Stage</th>
              <th>Score</th>
              <th />
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
              <td>122/200</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fintech Start Up Q4 2018</td>
              <td>Lending Club</td>
              <td>11/23/2018</td>
              <td>$123,000</td>
              <td>Handle Obstacles</td>

              <td>144/200</td>
            </tr>

            {this.props.opportunitiesList.map((opportunity, index) => {
              return (
                <OpportunityRow
                  key={opportunity.opportunityId}
                  index={index}
                  opportunity={opportunity}
                  allStageTotalScore={this.props.allStageTotalScore}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}
