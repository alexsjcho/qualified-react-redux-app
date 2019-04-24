import React from 'react'
import Radio from './components/Radio'

export default class Question extends React.PureComponent {
  setQuestionValue = () => {}
  render () {
    const { settings, question, sectionId, index } = this.props
    const questionId = `${sectionId}-${index}`
    return (
      <div>
        <span>{settings.question}</span>
        {settings.type === 'radio' && (
          <Radio required={settings.required} questionId={questionId} settings={settings} question={question} setQuestionValue={this.setQuestionValue}/>
        )}
        {settings.type === 'select' && <span>select input</span>}
        {settings.type === 'date' && <span>date input</span>}
      </div>
    )
  }
}
