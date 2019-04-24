import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Section from './components/Section'

export default class StageForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      stage: props.stage || {}
    }
  }

  updateSection = (sectionIndex, section) => {
    this.setState(prevState => {
      const nextStage = { ...prevState.stage };
      nextStage.sections = nextStage.sections || []
      nextStage.sections[sectionIndex] = section
      return {
        stage: nextStage
      }
    })
  }

  getSectionValues (sectionId) {
    const sections = this.state.stage.sections || []
    const sectionValue = sections.find(section => section.sectionId === sectionId) || {}
    return sectionValue
  }

  // TODO: add action and save stage in opportunity
  handleSubmit = (event) => { event.preventDefault(); console.log('submit'); }
  
  render () {
    const { stage } = this.state.stage
    const { stageSettings } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <h2>{stageSettings.stageLabel}</h2>
        {stageSettings.sections.map((sectionSetting, index) => {
          return (
            <Section
              settings={sectionSetting}
              section={this.getSectionValues()}
              sectionIndex={index}
              key={section.sectionId}
              updateSection={this.updateSection}
            />)
        })}
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
