import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Goals from './Goals'
import PainPoints from './PainPoints'

export default class InfoTabDash extends React.PureComponent {
  render () {
    const { goalsAndPainPoints } = this.props
    return (
      <Container style={{ marginTop: '2rem' }}>
        <Row>
          <Col>
            <Goals goals={goalsAndPainPoints.goals} />
          </Col>

          <Col>
            <PainPoints painPoints={goalsAndPainPoints.painPoints} />
          </Col>
        </Row>
      </Container>
    )
  }
}
