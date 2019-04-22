import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import StageForm from "../StageForm";
import QualifiedScore from "../QualifiedScore/QualifiedScore";

// import Question from "../../../routes/Settings/components/Question";
// import Stage from "../../../routes/Settings/components/Stage";

export default class StageTabs extends React.Component {
  render() {
    // const { stage, submitStage, question } = this.props;
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="tabs" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="1">Qualification</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Discovery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Demo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="4">Obstacles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="5">Negotiation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6">Summary</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  {/* <Question question={question} /> */}
                  {/* <Stage stage={stage} submitStage={submitStage} /> */}
                  <QualifiedScore />
                  <StageForm />
                </Tab.Pane>

                <Tab.Pane eventKey="2">
                  <QualifiedScore />
                  <StageForm />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <QualifiedScore />
                  <StageForm />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <QualifiedScore />
                  <StageForm />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <QualifiedScore />
                  <StageForm />
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <QualifiedScore />
                  <StageForm />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
