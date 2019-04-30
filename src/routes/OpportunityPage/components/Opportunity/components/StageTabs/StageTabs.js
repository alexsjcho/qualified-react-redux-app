import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap'

import StageForm from '../StageForm'
import QualifiedScore from '../QualifiedScore/QualifiedScore'
import InfoTabDash from '../StageForm/components/InfoTabDash'

export default class StageTabs extends React.PureComponent {
  render () {
    const {
      stageSettings,
      stageId,
      stage,
      saveOpportunityStage,
      isSavingStage,
      goalsAndPainPoints,
      objectionsInfo,
      maxPossibleStageScore,
      toggleOpportunityObjectionResolved
    } = this.props
    return (
      <Container>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='tabs' className='flex-column'>
                <Badge style={{ marginBottom: '15px' }} color='light' pill>
                  <Nav.Item>
                    <Link to='qualification'>Qualification</Link>
                  </Nav.Item>
                </Badge>
                <Nav.Item />
                <Badge style={{ marginBottom: '15px' }} color='light' pill>
                  <Nav.Item>
                    <Link to='discovery'>Discovery</Link>
                  </Nav.Item>
                </Badge>
                <Badge style={{ marginBottom: '15px' }} color='light' pill>
                  <Nav.Item>
                    <Link to='demo'>Demo</Link>
                  </Nav.Item>
                </Badge>

                <Badge style={{ marginBottom: '15px' }} color='light' pill>
                  <Nav.Item>
                    <Link to='obstacles'>Obstacles</Link>
                  </Nav.Item>
                </Badge>

                <Badge style={{ marginBottom: '15px' }} color='light' pill>
                  <Nav.Item>
                    <Link to='negotiation'>Negotiation</Link>
                  </Nav.Item>
                </Badge>
              </Nav>
            </Col>
            <Col sm={9}>
              <QualifiedScore
                stageSettings={stageSettings}
                stage={stage}
                stageId={stageId}
                maxPossibleStageScore={maxPossibleStageScore}
              />
              <InfoTabDash
                goalsAndPainPoints={goalsAndPainPoints}
                objectionsInfo={objectionsInfo}
                stage={stage}
                toggleOpportunityObjectionResolved={toggleOpportunityObjectionResolved}
              />
              <StageForm
                stage={stage}
                stageId={stageId}
                stageSettings={stageSettings}
                saveOpportunityStage={saveOpportunityStage}
                isSavingStage={isSavingStage}
                history={this.props.history}
              />
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
