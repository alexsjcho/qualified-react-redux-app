import React from 'react'
import { FormGroup } from 'reactstrap'
import Question from '../Question'

export default class Section extends React.PureComponent {

  updateQuestion = (questionIndex, question) => {
    const { section, updateSection, sectionIndex } = this.props
    const newSection = { ...section }
    newSection.questions[questionIndex] = question
    updateSection(sectionIndex, newSection)
  }
  
  render () {
    const { section } = this.props

    return (
      <FormGroup>
        <h2>{section.label}</h2>
        {section.questions.map((question, index) => {
          return (
            <Question
              question={question}
              index={index}
              sectionId={section.sectionId}
              supportedInput={['radio', 'select', 'date']}
              key={`${section.sectionId}-question-${index}`}
              updateQuestion={this.updateQuestion}
            />
          )
        })}
      </FormGroup>
    )
  }
}
