import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Goals from './Goals'
import PainPoints from './PainPoints'
import Objections from './Section/components/Objections'

export default class InfoTabDash extends React.PureComponent {
  render () {
    const { goalsAndPainPoints, objectionsInfo, stage = {} } = this.props
    return (
      <Container style={{ marginTop: '2rem' }}>
        <h2 style={{ paddingTop: '2rem' }} className='text-center'>
          Customer's
        </h2>
        <Row className='text-center'>
          <Goals goals={goalsAndPainPoints.goals} />
          <PainPoints painPoints={goalsAndPainPoints.painPoints} />
          <Objections objections={objectionsInfo.objections} resolvedObjections={stage.resolvedObjections} />
        </Row>
      </Container>
    )
  }
}
