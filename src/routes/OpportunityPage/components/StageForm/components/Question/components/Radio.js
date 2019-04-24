import React from 'react'
import { Label, Input, FormGroup } from 'reactstrap'

export default class Radio extends React.PureComponent {

  onChange = (event) => {
    const { setQuestionValue } = this.props
    setQuestionValue(event.target.value)
  }

  getOption (index) {
    const { question } = this.props
    const options = question.options || []
    return options[index] || {}
  } 

  render () {
    const { settings, questionId, required } = this.props
    return (
      <FormGroup>
        {settings.options.map((optionSetting, index) => {
          const option = this.getOption(index)
          return (
            <Label key={`${questionId}-${index}`} check style={{display: 'block'}}>
              <Input
                type="radio"
                name={questionId}
                checked={option.value === optionSetting.value}
                value={optionSetting.value}
                onChange={this.onChange}
                required={required}
              />
              {optionSetting.value}
            </Label>
          )
        })}
      </FormGroup>

    )
  }
}
