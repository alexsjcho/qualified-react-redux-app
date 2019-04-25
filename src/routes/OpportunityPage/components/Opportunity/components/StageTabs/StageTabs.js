import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import StageForm from '../StageForm'
import QualifiedScore from '../QualifiedScore/QualifiedScore'
import InfoTabDash from '../StageForm/components/InfoTabDash'
import { Link } from 'react-router-dom'

// import Question from "../../../routes/Settings/components/Question";
// import Stage from "../../../routes/Settings/components/Stage";

export default class StageTabs extends React.PureComponent {
  render () {
    const { stageSettings, stageId, stage, saveOpportunityStage } = this.props
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='tabs' className='flex-column'>
                <Nav.Item>
                  <Link to='qualification'>Qualification</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='discovery'>Discovery</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='demo'>Demo</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='obstacles'>Obstacles</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='negotiation'>Negotiation</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to='summary'>Summary</Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              {/* TODO: Pass down appropriate props to render this component. Remember to handle the case where the stage doesn't exist yet. */}
              <QualifiedScore />
              <InfoTabDash />
              <StageForm
                stage={stage}
                stageId={stageId}
                stageSettings={stageSettings}
                saveOpportunityStage={saveOpportunityStage}
              />
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
