import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

export default class PainPoints extends React.PureComponent {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  toggle () {
    this.setState(state => ({ collapse: !state.collapse }))
  }

  render () {
    const { painPoints } = this.props
    return (
      <Container>
        <Button
          color='danger'
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}>
          Pain Points
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <ListGroup variant='flush'>
                {painPoints.map((painPoint, index) => {
                  return (
                    <ListGroup.Item variant='danger' key={index}>
                      {painPoint.split('\n').map((line, index) => {
                        return <p key={index}>{line}</p>
                      })}
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    )
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
